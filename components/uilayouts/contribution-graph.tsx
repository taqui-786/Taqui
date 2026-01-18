"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type ContributionData = {
  date: string;
  count: number;
  level: number;
};

export type ContributionGraphProps = {
  data?: ContributionData[];
  className?: string;
  showLegend?: boolean;
  showTooltips?: boolean;
  /** End date for the rolling 12-month period. Defaults to today. */
  endDate?: Date;
};

const WEEKS_IN_YEAR = 53;
const DAYS_IN_WEEK = 7;
const CELL_SIZE = 12;
const CELL_GAP = 3;
const HEADER_HEIGHT = 22;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LEVEL_0 = 0;
const CONTRIBUTION_LEVELS = [0, 1, 2, 3, 4];

// Helper function to check if date is in valid range
const isDateInValidRange = (
  currentDate: Date,
  startDate: Date,
  endDate: Date
) => {
  return currentDate >= startDate && currentDate <= endDate;
};

// Helper function to create day data
const createDayData = (
  currentDate: Date,
  contributionData: ContributionData[]
): ContributionData => {
  const dateString = currentDate.toISOString().split("T")[0];
  const existingData = contributionData.find((d) => d.date === dateString);
  return {
    date: dateString,
    count: existingData?.count ?? LEVEL_0,
    level: existingData?.level ?? LEVEL_0,
  };
};

export function ContributionGraph({
  data = [],
  className = "",
  showLegend = true,
  showTooltips = true,
  endDate: propEndDate,
}: ContributionGraphProps) {
  // Use client-side only date calculation to avoid SSR hydration mismatch
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll to the right (latest contributions) when mounted
  useEffect(() => {
    if (mounted && scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth;
    }
  }, [mounted]);

  // Calculate rolling 12-month date range - ensuring today is always the last date
  const { startDate, endDate, firstSunday } = useMemo(() => {
    // On server, use a placeholder; on client, use actual current date
    const now = mounted ? new Date() : new Date("2026-01-14");

    // Create clean dates at midnight for calculations
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // End date is today (or propEndDate if provided)
    const end =
      propEndDate ??
      new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23,
        59,
        59,
        999
      );

    // Find the Saturday of the current week (end of the week containing today)
    const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
    const daysUntilSaturday = 6 - dayOfWeek;
    const currentWeekSaturday = new Date(today);
    currentWeekSaturday.setDate(today.getDate() + daysUntilSaturday);

    // The last week's Sunday (start of the week containing today)
    const lastWeekSunday = new Date(today);
    lastWeekSunday.setDate(today.getDate() - dayOfWeek);

    // Calculate the first Sunday (52 weeks before the last week's Sunday)
    // This gives us 53 columns: week 0 through week 52, with today in the last column
    const firstSun = new Date(lastWeekSunday);
    firstSun.setDate(lastWeekSunday.getDate() - 52 * 7);

    // Start date for data filtering (from first Sunday)
    const start = new Date(firstSun);

    return { startDate: start, endDate: end, firstSunday: firstSun };
  }, [propEndDate, mounted]);

  // Generate all days for the rolling 12-month period
  const yearData = useMemo(() => {
    const days: (ContributionData | null)[][] = [];

    for (let weekNum = 0; weekNum < WEEKS_IN_YEAR; weekNum++) {
      const week: (ContributionData | null)[] = [];
      for (let day = 0; day < DAYS_IN_WEEK; day++) {
        const currentDate = new Date(firstSunday);
        currentDate.setDate(
          firstSunday.getDate() + weekNum * DAYS_IN_WEEK + day
        );

        // Only show dates within the valid range and not in the future
        if (isDateInValidRange(currentDate, startDate, endDate)) {
          week.push(createDayData(currentDate, data));
        } else {
          week.push(null);
        }
      }
      days.push(week);
    }

    return days;
  }, [data, startDate, endDate, firstSunday]);

  // Calculate total contributions
  const totalContributions = useMemo(() => {
    return data.reduce((sum, d) => sum + d.count, 0);
  }, [data]);

  const displayYear = endDate.getFullYear();

  // Calculate month positions - only for weeks with visible data
  const monthPositions = useMemo(() => {
    const positions: { month: string; x: number }[] = [];
    let currentMonth = -1;

    for (let weekNumber = 0; weekNumber < WEEKS_IN_YEAR; weekNumber++) {
      const weekStartDate = new Date(firstSunday);
      weekStartDate.setDate(firstSunday.getDate() + weekNumber * DAYS_IN_WEEK);

      const weekEndDate = new Date(weekStartDate);
      weekEndDate.setDate(weekStartDate.getDate() + 6);

      // Only show month if this week has visible data (overlaps with date range)
      const weekHasData = weekEndDate >= startDate && weekStartDate <= endDate;
      if (!weekHasData) continue;

      // Use the first visible day in the week to determine the month
      const visibleDay = weekStartDate < startDate ? startDate : weekStartDate;
      const monthKey = visibleDay.getMonth();

      if (monthKey !== currentMonth) {
        positions.push({
          month: MONTHS[monthKey],
          x: weekNumber * (CELL_SIZE + CELL_GAP),
        });
        currentMonth = monthKey;
      }
    }

    return positions;
  }, [firstSunday, startDate, endDate]);

  const getContributionText = (count: number) => {
    if (count === 0) return "No contributions";
    if (count === 1) return "1 contribution";
    return `${count} contributions`;
  };

  // Calculate SVG dimensions
  const svgWidth = WEEKS_IN_YEAR * (CELL_SIZE + CELL_GAP);
  const svgHeight = HEADER_HEIGHT + DAYS_IN_WEEK * (CELL_SIZE + CELL_GAP);

  if (!mounted) {
    return (
      <div
        className={`flex w-max max-w-full flex-col gap-2 text-sm overflow-hidden ${className}`}
      >
        <div
          className="bg-muted animate-pulse rounded"
          style={{ width: svgWidth, height: svgHeight }}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex w-max max-w-full flex-col gap-2 text-sm ${className}`}
    >
      <div
        ref={scrollContainerRef}
        className="max-w-full overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-muted-foreground"
      >
        <svg
          className="block overflow-visible"
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          width={svgWidth}
        >
          <title>Contribution Graph</title>

          {/* Month headers */}
          <g className="fill-current">
            {monthPositions.map((pos, idx) => (
              <text key={`month-${idx}`} dominantBaseline="hanging" x={pos.x}>
                {pos.month}
              </text>
            ))}
          </g>

          {/* Day cells */}
          {yearData.map((week, weekIndex) =>
            week.map((day, dayIndex) => {
              if (!day) return null;

              const x = weekIndex * (CELL_SIZE + CELL_GAP);
              const y = HEADER_HEIGHT + dayIndex * (CELL_SIZE + CELL_GAP);

              const rect = (
                <rect
                  className="data-[level='0']:fill-muted cursor-pointer data-[level='1']:fill-primary/20 data-[level='2']:fill-primary/40 data-[level='3']:fill-primary/60 data-[level='4']:fill-primary/80"
                  data-count={day.count}
                  data-date={day.date}
                  data-level={day.level}
                  height={CELL_SIZE}
                  rx={2}
                  ry={2}
                  width={CELL_SIZE}
                  x={x}
                  y={y}
                />
              );

              if (!showTooltips) {
                return (
                  <g key={`${day.date}-${weekIndex}-${dayIndex}`}>{rect}</g>
                );
              }

              return (
                <Tooltip key={`${day.date}-${weekIndex}-${dayIndex}`} >
                  <TooltipTrigger asChild>
                    <g className="cursor-pointer">{rect}</g>
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary  text-white dark:text-black px-2.5 py-1.5 rounded-md shadow-lg">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-[13px]">
                        {day.date}
                      </div>
                      <div className="text-[12px] text-neutral-300 dark:text-neutral-700">
                        {getContributionText(day.count)}
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })
          )}
        </svg>
      </div>

      {/* Footer with total and legend */}
      {showLegend && (
        <div className="flex items-center justify-between text-[11px]">
          {/* Total activities */}
          <span className="text-muted-foreground">
            Total <b>{totalContributions}</b> contributions
          </span>

          {/* Legend */}
          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground">Less</span>
            <div className="flex items-center gap-[3px]">
              {CONTRIBUTION_LEVELS.map((level) => (
                <svg key={level} width={CELL_SIZE} height={CELL_SIZE}>
                  <rect
                    className="data-[level='0']:fill-muted data-[level='1']:fill-primary/20 data-[level='2']:fill-primary/40 data-[level='3']:fill-primary/60 data-[level='4']:fill-primary/80"
                    data-level={level}
                    height={CELL_SIZE}
                    rx={2}
                    ry={2}
                    width={CELL_SIZE}
                    x={0}
                    y={0}
                  />
                </svg>
              ))}
            </div>
            <span className="text-muted-foreground">More</span>
          </div>
        </div>
      )}
    </div>
  );
}

export const HeroContributionGraph = () => {
  const [contributionData, setContributionData] = useState<ContributionData[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = "https://github-contributions-api.deno.dev";
  const username = "taqui-786";

  type GitHubContribution = {
    color: string;
    contributionCount: number;
    contributionLevel: string;
    date: string;
  };

  type GitHubAPIResponse = {
    contributions: GitHubContribution[][];
    totalContributions: number;
  };

  const mapContributionLevel = (level: string): number => {
    switch (level) {
      case "NONE":
        return 0;
      case "FIRST_QUARTILE":
        return 1;
      case "SECOND_QUARTILE":
        return 2;
      case "THIRD_QUARTILE":
        return 3;
      case "FOURTH_QUARTILE":
        return 4;
      default:
        return 0;
    }
  };

  const fetchGithubData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/${username}.json`);
      const data: GitHubAPIResponse = await response.json();

      const transformedData: ContributionData[] = data.contributions
        .flat()
        .map((item) => ({
          date: item.date,
          count: item.contributionCount,
          level: mapContributionLevel(item.contributionLevel),
        }));

      setContributionData(transformedData);
    } catch (error) {
      console.error("Failed to fetch GitHub contribution data:", error);
      setContributionData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div className="max-w-full rounded-lg  bg-background  animate-fade-in-blur">
      {isLoading ? (
        <div className="flex items-center justify-center h-[160px] w-full">
          <div className="h-full  w-full bg-muted animate-pulse rounded" />
        </div>
      ) : (
        <ContributionGraph
          className="w-full"
          data={contributionData}
          showLegend={true}
          showTooltips={true}
        />
      )}
    </div>
  );
};

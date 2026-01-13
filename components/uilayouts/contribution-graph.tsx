"use client";

import { motion } from "motion/react";
import type React from "react";
import { useEffect, useMemo, useState } from "react";

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
const JANUARY_MONTH = 0;
const DECEMBER_MONTH = 11;
const SUNDAY_DAY = 0;
const MIN_WEEKS_FOR_DECEMBER_HEADER = 2;
const TOOLTIP_OFFSET_X = 10;
const TOOLTIP_OFFSET_Y = 40;

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

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Contribution level colors - Light to Dark progression
const CONTRIBUTION_COLORS = [
  "bg-muted/50", // Level 0 - No contributions (lightest)
  "bg-primary/20", // Level 1 - Few contributions
  "bg-primary/40", // Level 2 - Some contributions
  "bg-primary/60", // Level 3 - Many contributions
  "bg-primary/80", // Level 4 - Most contributions (darkest)
];

const LEVEL_0 = 0;
const LEVEL_1 = 1;
const LEVEL_2 = 2;
const LEVEL_3 = 3;
const LEVEL_4 = 4;
const CONTRIBUTION_LEVELS = [LEVEL_0, LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4];
const DAY_1 = 1;
const DAY_31 = 31;

// Helper function to check if date is in valid range (for rolling 12-month period)
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

// Helper function to check if month should be shown (always show for rolling period)
const shouldShowMonthHeader = (weekCount: number) => weekCount >= 1;

// Helper function to calculate month headers for rolling 12-month period
const calculateMonthHeaders = (startDate: Date, endDate: Date) => {
  const headers: {
    month: string;
    colspan: number;
    startWeek: number;
    year: number;
  }[] = [];

  // Get the first Sunday at or before the start date
  const firstSunday = new Date(startDate);
  firstSunday.setDate(startDate.getDate() - startDate.getDay());

  let currentMonth = -1;
  let currentYear = -1;
  let monthStartWeek = 0;
  let weekCount = 0;

  for (let weekNumber = 0; weekNumber < WEEKS_IN_YEAR; weekNumber++) {
    const weekDate = new Date(firstSunday);
    weekDate.setDate(firstSunday.getDate() + weekNumber * DAYS_IN_WEEK);

    // Skip weeks that are entirely outside our date range
    const weekEndDate = new Date(weekDate);
    weekEndDate.setDate(weekDate.getDate() + 6);
    if (weekEndDate < startDate || weekDate > endDate) {
      continue;
    }

    const monthKey = weekDate.getMonth();
    const yearKey = weekDate.getFullYear();

    if (monthKey !== currentMonth || yearKey !== currentYear) {
      if (currentMonth !== -1 && shouldShowMonthHeader(weekCount)) {
        headers.push({
          month: MONTHS[currentMonth],
          colspan: weekCount,
          startWeek: monthStartWeek,
          year: currentYear,
        });
      }
      currentMonth = monthKey;
      currentYear = yearKey;
      monthStartWeek = weekNumber;
      weekCount = 1;
    } else {
      weekCount++;
    }
  }

  // Add the last month
  if (currentMonth !== -1 && shouldShowMonthHeader(weekCount)) {
    headers.push({
      month: MONTHS[currentMonth],
      colspan: weekCount,
      startWeek: monthStartWeek,
      year: currentYear,
    });
  }

  return headers;
};

export function ContributionGraph({
  data = [],
  className = "",
  showLegend = true,
  showTooltips = true,
  endDate: propEndDate,
}: ContributionGraphProps) {
  const [hoveredDay, setHoveredDay] = useState<ContributionData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Calculate rolling 12-month date range
  const { startDate, endDate } = useMemo(() => {
    const end = propEndDate ?? new Date();
    // Set end date to end of day
    end.setHours(23, 59, 59, 999);

    // Start date is exactly 1 year before end date
    const start = new Date(end);
    start.setFullYear(start.getFullYear() - 1);
    start.setDate(start.getDate() + 1); // Add 1 day to make it a full year range
    start.setHours(0, 0, 0, 0);

    return { startDate: start, endDate: end };
  }, [propEndDate]);

  // Generate all days for the rolling 12-month period
  const yearData = useMemo(() => {
    const days: ContributionData[] = [];

    // Start from the Sunday at or before the start date
    const firstSunday = new Date(startDate);
    firstSunday.setDate(startDate.getDate() - startDate.getDay());

    // Generate 53 weeks (GitHub shows 53 weeks)
    for (let weekNum = 0; weekNum < WEEKS_IN_YEAR; weekNum++) {
      for (let day = 0; day < DAYS_IN_WEEK; day++) {
        const currentDate = new Date(firstSunday);
        currentDate.setDate(
          firstSunday.getDate() + weekNum * DAYS_IN_WEEK + day
        );

        if (isDateInValidRange(currentDate, startDate, endDate)) {
          days.push(createDayData(currentDate, data));
        } else {
          // Add empty day for alignment
          days.push({
            date: "",
            count: LEVEL_0,
            level: LEVEL_0,
          });
        }
      }
    }

    return days;
  }, [data, startDate, endDate]);

  // Calculate month headers with colspan for rolling period
  const monthHeaders = useMemo(
    () => calculateMonthHeaders(startDate, endDate),
    [startDate, endDate]
  );

  const handleDayHover = (day: ContributionData, event: React.MouseEvent) => {
    if (showTooltips && day.date) {
      setHoveredDay(day);
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleDayLeave = () => {
    setHoveredDay(null);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getContributionText = (count: number) => {
    if (count === LEVEL_0) {
      return "No contributions";
    }
    if (count === LEVEL_1) {
      return "1 contribution";
    }
    return `${count} contributions`;
  };

  return (
    <div className={`contribution-graph ${className}`}>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent ">
        <table className="border-separate border-spacing-1 text-xs">
          <caption className="sr-only">
            Contribution Graph for the past year
          </caption>

          {/* Month Headers */}
          <thead>
            <tr className="h-3">
              <td className="w-7 min-w-7" />
              {monthHeaders.map((header) => (
                <td
                  className="relative text-left text-foreground"
                  colSpan={header.colspan}
                  key={`${header.month}-${header.startWeek}`}
                >
                  <span className="absolute top-0 left-1">{header.month}</span>
                </td>
              ))}
            </tr>
          </thead>

          {/* Day Grid */}
          <tbody>
            {Array.from({ length: DAYS_IN_WEEK }, (_, dayIndex) => (
              <tr className="h-2.5" key={DAYS[dayIndex]}>
                {/* Day Labels */}
                <td className="relative w-7 min-w-7 text-foreground">
                  {dayIndex % 2 === 0 && (
                    <span className="-bottom-0.5 absolute left-0 text-xs">
                      {DAYS[dayIndex]}
                    </span>
                  )}
                </td>

                {/* Day Cells */}
                {/* biome-ignore lint/nursery/noShadow: False positive - w is a different variable from dayIndex */}
                {Array.from({ length: WEEKS_IN_YEAR }, (_, w) => {
                  const dayData = yearData[w * DAYS_IN_WEEK + dayIndex];
                  const cellKey = `${
                    dayData?.date ?? "empty"
                  }-${w}-${dayIndex}`;
                  if (!dayData?.date) {
                    return (
                      <td className="h-2.5 w-2.5 p-0" key={cellKey}>
                        <div className="h-2.5 w-2.5" />
                      </td>
                    );
                  }

                  return (
                    <td
                      className="h-2.5 w-2.5 cursor-pointer p-0"
                      key={cellKey}
                      onMouseEnter={(e) => handleDayHover(dayData, e)}
                      onMouseLeave={handleDayLeave}
                      title={
                        showTooltips
                          ? `${formatDate(dayData.date)}: ${getContributionText(
                              dayData.count
                            )}`
                          : undefined
                      }
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-sm ${
                          CONTRIBUTION_COLORS[dayData.level]
                        } hover:ring-2 hover:ring-background`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tooltip */}
      {showTooltips && hoveredDay && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-none fixed z-50 rounded-lg border border-border bg-popover px-3 py-2 text-popover-foreground text-sm shadow-lg"
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          style={{
            left: tooltipPosition.x + TOOLTIP_OFFSET_X,
            top: tooltipPosition.y - TOOLTIP_OFFSET_Y,
          }}
        >
          <div className="font-semibold">
            {getContributionText(hoveredDay.count)}
          </div>
          <div className="text-popover-foreground/70">
            {formatDate(hoveredDay.date)}
          </div>
        </motion.div>
      )}

      {/* Legend */}
      {showLegend && (
        <div className="mt-4 flex items-center justify-between text-foreground/70 text-xs">
          <span>Less</span>
          <div className="flex items-center gap-1">
            {CONTRIBUTION_LEVELS.map((level) => (
              <div
                className={`h-3 w-3 rounded-sm ${CONTRIBUTION_COLORS[level]}`}
                key={level}
              />
            ))}
          </div>
          <span>More</span>
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
  const [showLegend] = useState(true);
  const [showTooltips] = useState(true);

  const apiUrl = "https://github-contributions-api.deno.dev";
  const username = "taqui-786";

  // Type for the GitHub API response
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

  // Map contribution level strings to numbers (0-4)
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

      // Flatten the nested array and transform to ContributionData format
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
    <div className="max-w-full rounded-lg border bg-background p-2 animate-fade-in-blur">
      {isLoading ? (
        <div className="flex items-center justify-center h-32">
      <div className="h-full w-full bg-gray-200 animate-pulse"></div>
        </div>
      ) : (
        <ContributionGraph
          className="w-full"
          data={contributionData}
          showLegend={showLegend}
          showTooltips={showTooltips}
        />
      )}
    </div>
  );
};

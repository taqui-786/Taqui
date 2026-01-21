"use server";

import { unstable_cache } from "next/cache";

async function fetchPageViews(): Promise<number> {
  try {
    const res = await fetch(
      `https://api.umami.is/v1/websites/${
        process.env.UMAMI_WEBSITE_ID
      }/stats?startAt=0&endAt=${Date.now()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UMAMI_API_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch Umami stats:", res.status);
      return 0;
    }

    const data = await res.json();
    return data.pageviews ?? 0;
  } catch (error) {
    console.error("Error fetching Umami stats:", error);
    return 0;
  }
}

export const getPageViews = unstable_cache(
  fetchPageViews,
  ["umami-pageviews"],
  { revalidate: 180 } // 3 minutes
);

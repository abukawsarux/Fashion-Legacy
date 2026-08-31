"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function VisitorTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  const rawApiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    (typeof window !== "undefined"
      ? window.location.hostname.includes("fashionlegacy.live") || window.location.hostname.includes("vercel.app")
        ? "https://fashion-legacy-backend.vercel.app"
        : `http://${window.location.hostname}:5000`
      : "http://localhost:5000");
  const apiBaseUrl = rawApiUrl.endsWith("/") ? rawApiUrl.slice(0, -1) : rawApiUrl;

  useEffect(() => {
    if (!pathname) return;

    // Prevent duplicate calls for exact same pathname during strict mode double-invocations
    const currentTrackKey = `${pathname}_${Date.now()}`;
    if (lastTrackedPath.current === pathname) {
      return;
    }
    lastTrackedPath.current = pathname;

    const todayKey = new Date().toISOString().split("T")[0];
    const visitedToday = sessionStorage.getItem("fl_visited_today");

    let isNewVisitor = false;
    if (visitedToday !== todayKey) {
      isNewVisitor = true;
      sessionStorage.setItem("fl_visited_today", todayKey);
    }

    fetch(`${apiBaseUrl}/api/analytics/track-visit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isNewVisitor }),
    }).catch((err) => {
      // Quietly ignore tracking errors (e.g. ad blockers or offline network)
      console.debug("Visitor tracking request ignored or failed:", err);
    });
  }, [pathname, apiBaseUrl]);

  return null;
}

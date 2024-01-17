"use client";

// @ts-ignore
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export function analytics() {
  return (
    <VercelAnalytics
      beforeSend={(event) => {
        if (localStorage.getItem("va-disable")) {
          return null;
        }
        return event;
      }}
    />
  );
}

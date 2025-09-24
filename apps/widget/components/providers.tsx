"use client";

import * as React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Provider } from "jotai";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_CONVEX_URL. Set NEXT_PUBLIC_CONVEX_URL to your Convex deployment URL."
  );
}
const convex = new ConvexReactClient(convexUrl);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <Provider>{children}</Provider>
    </ConvexProvider>
  );
}

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register plugins in client environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Helper to check for user accessibility preferences
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Reusable standard easing presets
export const EASINGS = {
  editorial: "power3.out",
  dramatic: "expo.out",
  smooth: "power2.out",
  inOut: "power2.inOut",
};

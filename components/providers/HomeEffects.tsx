"use client";

import { useEffect } from "react";
import { initHomeEffects } from "@/lib/template/initHome";
import { refreshLenis } from "@/lib/template/lenis";

function whenReady(callback: () => void) {
  if (window.__pixoraReady) {
    callback();
    return () => undefined;
  }

  const onReady = () => callback();
  window.addEventListener("pixora-ready", onReady, { once: true });
  return () => window.removeEventListener("pixora-ready", onReady);
}

export default function HomeEffects() {
  useEffect(() => {
    let timeout = 0;

    const stop = whenReady(() => {
      timeout = window.setTimeout(() => {
        initHomeEffects();
        refreshLenis();
      }, 50);
    });

    return () => {
      stop();
      window.clearTimeout(timeout);
    };
  }, []);

  return null;
}

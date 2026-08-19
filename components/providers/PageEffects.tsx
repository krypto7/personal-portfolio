"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { bootPageEffects } from "@/lib/effects/boot";

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    bootPageEffects();
    document.documentElement.classList.remove("no-js");
  }, [pathname]);

  return null;
}

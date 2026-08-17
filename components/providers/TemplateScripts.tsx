"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { bootTemplate } from "@/lib/template/boot";

export default function TemplateScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let active = true;

    bootTemplate()
      .then(() => {
        if (!active) return;
        document.documentElement.classList.remove("no-js");
      })
      .catch((error) => {
        console.error("Template scripts failed to load:", error);
      });

    return () => {
      active = false;
    };
  }, [pathname]);

  return null;
}

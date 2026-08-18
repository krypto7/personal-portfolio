"use client";

import type { ReactNode } from "react";
import Marquee from "react-fast-marquee";

type SiteMarqueeProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  pauseOnHover?: boolean;
};

export default function SiteMarquee({
  children,
  className,
  direction = "left",
  speed = 50,
  pauseOnHover = false,
}: SiteMarqueeProps) {
  const isVertical = direction === "up" || direction === "down";

  if (isVertical) {
    return (
      <div
        className={["px-marquee", "is-vertical", className].filter(Boolean).join(" ")}
        style={{ ["--marquee-duration" as string]: `${Math.max(6, 28 - speed / 6)}s` }}
      >
        <div className={`px-vertical-track is-${direction}${pauseOnHover ? " can-pause" : ""}`}>
          <div className="px-vertical-group">{children}</div>
          <div className="px-vertical-group" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={["px-marquee", className].filter(Boolean).join(" ")}>
      <Marquee
        autoFill
        direction={direction}
        speed={speed}
        gradient={false}
        pauseOnHover={pauseOnHover}
        style={{ width: "100%", overflow: "hidden" }}
      >
        {children}
      </Marquee>
    </div>
  );
}

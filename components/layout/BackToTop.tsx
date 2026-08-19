"use client";

import { useEffect, useState } from "react";
import { BackToTopIcon } from "@/components/shared/Icons";
import { scrollToTop } from "@/lib/effects/lenis";

function currentScroll() {
  return window.__pixoraLenis?.scroll ?? window.scrollY;
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(currentScroll() > 300);

    const bindLenis = () => {
      window.__pixoraLenis?.on("scroll", toggle);
      toggle();
    };

    window.addEventListener("scroll", toggle, { passive: true });
    window.addEventListener("pixora-lenis", bindLenis);
    bindLenis();
    toggle();

    return () => {
      window.removeEventListener("scroll", toggle);
      window.removeEventListener("pixora-lenis", bindLenis);
      window.__pixoraLenis?.off("scroll", toggle);
    };
  }, []);

  return (
    <div className={`back-to-top-wrapper${visible ? " back-to-top-btn-show" : ""}`}>
      <button
        id="back_to_top"
        type="button"
        className="back-to-top-btn"
        aria-label="Back to top"
        onClick={() => scrollToTop(0.8)}
      >
        <BackToTopIcon />
      </button>
    </div>
  );
}

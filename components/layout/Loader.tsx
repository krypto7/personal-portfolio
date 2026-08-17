"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "visible" | "hiding" | "hidden";

const MIN_VISIBLE_MS = 800;
const HIDE_ANIMATION_MS = 1600;

function isInternalRouteClick(anchor: HTMLAnchorElement, event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }

  if (url.origin !== window.location.origin) return false;
  if (url.pathname === window.location.pathname && url.search === window.location.search) {
    return false;
  }

  return true;
}

export default function Loader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("visible");
  const [count, setCount] = useState(0);

  const pathnameRef = useRef(pathname);
  const phaseRef = useRef<Phase>("visible");
  const countRef = useRef(0);
  const shownAtRef = useRef(0);
  const tickRef = useRef<number | null>(null);
  const hideWaitRef = useRef<number | null>(null);
  const hideDoneRef = useRef<number | null>(null);
  const showLoaderRef = useRef<() => void>(() => {});
  const hideLoaderRef = useRef<() => void>(() => {});

  phaseRef.current = phase;

  useEffect(() => {
    const clearTick = () => {
      if (tickRef.current != null) {
        window.clearTimeout(tickRef.current);
        tickRef.current = null;
      }
    };

    const clearHideTimers = () => {
      if (hideWaitRef.current != null) window.clearTimeout(hideWaitRef.current);
      if (hideDoneRef.current != null) window.clearTimeout(hideDoneRef.current);
      hideWaitRef.current = null;
      hideDoneRef.current = null;
    };

    const startTick = () => {
      clearTick();
      const tick = () => {
        if (phaseRef.current !== "visible" || countRef.current >= 90) return;
        const next = Math.min(countRef.current + Math.floor(Math.random() * 8) + 1, 90);
        countRef.current = next;
        setCount(next);
        tickRef.current = window.setTimeout(tick, Math.floor(Math.random() * 90) + 25);
      };
      tickRef.current = window.setTimeout(tick, 40);
    };

    showLoaderRef.current = () => {
      clearTick();
      clearHideTimers();
      countRef.current = 0;
      setCount(0);
      phaseRef.current = "visible";
      setPhase("visible");
      shownAtRef.current = performance.now();
      startTick();
    };

    hideLoaderRef.current = () => {
      if (phaseRef.current !== "visible") return;

      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - shownAtRef.current));

      hideWaitRef.current = window.setTimeout(() => {
        clearTick();
        countRef.current = 100;
        setCount(100);
        phaseRef.current = "hiding";
        setPhase("hiding");
        hideDoneRef.current = window.setTimeout(() => {
          phaseRef.current = "hidden";
          setPhase("hidden");
          countRef.current = 0;
          setCount(0);
        }, HIDE_ANIMATION_MS);
      }, remaining);
    };

    shownAtRef.current = performance.now();
    startTick();

    const finishInitial = () => hideLoaderRef.current();
    if (document.readyState === "complete") {
      hideWaitRef.current = window.setTimeout(finishInitial, MIN_VISIBLE_MS);
    } else {
      window.addEventListener("load", finishInitial, { once: true });
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!isInternalRouteClick(anchor, event)) return;
      showLoaderRef.current();
    };

    const onPopState = () => showLoaderRef.current();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("load", finishInitial);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearTick();
      clearHideTimers();
    };
  }, []);

  useEffect(() => {
    if (pathnameRef.current === pathname) return;
    pathnameRef.current = pathname;
    hideLoaderRef.current();
  }, [pathname]);

  const className = [
    "loader",
    phase === "hidden" ? "loaded" : "",
    phase === "hiding" ? "is-hiding" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      id="loader"
      data-react-loader="true"
      className={className}
      aria-hidden={phase === "hidden"}
    >
      <div className="loader__wrapper">
        <div className="loader__content">
          <div className="loader__count">
            <span className="count__text">{count}</span>
            <span className="count__percent">%</span>
          </div>
        </div>
        <span className="count__bdr" style={{ width: `${count}%` }} />
      </div>
    </div>
  );
}

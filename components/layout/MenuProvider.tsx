"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type MenuContextValue = {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

export function useMobileMenu() {
  const value = useContext(MenuContext);
  if (!value) {
    throw new Error("useMobileMenu must be used inside MenuProvider");
  }
  return value;
}

export default function MenuProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("mobile-menu-open");
    window.__pixoraLenis?.start();
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
    document.body.classList.add("mobile-menu-open");
    window.__pixoraLenis?.stop();
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  const value = useMemo(
    () => ({ open, openMenu, closeMenu }),
    [open, openMenu, closeMenu],
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

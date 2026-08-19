"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/site";
import { useMobileMenu } from "@/components/layout/MenuProvider";

export default function Header() {
  const pathname = usePathname();
  const { open, openMenu } = useMobileMenu();

  return (
    <header>
      <div className="px-header-6-ptb px-header-style-black header-transparent">
        <div className="container container-1870">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="px-header-6-menu tp-header-dropdown dropdown-black-bg d-none d-xl-block">
                <nav>
                  <ul>
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={
                            pathname === item.href ? "active" : undefined
                          }
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="px-header-logo d-block d-xl-none">
                <Link href="/">
                  <img
                    style={{ width: 144 }}
                    src="/assets/img/logo/logo-orange.png"
                    alt={site.brand}
                  />
                </Link>
              </div>
            </div>
            <div className="col-2">
              <div className="px-header-logo text-center d-none d-xl-block">
                <Link href="/">
                  <img
                    style={{ width: 144 }}
                    src="/assets/img/logo/logo-orange.png"
                    alt={site.brand}
                  />
                </Link>
              </div>
            </div>
            <div className="col-5">
              <div className="px-header-6-action d-flex justify-content-end align-items-center">
                <div className="px-header-6-info d-none d-xl-block">
                  <a className="px-line-lr" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
                <div className="px-header-6-btn ml-25 d-none d-xl-block">
                  <Link className="px-btn-grey" href="/contact">
                    Contact me
                  </Link>
                </div>
                <div className="px-header-action d-xl-none">
                  <button
                    className="px-header-bar tp-offcanvas-open-btn"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={openMenu}
                  >
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

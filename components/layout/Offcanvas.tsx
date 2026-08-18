"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  BehanceIcon,
  CloseIcon,
  DribbbleIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/shared/Icons";
import { navItems, offcanvasImages, site } from "@/data/site";

function closeOffcanvas() {
  document.querySelector(".tp-offcanvas-area")?.classList.remove("opened");
  document.querySelector(".body-overlay")?.classList.remove("opened");
  window.__pixoraLenis?.start();
}

function isActivePath(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Offcanvas() {
  const pathname = usePathname();

  useEffect(() => {
    closeOffcanvas();
  }, [pathname]);

  return (
    <>
      <div className="tp-offcanvas-area" data-lenis-prevent>
        <div className="tp-offcanvas-wrapper offcanvas-black-bg">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="/" onClick={closeOffcanvas}>
                <img className="logo-1" data-width="120" src="/assets/img/logo/logo-orange.png" alt={site.brand} />
                <img className="logo-2" data-width="120" src="/assets/img/logo/logo-orange.png" alt={site.brand} />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button className="tp-offcanvas-close-btn" type="button" aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content d-none d-xl-block">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>
                {site.name}, {site.intro[1].replace("Nardi. a ", "")} from {site.location}.
              </p>
            </div>
            <div className="tp-offcanvas-menu d-xl-none">
              <nav>
                <ul>
                  {navItems.map((item) => (
                    <li className={isActivePath(item.href, pathname) ? "active" : undefined} key={item.href}>
                      <Link href={item.href} onClick={closeOffcanvas}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="tp-offcanvas-gallery d-none d-xl-block">
              <div className="row gx-2">
                {offcanvasImages.map((src) => (
                  <div className="col-md-3 col-3" key={src}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a className="popup-image" href={src}>
                        <img src={src} alt="" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>
              <ul>
                <li>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <Link href="/contact" onClick={closeOffcanvas}>
                    {site.address}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href={site.socials[1].href} aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href={site.socials[0].href} aria-label="Dribbble">
                    <DribbbleIcon />
                  </a>
                </li>
                <li>
                  <a href={site.socials[2].href} aria-label="Behance">
                    <BehanceIcon />
                  </a>
                </li>
                <li>
                  <a href={site.socials[3].href} aria-label="Youtube">
                    <YoutubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay" />
    </>
  );
}

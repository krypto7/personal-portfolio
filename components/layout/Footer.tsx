"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { ArrowIcon12, BackTopArrow } from "@/components/shared/Icons";
import SiteMarquee from "@/components/shared/SiteMarquee";
import { contactSubjects, navItems, site } from "@/data/site";

export default function Footer() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
  }

  return (
    <footer data-bg-color="#1C1D20">
      <div className="px-footer-3-area pt-90 pb-120">
        <div className="px-hero-6-slider px-footer-3-slider-style mb-100">
          <SiteMarquee className="px-footer-marquee" speed={70}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="px-hero-6-text px-marquee-item" key={index}>
                <span>
                  get in touch <i>_</i>
                </span>
              </div>
            ))}
          </SiteMarquee>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-xl-4 col-xl-8">
              <div className="px-footer-3-box">
                <div className="px-footer-3-info">
                  <div className="px-footer-3-tel">
                    <a href={site.phoneHref}>{site.phone}</a>
                  </div>
                  <div className="px-footer-3-mail">
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="px-footer-3-input-box">
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="px-footer-3-select mb-10">
                          <select className="px-select" name="subject" defaultValue={contactSubjects[0]}>
                            {contactSubjects.map((subject) => (
                              <option key={subject} value={subject}>
                                {subject}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="px-footer-3-input mb-15">
                          <input type="text" name="name" placeholder="Your name" />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="px-footer-3-input mb-15">
                          <input type="email" name="email" placeholder="Your email" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="px-footer-3-input mb-15">
                          <input type="text" name="message" placeholder="How may i help you?" />
                          <button className="px-footer-3-btn" type="submit" aria-label="Send message">
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 1H11V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="px-footer-3-social">
                  {site.socials.map((social) => (
                    <a href={social.href} key={social.label}>
                      {social.label}
                      <span>
                        <ArrowIcon12 />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-copyright-3-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="px-copyright-3-text text-center text-lg-start">
                <p>
                  © {new Date().getFullYear()} <Link href="/">{site.brand}.</Link> All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-8">
              <div className="px-copyright-3-menu text-center text-lg-start">
                <ul>
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="px-copyright-3-backtop smooth text-center text-lg-end">
                <a href="#top">
                  back to top
                  <span>
                    <BackTopArrow />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

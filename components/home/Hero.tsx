import Link from "next/link";
import { ArrowIcon, TalkArrowIcon, ZikzakBg } from "@/components/shared/Icons";
import { heroWords, site } from "@/data/site";

export default function Hero() {
  return (
    <div
      id="top"
      className="px-hero-6-area px-hero-6-bg pt-100"
      data-background="/assets/img/hero/hero-6/hero-bg-shape.png"
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-4 col-lg-5 order-1 order-lg-0">
            <div className="px-hero-6-left">
              <div className="px-hero-6-info">
                <p>
                  {site.intro[0]} <br />
                  {site.intro[1]} <br />
                  {site.intro[2]} <br />
                  {site.intro[3]}
                </p>
                <div className="px-hero-6-signature">
                  <img src="/assets/img/signature/signature.svg" alt={`${site.name} signature`} />
                </div>
              </div>
              <div className="px-hero-6-social z-index-1 mb-50">
                {site.socials.slice(0, 3).map((social) => (
                  <a className="px-doubble-effect" href={social.href} key={social.label}>
                    {social.label}
                    <i>
                      <ArrowIcon />
                      <ArrowIcon />
                    </i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-7 order-0 order-lg-1">
            <div className="px-hero-6-thumb">
              <img src="/assets/img/hero/hero-6/hero-1-dark.png" alt={site.name} />
            </div>
          </div>
          <div className="col-xl-3 order-lg-1">
            <div className="px-hero-6-category text-xl-end mb-50">
              <span>Web design</span>
              <br />
              <span>Art Direction</span>
              <span>HTML</span>
              <br />
              <span>Branding</span>
              <span>Motion Design</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-hero-6-slider p-relative">
        <div className="px-hero-6-btn-wrap">
          <Link className="px-hero-6-btn px-btn-zikzak text-center p-relative" href="/contact">
            <span className="btn-text">
              <i className="btn-icon">
                <TalkArrowIcon />
              </i>
              Let’s Talk
            </span>
            <i className="zikzak-bg">
              <ZikzakBg />
            </i>
          </Link>
        </div>
        <div className="swiper-container px-text-6-active">
          <div className="swiper-wrapper slide-transtion">
            {[...heroWords, ...heroWords].map((word, index) => (
              <div className="swiper-slide" key={`${word}-${index}`}>
                <div className="px-hero-6-text">
                  <span>
                    {word}
                    <i className={word === "Development" ? "icon-left" : undefined}>_</i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

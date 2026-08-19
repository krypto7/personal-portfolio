import Link from "next/link";
import { ArrowIcon } from "@/components/shared/Icons";
import SiteMarquee from "@/components/shared/SiteMarquee";
import { serviceWords, site } from "@/data/site";

export default function About() {
  const highlighted = site.about.replace(
    "design, motion and web development",
    "<span>design,</span> <span>motion</span> and <span>web development,</span>",
  );

  return (
    <div className="px-about-6-area pt-110 pb-110" style={{ backgroundColor: "#1C1D20" }}>
      <div className="container">
        <div className="px-about-6-top mb-100">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="px-about-6-title-box">
                <span className="px-section-subtitle mb-35">About me</span>
                <h4 className="px-section-title ff-thunder fs-130">What i do</h4>
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-6">
              <div className="px-service-6-wrap pt-15">
                <div className="px-service-6-slide-wrap fix">
                  <SiteMarquee className="px-service-marquee" direction="up" speed={35}>
                    {serviceWords.map((word) => (
                      <div className="px-service-6-text px-marquee-item" key={word}>
                        <span>{word}</span>
                      </div>
                    ))}
                  </SiteMarquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="px-about-6-thumb pt-25">
              <img src="/assets/img/about/about-6-1.jpg" alt={`${site.name} portrait`} />
            </div>
          </div>
          <div className="offset-xl-1 col-xl-6 col-lg-7">
            <div className="px-about-6-content">
              <p dangerouslySetInnerHTML={{ __html: highlighted }} />
              <Link className="px-about-4-link text-white px-doubble-effect" href="/about">
                <span>More about me</span>
                <i>
                  <ArrowIcon />
                  <ArrowIcon />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

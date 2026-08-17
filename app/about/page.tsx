import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/shared/Icons";
import PageHero from "@/components/shared/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.about,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About me" subtitle="Who I am" />
      <div className="px-about-6-area pb-140" data-bg-color="#1C1D20">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="px-about-6-thumb pt-25">
                <img src="/assets/img/about/about-6-1.jpg" alt={site.name} />
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-7">
              <div className="px-about-6-content">
                <p>
                  {site.intro.join(" ")}
                </p>
                <p>{site.about}.</p>
                <p>
                  I work across {site.skills.join(", ").toLowerCase()} to build
                  brands and digital products with a clear visual voice.
                </p>
                <Link className="px-about-4-link text-white px-doubble-effect" href="/contact">
                  <span>Let’s work together</span>
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
    </main>
  );
}

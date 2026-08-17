import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: "Selected design and development work.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div id="top" className="pf-5-hero-ptb pt-200 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pf-5-hero-wrap">
                <span className="pf-5-hero-subtitle">Recent work</span>
                <h1 className="pf-5-hero-title">
                  A selection of our work. <br />
                  Branding, Product and Website.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectGrid />
    </main>
  );
}

import Link from "next/link";
import { NextWorkIcon, PrevWorkIcon } from "@/components/shared/Icons";
import ProjectDetailsSlider from "@/components/projects/ProjectDetailsSlider";
import type { Project } from "@/data/site";

export default function ProjectDetails({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  return (
    <>
      <div className="px-pd-2-ptb px-pd-style pt-200 pb-80" id="top">
        <div className="container container-1230">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="px-pd-2-top pb-70 text-center">
                <div className="px-pd-2-categories mb-30 px-fade-anim" data-delay=".3">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h1 className="px-pd-2-title px-fade-anim" data-delay=".5">
                  {project.title}
                </h1>
              </div>
              <div className="px-pd-2-bottom d-flex justify-content-between px-fade-anim" data-delay=".7">
                <div className="px-pd-2-bottom-item text-center">
                  <span>Client</span>
                  <h6>{project.client}</h6>
                </div>
                <div className="px-pd-2-bottom-item text-center">
                  <span>Role</span>
                  <h6>{project.role}</h6>
                </div>
                <div className="px-pd-2-bottom-item text-center">
                  <span>Duration</span>
                  <h6>{project.duration}</h6>
                </div>
                <div className="px-pd-2-bottom-item text-center">
                  <span>Designer</span>
                  <h6>{project.designer}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-pd-2-area pb-140">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="px-pd-2-banner">
                <img data-speed=".8" src={project.banner} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-pd-2-overview-ptb px-pd-style pb-70">
        <div className="container container-1230">
          <div className="row">
            <div className="col-lg-6">
              <div className="px-pd-2-overview-heading px-fade-anim" data-delay=".3">
                <h3 className="px-pd-2-overview-title">Brand overview</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="px-pd-2-overview-wrap">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <ul>
                  {project.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectDetailsSlider images={project.sliderImages} title={project.title} />

      <div className="px-pd-2-step-ptb px-pd-style pb-70">
        <div className="container container-1230">
          <div className="row">
            <div className="col-lg-12">
              <div className="px-pd-2-step-heading pb-60 px-fade-anim" data-delay=".3">
                <h3 className="px-pd-2-step-title">
                  Out of love for stylish &amp; functional <br />
                  WP themes and for taking pride to <br />
                  support you.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {project.process.map((step) => (
              <div className="col-lg-4 col-md-6" key={step.title}>
                <div className="px-pd-2-step-item mb-30">
                  <h4 className="px-pd-2-step-item-title">{step.title}</h4>
                  <span>
                    A wonderful serenity has taken possession <br />
                    of my entire soul, like these sweet mornings <br />
                    which I enjoy with my whole heart.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-pd-2-thumb-ptb pb-100">
        <div className="container container-1230">
          <div className="row gx-20">
            <div className="col-lg-12">
              <div className="px-pd-2-thumb-item mb-20">
                <img data-speed=".8" src={project.gallery[0]} alt={project.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="px-pd-2-thumb-item mb-20">
                <img data-speed=".8" src={project.gallery[1]} alt={project.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="px-pd-2-thumb-item mb-20">
                <img data-speed=".8" src={project.gallery[2]} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-pd-2-np-ptb px-pd-style pb-120">
        <div className="container container-1230">
          <div className="row">
            <div className="col-lg-12">
              <div className="px-pd-2-np-content d-flex justify-content-center align-items-center flex-wrap">
                <div className="px-fade-anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                  <Link href={`/projects/${prev.slug}`}>
                    <span>
                      <PrevWorkIcon />
                    </span>{" "}
                    Prev Work
                  </Link>
                </div>
                <div className="px-fade-anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                  <Link href={`/projects/${next.slug}`}>
                    Next Work{" "}
                    <span>
                      <NextWorkIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

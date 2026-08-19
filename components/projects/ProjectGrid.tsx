"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projectFilters, projects } from "@/data/site";
import { initFadeAnimations } from "@/lib/template/initHome";
import { initProjectRipples, whenTemplateReady } from "@/lib/template/initInner";
import { refreshLenis } from "@/lib/template/lenis";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]["value"]>("*");

  useEffect(() => {
    let destroyRipples = () => undefined as void;
    let timeout = 0;

    const stop = whenTemplateReady(() => {
      timeout = window.setTimeout(() => {
        destroyRipples = initProjectRipples();
        initFadeAnimations();
        refreshLenis();
      }, 50);
    });

    return () => {
      stop();
      window.clearTimeout(timeout);
      destroyRipples();
    };
  }, []);

  return (
    <div className="px-project-inner-5-ptb px-orange-style pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="px-project-inner-5-top d-flex justify-content-between align-items-center">
              <div className="px-project-inner-5-tab">
                <div className="masonary-menu filter-button-group">
                  {projectFilters.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      className={filter === item.value ? "active" : undefined}
                      data-filter={item.value === "*" ? "*" : `.${item.value}`}
                      onClick={() => setFilter(item.value)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="px-project-inner-5-count">
                <span>●ST/{String(projects.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-20 grid" data-react-grid>
          {projects.map((project) => {
            const isVisible = filter === "*" || project.filters.includes(filter);

            return (
              <div
                className={`col-lg-6 grid-item ${project.filters.join(" ")}${isVisible ? "" : " d-none"}`}
                key={project.slug}
              >
                <div className="px-project-item mb-20">
                  <div className="px-project-content d-flex align-items-center justify-content-between">
                    <h4 className="px-project-title">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h4>
                    <span>/ {project.year}</span>
                  </div>
                  <div className="px-project-thumb">
                    <Link href={`/projects/${project.slug}`}>
                      <div className="ripple-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

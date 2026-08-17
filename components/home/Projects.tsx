"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/site";
import { initProjectHover } from "@/lib/template/initHome";
import { whenTemplateReady } from "@/lib/template/initInner";

export default function Projects() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup = () => undefined as void;

    const stop = whenTemplateReady(() => {
      cleanup = initProjectHover(wrapRef.current);
    });

    return () => {
      stop();
      cleanup();
    };
  }, []);

  return (
    <div className="px-project-6-area pt-120">
      <div className="px-project-6-wrap projects p-relative" data-project-hover ref={wrapRef}>
        <div className="px-project-6-inner">
          {projects.map((project, index) => (
            <div
              className="px-project-6-item is-active"
              data-index-number={String(index)}
              key={project.slug}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-xl-9">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="px-project-6-content d-flex">
                            <span>({project.number})</span>
                            <h4 className="px-project-6-title">{project.title}</h4>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="px-project-6-content text-lg-end">
                            <p>{project.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="px-project-6-img-wrap">
          <div className="px-project-6-img-slider">
            {projects.map((project) => (
              <img src={project.image} alt={project.title} key={project.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

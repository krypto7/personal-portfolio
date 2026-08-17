"use client";

import { useEffect } from "react";
import { initProjectDetailsSlider, whenTemplateReady } from "@/lib/template/initInner";

export default function ProjectDetailsSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  useEffect(() => {
    let destroy = () => undefined as void;
    let timeout = 0;

    const stop = whenTemplateReady(() => {
      timeout = window.setTimeout(() => {
        destroy = initProjectDetailsSlider();
      }, 50);
    });

    return () => {
      stop();
      window.clearTimeout(timeout);
      destroy();
    };
  }, [images]);

  return (
    <div className="px-pd-2-slider-ptb pb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="px-pd-2-slider-wrapper">
              <div className="px-pd-2-active swiper">
                <div className="swiper-wrapper">
                  {images.map((src) => (
                    <div className="swiper-slide" key={src}>
                      <div className="px-pd-2-slider-thumb">
                        <img src={src} alt={title} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-pd-2-dot text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

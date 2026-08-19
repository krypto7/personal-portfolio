"use client";

import { useEffect, useRef } from "react";
import { initFadeAnimations } from "@/lib/template/initHome";
import { refreshLenis } from "@/lib/template/lenis";
import Swiper from "swiper";
import { FreeMode, Pagination } from "swiper/modules";

export default function ProjectDetailsSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const pagination = paginationRef.current;
    if (!root || !pagination || images.length === 0) return;

    const instance = new Swiper(root, {
      modules: [FreeMode, Pagination],
      slidesPerView: 1.15,
      spaceBetween: 14,
      speed: 550,
      rewind: true,
      grabCursor: true,
      watchOverflow: true,
      resistanceRatio: 0.55,
      touchStartPreventDefault: false,
      touchReleaseOnEdges: true,
      followFinger: true,
      freeMode: {
        enabled: true,
        momentum: true,
        momentumRatio: 0.85,
        momentumVelocityRatio: 0.9,
        momentumBounce: false,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1.35,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1200: {
          slidesPerView: 2.35,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 20,
          freeMode: {
            enabled: true,
            momentum: true,
            sticky: false,
          },
        },
      },
    });

    initFadeAnimations();
    refreshLenis();

    return () => {
      instance.destroy(true, true);
    };
  }, [images]);

  return (
    <div className="px-pd-2-slider-ptb pb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="px-pd-2-slider-wrapper" data-lenis-prevent>
              <div className="px-pd-2-active swiper" ref={rootRef}>
                <div className="swiper-wrapper">
                  {images.map((src) => (
                    <div className="swiper-slide" key={src}>
                      <div className="px-pd-2-slider-thumb">
                        <img src={src} alt={title} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-pd-2-dot text-center" ref={paginationRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

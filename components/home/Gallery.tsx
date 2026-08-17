import { gallery } from "@/data/site";

function GalleryItem({
  item,
}: {
  item: { type: "image" | "video"; src: string };
}) {
  return (
    <div className="swiper-slide">
      <div className="px-gallery-item">
        {item.type === "video" ? (
          <video loop muted autoPlay playsInline>
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img src={item.src} alt="" />
        )}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="px-gallery-area pt-140 pb-140">
      <div className="px-gallery-slider-one mb-20">
        <div className="swiper-container px-gallery-active">
          <div className="swiper-wrapper slide-transtion">
            {gallery.rowOne.map((item) => (
              <GalleryItem item={item} key={`one-${item.src}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-gallery-slider-two">
        <div className="swiper-container px-gallery-active" dir="rtl">
          <div className="swiper-wrapper slide-transtion">
            {gallery.rowTwo.map((item) => (
              <GalleryItem item={item} key={`two-${item.src}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { gallery } from "@/data/site";
import SiteMarquee from "@/components/shared/SiteMarquee";

function GalleryItem({
  item,
}: {
  item: { type: "image" | "video"; src: string };
}) {
  return (
    <div className="px-gallery-item px-marquee-item">
      {item.type === "video" ? (
        <video loop muted autoPlay playsInline>
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img src={item.src} alt="" />
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="px-gallery-area pt-140 pb-140">
      <div className="px-gallery-slider-one mb-20">
        <SiteMarquee className="px-gallery-marquee" speed={45}>
          {gallery.rowOne.map((item) => (
            <GalleryItem item={item} key={`one-${item.src}`} />
          ))}
        </SiteMarquee>
      </div>
      <div className="px-gallery-slider-two">
        <SiteMarquee className="px-gallery-marquee" direction="right" speed={45}>
          {gallery.rowTwo.map((item) => (
            <GalleryItem item={item} key={`two-${item.src}`} />
          ))}
        </SiteMarquee>
      </div>
    </div>
  );
}

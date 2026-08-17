import { BackToTopIcon } from "@/components/shared/Icons";

export default function BackToTop() {
  return (
    <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" className="back-to-top-btn">
        <BackToTopIcon />
      </button>
    </div>
  );
}

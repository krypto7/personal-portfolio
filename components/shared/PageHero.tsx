import Link from "next/link";

export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="px-about-6-area pt-180 pb-90" data-bg-color="#111111" id="top">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <span className="px-section-subtitle mb-25 d-inline-block">{subtitle}</span>
            <h1 className="px-section-title ff-thunder fs-130 mb-0">{title}</h1>
          </div>
          <div className="col-xl-4 d-flex align-items-end justify-content-xl-end mt-30 mt-xl-0">
            <Link className="px-about-4-link text-white" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

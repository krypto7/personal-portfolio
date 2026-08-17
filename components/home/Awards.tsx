import { awards } from "@/data/site";

export default function Awards() {
  return (
    <div className="px-award-area pb-120">
      <div className="container">
        <div className="px-award-title-wrap mb-45">
          <div className="row">
            <div className="col-xl-9">
              <div className="px-award-content">
                <h3 className="px-section-title ff-thunder fs-130 mb-25">
                  Awards & <br /> recognitions.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="px-award-wrapper">
          {awards.map((award) => (
            <div className="px-award-item px-fade-anim" data-delay={award.delay} key={award.number}>
              <div className="row">
                <div className="col-xl-3 col-lg-2 col-md-1">
                  <div className="px-award-num">
                    <span>({award.number})</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5">
                  <div className="px-award-category">
                    <img src={award.logo} alt="" />
                    <span>{award.category}</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5">
                  <div className="px-award-nomination">
                    <span>{award.nomination}</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-1">
                  <div className="px-award-year text-md-end">
                    <span>{award.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

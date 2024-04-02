import Image from "next/image";

const About = () => {
  return (
    <section className="pt-20 blue-light about-content">
      <div className="container">
        <div
          data-wow-duration=".9s"
          data-wow-delay=".5s"
          className="wow tpfadeUp row"
          style={{
            visibility: "visible",
            animationDuration: "0.9s",
            animationDelay: "0.5s",
          }}
        >
          <div
            className="text-center pb-20 wow tpfadeUp col-md-12"
            style={{ visibility: "visible" }}
          >
            <h6>Medien, die über uns berichtet haben:</h6>
          </div>
          <div className="align-items-center d-flex col-6 col-lg-3">
            <Image
              src="/img/brands/brand-1.svg"
              height={0}
              width={0}
              style={{ width: "163px", height: "auto" }}
              alt="icon"
              className=""
            />
          </div>
          <div className="align-items-center d-flex col-6 col-lg-3">
            <Image
              src="/img/brands/brand-2.svg"
              height={0}
              width={0}
              style={{ width: "163px", height: "auto" }}
              alt="icon"
              className=""
            />
          </div>
          <div className="align-items-center d-flex col-6 col-lg-3">
            <Image
              src="/img/brands/brand-3.svg"
              height={0}
              width={0}
              style={{ width: "163px", height: "auto" }}
              alt="icon"
              className=""
            />
          </div>
          <div className="align-items-center d-flex col-6 col-lg-3">
            <Image
              src="/img/brands/brand-4.svg"
              height={0}
              width={0}
              style={{ width: "163px", height: "auto" }}
              alt="icon"
              className=""
            />
          </div>
        </div>
        <div
          data-wow-duration=".9s"
          data-wow-delay=".5s"
          className="space wow tpfadeUp justify-content-between row"
          style={{
            visibility: "visible",
            animationDuration: "0.9s",
            animationDelay: "0.5s",
          }}
        >
          <div className="col-md-5">
            <div className="about-img">
              <div className="about-content">
                <h6>DURCHSTARTEN</h6>
                <h1>95% unserer Bewerber:innen studieren heute Medizin.</h1>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-features">
              <div className="aboutItems">
                <div className="d-flex align-items-top">
                  <div className="me-2">
                    <Image
                      src="/img/icons/icon-1.png"
                      width={60}
                      height={60}
                      alt="icon"
                      className=""
                    />
                  </div>
                  <div className="aboutItems-content">
                    <strong>
                      Wir finden den perfekten Studienort für dich!
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                      lacus eleifend quis mi facilisis. Id proin a sed duis vel.
                      Nibh
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="aboutItems">
                <div className="d-flex align-items-top">
                  <div className="me-2">
                    <Image
                      src="/img/icons/icon-2.png"
                      width={60}
                      height={60}
                      alt="icon"
                      className=""
                    />
                  </div>
                  <div className="aboutItems-content">
                    <strong>Wir bereiten dich vor</strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                      lacus eleifend quis mi facilisis. Id proin a sed duis vel.
                      Nibh
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="aboutItems">
                <div className="d-flex align-items-top">
                  <div className="me-2">
                    <Image
                      src="/img/icons/icon-3.png"
                      width={60}
                      height={60}
                      alt="icon"
                      className=""
                    />
                  </div>
                  <div className="aboutItems-content">
                    <strong>Wir unterstützen dich auf deinem Weg</strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                      lacus eleifend quis mi facilisis. Id proin a sed duis vel.
                      Nibh
                    </p>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-outline-secondary">
                Warum futuredoctor?
                <Image
                  src="/img/icons/arrow.svg"
                  height={0}
                  width={0}
                  style={{ width: "31px", height: "auto" }}
                  alt="icon"
                  className=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

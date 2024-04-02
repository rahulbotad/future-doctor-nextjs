const Promo = () => {
  return (
    <section className="space white-bg">
      <div className="container">
        <div className="align-items-center head-space row">
          <div
            data-wow-duration=".9s"
            data-wow-delay=".5s"
            className="wow tpfadeUp col-md-9"
            style={{
              visibility: "visible",
              animationDuration: "0.9s",
              animationDelay: "0.5s",
            }}
          >
            <div className="head-title">
              <span>MEDIZINSTUDIUM IM AUSLAND</span>
              <h2>Starte jetzt mit deinem Medizinstudium!</h2>
              <button type="button" className="btn btn-link">
                So funktioniert’s<i className="fal fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            data-wow-duration=".9s"
            data-wow-delay=".5s"
            className="wow tpfadeUp my-2 col-md-5"
            style={{
              visibility: "visible",
              animationDuration: "0.9s",
              animationDelay: "0.5s",
            }}
          >
            <div
              className="promo-img first-child"
              style={{
                backgroundImage: "url(/img/promo-1.svg)",
              }}
            >
              <div className="promo-content">
                <h1>Sorgenlos im Ausland studieren.</h1>
                <button type="button" className="btn btn-link">
                  Dein Weg zum Studium
                  <i className="fal fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div
                data-wow-duration=".9s"
                data-wow-delay=".5s"
                className="my-2 wow tpfadeUp col-md-12"
                style={{
                  visibility: "visible",
                  animationDuration: "0.9s",
                  animationDelay: "0.5s",
                }}
              >
                <div
                  className="promo-img after-image"
                  style={{
                    backgroundImage: "url(/img/promo-2.svg)",
                  }}
                >
                  <div className="promo-content">
                    <span>Neu</span>
                    <h1>
                      Mit dem Bewerbungsportal am schnellsten zum Studienplatz
                    </h1>
                    <button type="button" className="btn btn-link">
                      Dein Weg zum Studium
                      <i className="fal fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-wow-duration=".9s"
                data-wow-delay=".5s"
                className="wow tpfadeUp my-2 col-md-12"
                style={{
                  visibility: "visible",
                  animationDuration: "0.9s",
                  animationDelay: "0.5s",
                }}
              >
                <div
                  className="promo-img after-image-3"
                  style={{
                    backgroundImage: "url(/img/promo-3.svg)",
                  }}
                >
                  <div className="promo-content">
                    <span>Background</span>
                    <h1>
                      Über 700 Personen konnten seit 2019 durch uns Medizin
                      studieren.
                    </h1>
                    <button type="button" className="btn btn-link">
                      Mehr über uns erfahren
                      <i className="fal fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;

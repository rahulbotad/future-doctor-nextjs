import type { Metadata } from "next";
import Image from "next/image";
import About from "@/components/About";
import Slider from "@/components/Slider";
import Promo from "@/components/Promo";

export const metadata: Metadata = {
  title: "Futuredoctor - Study medicine abroad - React Next js Template",
  description:
    "Study medicine abroad at internationally recognised universities throughout Europe: human medicine and dentistry in English.",
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "futuredoctor - Study medicine abroad",
    description:
      "Study medicine abroad at internationally recognised universities throughout Europe: human medicine and dentistry in English.",
    url: "https://www.future-doctor.de/en/",
    siteName: "futuredoctor - Simply study medicine",
    images:
      "https://www.future-doctor.de/wp-content/uploads/2022/10/facebook-share.jpg",
  },
};

export default function Home() {
  return (
    <>
      <div id="smooth-content">
        <main className="fix">
          <div className="tp-hero-area tp-hero-five__ptb-5 p-relative fix">
            <div className="container">
              <div className="align-items-center row">
                <div className="col-md-11">
                  {" "}
                  <div className="tp-hero-five-section-wrap">
                    <div className="tp-hero-five-section-box z-index">
                      <h1 className="tp-hero-title-5 hero-text-anim-2">
                        <i>
                          <i
                            className="child-2"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              opacity: 1,
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            Dein Traum vom
                          </i>
                        </i>{" "}
                        <br />
                        <i>
                          <i
                            className="child-2"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              opacity: 1,
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            <span className="child-1 p-relative chonky">
                              Medirinstudium
                            </span>{" "}
                            ist zum greifen nahe!
                            <br />
                          </i>
                        </i>
                      </h1>
                      <p
                        className="wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                      >
                        Schon über 700 Studierende haben mit unserer
                        Unterstützung ihren Medizinstudienplatz
                        <br /> gesichert – ergreife jetzt die Chance, deinen
                        Traum Wirklichkeit werden zu lassen.
                      </p>
                    </div>
                    <div className="d-flex count col-md-8">
                      <div className="w-100">
                        <div className=" d-flex align-items-center flex-column">
                          <Image
                            alt="theme-pure"
                            loading="lazy"
                            width={77}
                            height={31}
                            decoding="async"
                            style={{ color: "transparent" }}
                            src="/img/HeadsIcon.svg"
                          />
                          <h4>
                            <span
                              data-purecounter-duration="1"
                              data-purecounter-end="300"
                              className="purecounter"
                            >
                              <div className="d-flex align-items-center justify-content-center ">
                                <span>700</span>
                                <span>
                                  <span>+ </span>
                                </span>
                              </div>
                            </span>
                          </h4>
                          <p>
                            Erfolgreiche <br />
                            Vermittlungen
                          </p>
                        </div>
                      </div>
                      <div className="w-100">
                        <div className=" d-flex align-items-center flex-column">
                          <Image
                            alt="theme-pure"
                            loading="lazy"
                            width={27}
                            height={29}
                            decoding="async"
                            style={{ color: "transparent" }}
                            src="/img/HeadsIcon2.svg"
                          />
                          <h4>
                            <span
                              data-purecounter-duration="1"
                              data-purecounter-end="300"
                              className="purecounter"
                            >
                              <div className="d-flex align-items-center justify-content-center ">
                                <span>8</span>
                                <span></span>
                              </div>
                            </span>
                          </h4>
                          <p>
                            Verschiedene <br /> Länder
                          </p>
                        </div>
                      </div>
                      <div className="w-100">
                        <div className=" d-flex align-items-center flex-column">
                          <Image
                            alt="theme-pure"
                            loading="lazy"
                            width={29}
                            height={29}
                            decoding="async"
                            style={{ color: "transparent" }}
                            src="/img/HeadsIcon3.svg"
                          />
                          <h4>
                            <span
                              data-purecounter-duration="1"
                              data-purecounter-end="300"
                              className="purecounter"
                            >
                              <div className="d-flex align-items-center justify-content-center ">
                                <span>14</span>
                                <span></span>
                              </div>
                            </span>
                          </h4>
                          <p>
                            Top-Universitäten <br /> zur Auswahl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <a className="btn btn-primary" href="/">
                        Infos dazu erhalten
                      </a>
                      <Image
                        alt="tustpilot"
                        loading="lazy"
                        width={168}
                        height={18}
                        decoding="async"
                        className="ms-3"
                        style={{ color: "transparent" }}
                        src="/img/tustpilot.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-hero-five-2-thumb-main p-relative">
              <Image
                alt="theme-pure"
                loading="lazy"
                width={0}
                height={0}
                decoding="async"
                className="tp-hero-five-2-thumb-inner"
                style={{ color: "transparent", width: "40vw", height: "auto" }}
                src="/img/hero-shape-5-1-1.svg"
              />
            </div>
          </div>
          <About />
          <Slider />
          <Promo />
        </main>
      </div>
    </>
  );
}

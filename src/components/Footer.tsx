"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="tp-footer__pl-pr footer-bg pt-50 undefined ">
      <div className="tp-footer__area undefined tp-footer__tp-border-bottom">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-md-6 pb-30  wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.3s",
              }}
            >
              <div className="tp-footer__widget undefined footer-widget-3 footer-col-3-1">
                <h4 className="tp-footer__widget-title">Kontakt</h4>
                <div className="tp-footer__logo mb-25">
                  <a href="/">
                    <Image
                      alt=""
                      loading="lazy"
                      width="193"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src={"/img/logo-black.svg"}
                    />
                  </a>
                </div>
                <div className="tp-footer__contact-info">
                  <p>
                    tubenbastei 12, 1010 Vienna, Austria Elisabethstraße 2,
                    80796 Munich, Germany
                  </p>
                  <ul>
                    <li>
                      <a className="first-child" href="tel:+49 89 6282 5737">
                        +49 89 6282 5737
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="tel:+49 89 6282 5737">
                        +49 89 6282 5737
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@future-doctor.de">
                        info@future-doctor.de
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tp-footer__social-3">
                  <a href="/#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <Image
                  alt=""
                  loading="lazy"
                  width="1572"
                  height="612"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent", width: "50%" }}
                  src="/img/strom-01-3.svg"
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 pb-30  wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.9s",
              }}
            >
              <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                <h4 className="tp-footer__widget-title">Interessante Links</h4>
                <div className="tp-footer__contact-info">
                  {" "}
                  <Image
                    alt=""
                    loading="lazy"
                    width="300"
                    height="268"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="/img/drone-mail-300x268.png"
                  />
                  <p>
                    Take the first step and order your free information package
                    about studying medicine abroad today.
                  </p>
                  <button type="button" className="btn btn-primary">
                    Request information material
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 pb-30  wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.9s",
              }}
            >
              <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                <h4 className="tp-footer__widget-title">Infopaket bestellen</h4>
                <div className="tp-footer__link">
                  <ul>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> Contact
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> About us
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> Offer
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> Universities
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> Cost overview
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> Student advisory
                        service
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> Blog
                      </a>
                    </li>
                    <li>
                      <a className="first-child" href="/">
                        <i className="fal fa-arrow-right"></i> Video library
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="text-center">
                  <p className="copyright">
                    <span>Copyright © 2024 futuredoctor GmbH. </span>
                  </p>
                  <p id="block-18" className="widget widget_block copyright">
                    <span>
                      futuredoctor - Simply study medicine. All rights reserved.
                      <a href="/">Imprint</a> and
                      <a href="/">Data protectionLink</a>
                      <br />
                      <a className="borlabs-cookie-preference" href="/#">
                        Change privacy settings
                      </a>
                      <a target="_blank" rel="nofollow" href="/">
                        AGB
                      </a>
                      <span></span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

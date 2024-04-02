"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenChild, setOpenChild] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          className={`header-bottom__area header-bottom__plr-5 header-bottom__transparent z-index-3 white-bg ${
            isVisible && "header-sticky"
          }`}
        >
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <Link href="/">
                    <Image
                      src={"/img/logo-black.svg"}
                      width={193}
                      height={25}
                      decoding="async"
                      loading="lazy"
                      alt="theme-pure"
                      style={{ color: "transparent" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-10 col-xl-10 col-lg-10 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-5 text-end d-flex justify-content-end align-items-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/#">Über uns</Link>
                      </li>
                      <li>
                        <Link href="/#">Angebot</Link>
                      </li>
                      <li>
                        <Link href="/#">
                          Infos <i className="fal fa-angle-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/">Menu</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/#">
                          Universitäten <i className="fal fa-angle-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/">Menu</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <Link
                    className="btn btn-primary d-none d-lg-block me-2 ms-4"
                    href="/"
                  >
                    <span className="white-text">Jetzt bewerben</span>
                  </Link>
                  <Link
                    className="btn btn-outline-primary d-none d-lg-block"
                    href="/"
                  >
                    <span className="white-text">Kontakt</span>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-8 col-6">
                <div className="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
                  <div className="header-bottom__btn d-flex align-items-center">
                    <Link
                      href={"#"}
                      onClick={() => setOpen(true)}
                      className="header-bottom__bar tp-menu-bar d-lg-none"
                    >
                      <i className="fal fa-bars"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="tpoffcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? "opened" : false}`}>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo text-center">
            <Link href="/">
              <Image
                alt="theme-pure"
                loading="lazy"
                width="193"
                height="25"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={"/img/logo-black.svg"}
              />
            </Link>
          </div>
          <div className="mobile-menu mean-container">
            <nav className="mean-nav">
              <ul>
                <li>
                  <Link href="/">Über uns</Link>
                </li>
                <li>
                  <Link href="/">Angebot</Link>
                </li>
                <li className="has-dropdown">
                  <Link href="/">Infos</Link>
                  <ul
                    className="submenu"
                    style={{ display: isOpenChild === 0 ? "block" : "none" }}
                  >
                    <li>
                      <Link href="/">Menu</Link>
                    </li>
                  </ul>
                  <Link
                    href={"#"}
                    className={`mean-expand ${
                      isOpenChild === 0 && "mean-clicked"
                    }`}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                    onClick={() => setOpenChild(0)}
                  >
                    <i className="fal fa-plus"></i>
                  </Link>
                </li>
                <li className="has-dropdown">
                  <Link href="/">Universitäten</Link>
                  <ul
                    className="submenu"
                    style={{ display: isOpenChild === 1 ? "block" : "none" }}
                  >
                    <li>
                      <Link href="/">Menu</Link>
                    </li>
                  </ul>
                  <Link
                    href={"/"}
                    className={`mean-expand ${
                      isOpenChild === 1 && "mean-clicked"
                    }`}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                    onClick={() => setOpenChild(1)}
                  >
                    <i className="fal fa-plus"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tpoffcanvas__instagram text-center"></div>
          <div className="tpoffcanvas__social">
            <Link className="btn btn-primary w-100 mb-15" href="/">
              <span className="white-text">Jetzt bewerben</span>
            </Link>
            <Link className="btn btn-outline-primary  w-100" href="/">
              <span className="white-text">Kontakt</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${isOpen ? "apply" : false}`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
};
export default Navbar;

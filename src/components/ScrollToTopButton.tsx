"use client";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`scroll-top scroll-to-target ${isVisible && "open"}`}
      data-target="html"
      onClick={scrollToTop}
    >
      <i className="far fa-angle-double-up"></i>
    </button>
  );
};

export default ScrollToTopButton;

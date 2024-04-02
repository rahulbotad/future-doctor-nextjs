"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import galleryData from "./gallery_data.json";

const Slider = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="space gray-bg">
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
              <span>UNIS &amp; LÄNDER</span>
              <h2 className="img-icon">
                An welchem Ort würdest du am liebsten studieren?
                <Image
                  alt="icon"
                  loading="lazy"
                  width="65"
                  height="65"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/img/icon-4.png"
                />
              </h2>
              <button type="button" className="btn btn-link">
                Zu den Universitäten <i className="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div
            data-wow-duration=".9s"
            data-wow-delay=".5s"
            className="wow tpfadeUp col-md-3"
            style={{
              visibility: "visible",
              animationDuration: "0.9s",
              animationDelay: "0.5s",
            }}
          >
            <div className="d-flex align-items-center justify-content-start justify-content-md-end">
              <div className="test-next">
                <button
                  className="arrow-btn"
                  onClick={() => swiperRef.current?.swiper.slidePrev()}
                >
                  <i className="far fa-arrow-left"></i>
                </button>
              </div>
              <div className="test-prev">
                <button
                  className="arrow-btn"
                  onClick={() => swiperRef.current?.swiper.slideNext()}
                >
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="tp-testimonial-five-slider-section">
              <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  767: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {galleryData.map((gallery) => {
                  return (
                    <SwiperSlide key={gallery.id}>
                      <div className="gallery">
                        <div className="gallery-img">
                          <Image
                            alt="theme-pure"
                            loading="lazy"
                            {...gallery.img}
                          />
                        </div>
                        <div className="gallery-content">
                          <h4>{gallery.name}</h4>
                          <span>{gallery.title}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

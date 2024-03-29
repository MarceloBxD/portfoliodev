import React from "react";
import styles from "./styles.module.scss";
import { PORTFOLIO_SWIPER_DATA } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";

// TODO: ADD SWIPER COMPONENT
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {PORTFOLIO_SWIPER_DATA.map((data, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideTexts} key={index}>
              <h3>{data.upperText}</h3>
              <h1>{data.mainText}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

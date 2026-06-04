"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SwiperWrapperProps {
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  speed?: number;
  loop?: boolean;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  freeMode?: boolean;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  breakpoints?: Record<number | string, any>;
  navigation?: boolean;
  pagination?: boolean;
  allowTouchMove?: boolean;
  children: React.ReactNode;
}

export const SwiperWrapper: React.FC<SwiperWrapperProps> = ({
  children,
  className = "",
  autoplay = true,
  autoplayDelay = 3000,
  speed = 300,
  loop = true,
  slidesPerView = 1,
  spaceBetween = 0,
  freeMode = false,
  breakpoints,
  navigation = false,
  pagination = false,
  allowTouchMove = true,
}) => (
  <Swiper
    modules={[Navigation, Autoplay, Pagination]}
    autoplay={
      autoplay
        ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }
        : false
    }
    speed={speed}
    loop={loop}
    slidesPerView={slidesPerView}
    spaceBetween={spaceBetween}
    freeMode={freeMode}
    breakpoints={breakpoints}
    navigation={navigation}
    pagination={pagination ? { clickable: true } : false}
    allowTouchMove={allowTouchMove}
    className={className}
    watchSlidesProgress={true}
    loopPreventsSliding={false}
  >
    {React.Children.map(children, (child) => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperWrapper;

import React, { useRef, useState, useEffect } from "react";
import ReviewsSliderItem from "./ReviewsSliderItem/ReviewsSliderItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../index.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const ReviewsSliderList = ({ reviews }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (document.documentElement.clientWidth < 750) {
      setIsMobile(true);
    }
    window.addEventListener("resize", (e) => {
      if (document.documentElement.clientWidth < 750) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <Swiper
      slidesPerView={isMobile ? 1 : 2}
      spaceBetween={30}
      slidesPerGroup={2}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewsSliderItem review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSliderList;

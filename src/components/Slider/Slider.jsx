import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import styles from "./Slider.module.css";

const Slider = () => {
  const [slides, setSlides] = useState([]);

  const API_KEY = "53251288-0c39733b1864ffef8bb63504c";
  const searchQuery = "nature";
  const page = 1;

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => setSlides(data.hits));
  }, []);

  if (slides.length === 0) return null;

  return (
    <div className={styles.sliderWrapper}>
 
      <h2 className={styles.mainTitle}>Beautiful nature</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={"coverflow"} 
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"} 
        loop={slides.length > 3} 
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0, 
          stretch: -60, 
          depth: 200, 
          modifier: 1,
          slideShadows: true, 
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className={styles.mySwiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slideItem}>
            <img
              src={slide.webformatURL}
              alt={slide.tags || "Слайд"}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

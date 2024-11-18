import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import styles from "./Slider.module.scss";

const Slider = () => {
  const slides = [
    {
      title: "Types of options and how they work",
      category: "Investment",
      time: "2:02",
      image: "/images/slider-thumb1@2x.jpg",
    },
    {
      title: "Vesting & Cliff period",
      category: "Savings",
      time: "4:44",
      image: "/images/slider-thumb1@2x.jpg",
    },
    {
      title: "Shares & equities on startups",
      category: "Lifestyle",
      time: "2:33",
      image: "/images/slider-thumb1@2x.jpg",
    },
    {
      title: "Fourth Shares & equities on startups",
      category: "Lifestyle",
      time: "2:33",
      image: "/images/slider-thumb1@2x.jpg",
    },
    {
      title: "Five Shares & equities on startups",
      category: "Lifestyle",
      time: "2:33",
      image: "/images/slider-thumb1@2x.jpg",
    },
  ];

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.navigationWrapper}>
        <Link className={styles.link} href="#">
          See all
        </Link>
        <button className={styles.prevButton} aria-label="Previous Slide">
          &#8592;
        </button>
        <button className={styles.nextButton} aria-label="Next Slide">
          &#8594;
        </button>
      </div>
      <Swiper
        navigation={{
          prevEl: `.${styles.prevButton}`,
          nextEl: `.${styles.nextButton}`,
        }}
        modules={[Navigation]}
        className={styles.slider}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          1024: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={88}
                height={88}
                className={styles.image}
              />
              <span className={styles.time}>{slide.time}</span>
            </div>
            <div className={styles.slideDetails}>
              <span className={styles.category}>{slide.category}</span>
              <h5 className={styles.title}>{slide.title}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

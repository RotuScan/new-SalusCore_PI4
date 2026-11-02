import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Estilos essenciais do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './Carousel.module.css'

export default function Carousel({ items = [] }) {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.card}
              style={{ backgroundColor: item.color }}
            >
              <span className={styles.cardLetter}>{item.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
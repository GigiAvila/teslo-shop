'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './slideshow.css'

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import { Swiper as SwiperObject } from 'Swiper'
import { useState } from 'react'

interface Props {
  images: string[]
  title: string
  className?: string
}
export const ProductSlideshow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()

  return (
    <div className={className}>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff'
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              width={1024}
              height={800}
              src={`/products/${image}`}
              alt={`${title} image ${index + 1}`}
              className='rounded-lg object-fill'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              width={1024}
              height={800}
              src={`/products/${image}`}
              alt={`${title} image ${index + 1}`}
              className='rounded-lg object-fill'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

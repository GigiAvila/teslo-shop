'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './slideshow.css'

import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

interface Props {
  images: string[]
  title: string
  className?: string
}
export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        autoplay={{
          delay: 2500
        }}
        modules={[Autoplay, FreeMode, Navigation, Navigation, Pagination]}
        className='mySwiper2'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              width={600}
              height={500}
              src={`/products/${image}`}
              alt={`${title} image ${index + 1}`}
              className=' object-fill'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { PaginationOptions } from "swiper/types"

import { homeSlides } from "../../lib/constants"
import Slide from "./Slide"

import "swiper/css"
import "swiper/css/pagination"

const Slider = () => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (_index, className) => {
      return `<span class="${className}"></span>`
    },
  }

  return (
    <Swiper
      pagination={pagination}
      loop={true}
      modules={[Pagination]}
      className="homeSwiper h-screen relative"
    >
      {homeSlides.map((slide) => (
        <SwiperSlide key={slide.img}>
          <Slide data={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider

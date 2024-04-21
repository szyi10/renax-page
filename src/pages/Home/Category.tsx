import { Swiper, SwiperSlide } from "swiper/react"
import { homeCarTypes } from "../../lib/constants"
import CurvButton from "../../components/CurvButton"

import "swiper/css"

const Category = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Categories</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Renatal <span className="text-primary">Car Types</span>
          </h3>
        </div>
        <Swiper
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          className="homeSwiper"
        >
          {homeCarTypes.map((slide) => (
            <SwiperSlide key={slide.label}>
              <div
                className="group/type relative mb-4 overflow-hidden"
                style={{ borderRadius: "20px 20px 20px 0" }}
              >
                <img
                  src={slide.img}
                  className="group-hover/type:scale-110 transition-transform duration-500 ease-in"
                />
                <h4 className="absolute top-0 p-8 text-xl font-bold">
                  {slide.label}
                </h4>
                <CurvButton
                  href="#"
                  icon={<i className="ti-arrow-top-right"></i>}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Category

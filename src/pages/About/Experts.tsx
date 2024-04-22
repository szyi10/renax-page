import { Swiper, SwiperSlide } from "swiper/react"
import { expertsTeam } from "../../lib/constants"
import CurvButton from "../../components/CurvButton"

import "swiper/css"

const Experts = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Certified Team</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Our Experts Team
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
          {expertsTeam.map((slide) => (
            <SwiperSlide key={slide.name}>
              <div
                className="group/type relative mb-4 overflow-hidden"
                style={{ borderRadius: "20px 20px 20px 0" }}
              >
                <img
                  src={slide.img}
                  className="group-hover/type:scale-110 transition-transform duration-500 ease-in"
                />
                <div className="absolute bottom-0 ml-28 z-[1]">
                  <h4 className="text-lg font-bold">{slide.name}</h4>
                  <p className="text-sm mb-4">{slide.position}</p>
                </div>
                <div className="absolute w-full top-[40%] h-[60%] bg-gradient-to-t from-black/80 to-transparent" />
                <CurvButton href="#" icon={<i className="ti-info"></i>} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Experts

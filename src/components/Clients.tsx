import { Swiper, SwiperSlide } from "swiper/react"
import { clientsBar } from "../lib/constants"
import { Autoplay } from "swiper/modules"

const Clients = () => {
  return (
    <section className="bg-neutral-800 py-4">
      <div className="container">
        <Swiper
          spaceBetween={5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          loop={true}
        >
          {clientsBar.map((slide) => (
            <SwiperSlide key={slide.name}>
              <img src={slide.img} alt={slide.name} className="max-w-40" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Clients

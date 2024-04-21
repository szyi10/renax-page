import { Swiper, SwiperSlide } from "swiper/react"

import { homeFleet } from "../../lib/constants"

import "swiper/css"

const Fleet = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Select your car</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Luxury <span className="text-primary">Car Fleet</span>
          </h3>
        </div>
      </div>
      <Swiper
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={"auto"}
        className="fleetSwiper"
      >
        {homeFleet.map((car) => (
          <SwiperSlide key={car.carName} className="max-w-[800px]">
            <div className="flex flex-col">
              <img src={car.img} alt={car.carName} className="rounded-2xl" />
              <div className="w-full md:w-3/4 md:mx-auto flex-col md:flex-row bg-neutral-800 flex gap-3 md:gap-0 px-6 py-6 rounded-2xl md:-mt-10">
                <div className="w-full md:w-2/3">
                  <a href="#" className="font-bold text-xl">
                    {car.carName}
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm text-neutral-500 font-light">
                      <img
                        src="/icons/car-door.svg"
                        className="w-[14px] h-[14px]"
                      />
                      {car.seats} Seats
                    </span>
                    <span className="flex items-center gap-1 text-sm text-neutral-500 font-light">
                      <img
                        src="/icons/gearbox.svg"
                        className="w-[14px] h-[14px]"
                      />
                      {car.transmission}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-neutral-500 font-light">
                      <img
                        src="/icons/luggage.svg"
                        className="w-[14px] h-[14px]"
                      />
                      {car.capacity}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-neutral-500 font-light">
                      <img
                        src="/icons/user.svg"
                        className="w-[14px] h-[14px]"
                      />
                      Age {car.minAge}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="button">Details</button>
                  <div className="flex flex-col ">
                    <span className="text-primary text-xl font-bold">
                      ${car.price}
                    </span>
                    <span className="text-neutral-500">/day</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Fleet

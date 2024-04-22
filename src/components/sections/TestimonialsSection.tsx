import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { homeTestimonials } from "../../lib/constants"
import CurvLT from "../../assets/CurvLT"
import CurvRB from "../../assets/CurvRB"

const TestimonialUser = ({ data }: { data: { name: string; img: string } }) => {
  return (
    <>
      <div className="curv-button" style={{ borderRadius: "0 40px 0 0" }}>
        <div className="curv-button-link overflow-hidden">
          <img src={data.img} />
        </div>
        <div className="curv-left-top">
          <CurvLT />
        </div>
        <div className="curv-right-bottom">
          <CurvRB />
        </div>
      </div>
      <div className="absolute bottom-5 left-1/3">
        <h6 className="text-sm font-normal">{data.name}</h6>
        <p className="text-xs text-neutral-500 font-light">Customer</p>
      </div>
    </>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Testimonials</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            What Clients Say
          </h3>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {homeTestimonials.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
                style={{ borderRadius: "20px 20px 20px 0" }}
              >
                <div>
                  <img src="/icons/quotes.svg" className="w-11 mb-2" />
                  <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                    Lorem posuere in miss drana en the nisan semere sceriun
                    amiss etiam ornare in the miss drana is lorem fermen nunta
                    urnase mauris in the interdum.
                  </p>
                </div>
                <TestimonialUser data={slide} />
                <div
                  className="absolute top-0 right-0 bg-dark text-primary px-2 py-4"
                  style={{ borderRadius: "0 0 0 20px" }}
                >
                  <div className="flex items-center gap-[2px]">
                    <img src="/icons/star.svg" className="w-3" />
                    <img src="/icons/star.svg" className="w-3" />
                    <img src="/icons/star.svg" className="w-3" />
                    <img src="/icons/star.svg" className="w-3" />
                    <img src="/icons/star.svg" className="w-3" />
                  </div>
                  <div className="curv-left-top-flip">
                    <CurvLT />
                  </div>
                  <div className="curv-right-bottom-flip">
                    <CurvRB />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialsSection

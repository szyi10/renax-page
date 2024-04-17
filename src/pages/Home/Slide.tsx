import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type SlideProps = {
  data: {
    carName: string
    price: number
    img: string
  }
}

const Slide = ({ data }: SlideProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <>
      <img
        src={data.img}
        alt={data.carName}
        className="h-full w-full object-cover"
      />
      <div className="w-full h-full absolute left-0 top-0 bg-black/50" />
      <div className="absolute top-1/2 -translate-y-1/2 w-full">
        <div ref={ref} className="container">
          {isInView && (
            <>
              <motion.h6
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="text-small-primary"
              >
                * Premium
              </motion.h6>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                className="text-4xl lg:text-8xl font-bold"
              >
                Rental Car
              </motion.h1>
              <motion.h5
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
                className="my-4 font-light"
              >
                {data.carName}
                <span className="text-[20px] ml-5 font-bold text-primary">
                  600${" "}
                  <i className="text-xs uppercase font-light text-white">
                    / day
                  </i>
                </span>
              </motion.h5>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 1.8 }}
                className="flex items-start gap-6 flex-col min-[410px]:flex-row min-[410px]:items-center"
              >
                <a href="#" className="button">
                  View Details <span className="ti-arrow-top-right"></span>
                </a>
                <a
                  href="#"
                  className="button border-white bg-transparent text-white hover:border-primary hover:bg-primary hover:text-dark"
                >
                  Rent Now <span className="ti-arrow-top-right"></span>
                </a>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Slide

import { Link } from "react-router-dom"

interface CarData {
  data: {
    carName: string
    price: number
    seats: number
    transmission: string
    capacity: string
    minAge: number
    img: string
  }
}

const CarCard = ({ data }: CarData) => {
  return (
    <div className="flex flex-col">
      <img src={data.img} alt={data.carName} className="rounded-2xl" />
      <div className="w-full lg:w-[90%] lg:mx-auto flex-col md:flex-row bg-neutral-800 flex gap-3 lg:gap-0 px-6 py-6 rounded-2xl lg:-mt-10">
        <div className="w-full">
          <a href="#" className="font-bold text-xl">
            {data.carName}
          </a>
          <div className="flex items-center flex-wrap gap-3">
            <span className="flex items-center gap-1 text-sm text-neutral-500 font-light">
              <img src="/icons/car-door.svg" className="w-[14px] h-[14px]" />
              {data.seats} Seats
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500 font-light">
              <img src="/icons/gearbox.svg" className="w-[14px] h-[14px]" />
              {data.transmission}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500 font-light">
              <img src="/icons/luggage.svg" className="w-[14px] h-[14px]" />
              {data.capacity}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to="/cars/bentley-bentayga" className="button px-5 py-2">
            Details
          </Link>
          <div className="flex flex-col ">
            <span className="text-primary text-xl font-bold">
              ${data.price}
            </span>
            <span className="text-neutral-500">/day</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard

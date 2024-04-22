import { homeFleet } from "../../lib/constants"
import CarCard from "./CarCard"

const CarsGrid = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12">
          {homeFleet.map((car) => (
            <CarCard key={car.carName} data={car} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarsGrid

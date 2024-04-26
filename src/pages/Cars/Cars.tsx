import Clients from "../../components/Clients"
import SectionHeader from "../../components/SectionHeader"
import Separator from "../../components/Separator"
import CarsGrid from "./CarsGrid"

const Cars = () => {
  return (
    <>
      <section className="h-[70vh] bg-center bg-fill bg-aston-pattern">
        <SectionHeader
          isCenter={true}
          title="Select your car"
          whiteText="Select"
          yellowText="Luxury Car"
        />
      </section>

      <Separator />
      <CarsGrid />
      <Clients />
    </>
  )
}

export default Cars

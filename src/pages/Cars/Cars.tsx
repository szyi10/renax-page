import Clients from "../../components/Clients"
import SectionHeader from "../../components/SectionHeader"
import Separator from "../../components/Separator"
import CarsGrid from "./CarsGrid"

const Cars = () => {
  return (
    <>
      <SectionHeader
        isCenter={true}
        pattern="aston"
        title="Select your car"
        whiteText="Select"
        yellowText="Luxury Car"
      />
      <Separator />
      <CarsGrid />
      <Clients />
    </>
  )
}

export default Cars

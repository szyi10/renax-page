import SectionHeader from "../../components/SectionHeader"
import Separator from "../../components/Separator"
import BookSection from "../../components/sections/BookSection"
import PromoSection from "../../components/sections/PromoSection"
import ServicesCards from "./ServicesCards"
import OtherServices from "./OtherServices"

const Services = () => {
  return (
    <>
      <SectionHeader
        isCenter={true}
        pattern="bentley"
        title="What we do"
        whiteText="Our"
        yellowText="Services"
      />
      <Separator />
      <ServicesCards />
      <BookSection />
      <OtherServices />
      <PromoSection />
    </>
  )
}

export default Services

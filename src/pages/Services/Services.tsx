import SectionHeader from "../../components/SectionHeader"
import Separator from "../../components/Separator"
import BookSection from "../../components/sections/BookSection"
import PromoSection from "../../components/sections/PromoSection"
import ServicesCards from "./ServicesCards"
import OtherServices from "./OtherServices"
import Clients from "../../components/Clients"

const Services = () => {
  return (
    <>
      <section className="h-[70vh] bg-center bg-fill bg-bentley-pattern">
        <SectionHeader
          isCenter={true}
          title="What we do"
          whiteText="Our"
          yellowText="Services"
        />
      </section>
      <Separator />
      <ServicesCards />
      <BookSection />
      <OtherServices />
      <PromoSection />
      <Clients />
    </>
  )
}

export default Services

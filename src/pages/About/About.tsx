import Clients from "../../components/Clients"
import SectionHeader from "../../components/SectionHeader"
import Separator from "../../components/Separator"
import AboutSection from "../../components/sections/AboutSection"
import MessageSection from "../../components/sections/MessageSection"
import PromoSection from "../../components/sections/PromoSection"
import TestimonialsSection from "../../components/sections/TestimonialsSection"
import Experts from "./Experts"

const About = () => {
  return (
    <>
      <section className="h-[70vh] bg-center bg-fill bg-aston-pattern">
        <SectionHeader
          isCenter={false}
          title="Rentax"
          whiteText="About"
          yellowText="Us"
        />
      </section>
      <Separator />
      <AboutSection />
      <PromoSection />
      <TestimonialsSection />
      <Separator />
      <Experts />
      <MessageSection />
      <Clients />
    </>
  )
}

export default About

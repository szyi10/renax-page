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
      <SectionHeader
        isCenter={false}
        pattern="aston"
        title="Rentax"
        whiteText="About"
        yellowText="Us"
      />
      <Separator />
      <AboutSection />
      <PromoSection />
      <TestimonialsSection />
      <Separator />
      <Experts />
      <MessageSection />
    </>
  )
}

export default About

import Slider from "./Slider"
import Fleet from "./Fleet"
import Category from "./Category"
import Steps from "./Steps"
import AboutSection from "../../components/sections/AboutSection"
import PromoSection from "../../components/sections/PromoSection"
import TestimonialsSection from "../../components/sections/TestimonialsSection"
import MessageSection from "../../components/sections/MessageSection"
import Separator from "../../components/Separator"
import BookSection from "../../components/sections/BookSection"
import Clients from "../../components/Clients"

const Home = () => {
  return (
    <>
      <Slider />
      <AboutSection withButton={true} />
      <BookSection />
      <Fleet />
      <Separator />
      <Category />
      <Separator />
      <Steps />
      <PromoSection />
      <TestimonialsSection />
      <MessageSection />
      <Clients />
    </>
  )
}

export default Home

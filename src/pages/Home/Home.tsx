import Slider from "./Slider"
import Book from "./Book"
import Fleet from "./Fleet"
import Category from "./Category"
import Steps from "./Steps"
import AboutSection from "../../components/sections/AboutSection"
import PromoSection from "../../components/sections/PromoSection"
import TestimonialsSection from "../../components/sections/TestimonialsSection"
import MessageSection from "../../components/sections/MessageSection"
import Separator from "../../components/Separator"

const Home = () => {
  return (
    <>
      <Slider />
      <AboutSection withButton={true} />
      <Book />
      <Fleet />
      <Separator />
      <Category />
      <Separator />
      <Steps />
      <PromoSection />
      <TestimonialsSection />
      <MessageSection />
    </>
  )
}

export default Home

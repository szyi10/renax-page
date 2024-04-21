import Slider from "./Slider"
import HomeAbout from "./HomeAbout"
import Book from "./Book"
import Fleet from "./Fleet"
import Category from "./Category"
import Steps from "./Steps"
import Promo from "./Promo"
import Testimonials from "./Testimonials"
import Message from "./Message"

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeAbout />
      <Book />
      <Fleet />
      <div className="h-12 w-[2px] border-l border-l-primary mx-auto -my-5" />
      <Category />
      <div className="h-12 w-[2px] border-l border-l-primary mx-auto -my-5" />
      <Steps />
      <Promo />
      <Testimonials />
      <Message />
    </div>
  )
}

export default Home

import Slider from "./Slider"
import HomeAbout from "./HomeAbout"
import Book from "./Book"

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeAbout />
      <Book />
      <div className="py-32"></div>
      <div className="py-32"></div>
    </div>
  )
}

export default Home

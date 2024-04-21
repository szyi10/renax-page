import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Clients from "./components/Clients"
import Footer from "./components/Footer"

const HomePage = lazy(() => import("./pages/Home/Home"))
const AboutPage = lazy(() => import("./pages/About/About"))
const CarsPage = lazy(() => import("./pages/Cars/Cars"))
const ServicesPage = lazy(() => import("./pages/Services/Services"))

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Clients />
        <Footer />
      </Suspense>
    </>
  )
}

export default App

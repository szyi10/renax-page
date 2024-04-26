import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Spinner from "./components/Spinner"

const HomePage = lazy(() => import("./pages/Home/Home"))
const AboutPage = lazy(() => import("./pages/About/About"))
const CarsPage = lazy(() => import("./pages/Cars/Cars"))
const ServicesPage = lazy(() => import("./pages/Services/Services"))
const NotFound = lazy(() => import("./pages/NotFound"))

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  )
}

export default App

import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const HomePage = lazy(() => import("./pages/Home/Home"))
const AboutPage = lazy(() => import("./pages/About/About"))
const CarsPage = lazy(() => import("./pages/Cars/Cars"))
const ServicesPage = lazy(() => import("./pages/Services/Services"))

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Suspense>
  )
}

export default App

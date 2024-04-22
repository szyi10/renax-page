import { Link } from "react-router-dom"
import CurvButton from "../CurvButton"

const AboutSection = ({ withButton = false }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 min-[992px]:gap-32 min-[992px]:flex-row">
          <div className="flex-1">
            <div>
              <p className="text-small-primary mb-5">RENTAX</p>
              <div className="text-4xl font-bold leading-tight mb-4">
                <h2>We Are More Than</h2>
                <span className="text-primary">A Car Rental Company</span>
              </div>
              <p className="text-sm mb-8 text-neutral-500 font-light leading-loose">
                Car repair quisque sodales dui ut varius vestibulum drana tortor
                turpis porttiton tellus eu euismod nisl massa nutodio in the
                miss volume place urna lacinia eros nunta urna mauris vehicula
                rutrum in the miss on volume interdum.
              </p>
              <ul className="mb-6">
                <li className="flex items-center">
                  <div className="flex items-center justify-center">
                    <span className="ti-check text-primary bg-neutral-800 p-4 rounded-full text-[11px]"></span>
                  </div>
                  <div>
                    <p className="ml-4 text-neutral-500 text-sm">
                      Sports and Luxury Cars
                    </p>
                  </div>
                </li>
                <li className="flex items-center mt-3">
                  <div className="flex items-center justify-center">
                    <span className="ti-check text-primary bg-neutral-800 p-4 rounded-full text-[11px]"></span>
                  </div>
                  <div>
                    <p className="ml-4 text-neutral-500 text-sm">
                      Sports and Luxury Cars
                    </p>
                  </div>
                </li>
              </ul>
              {withButton && (
                <div className="flex">
                  <Link to="/about" className="button">
                    Read More <span className="ti-arrow-top-right"></span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <div
              className="relative mb-4 overflow-hidden"
              style={{ borderRadius: "20px 20px 20px 0" }}
            >
              <img src="img/about.jpg" />
              <CurvButton
                href="/about"
                icon={<i className="ti-control-play"></i>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

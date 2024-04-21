import CurvLT from "../../assets/CurvLT"
import CurvRB from "../../assets/CurvRB"

const StepNumber = ({ number }: { number: number }) => {
  return (
    <div className="curv-button" style={{ borderRadius: "0 40px 0 0" }}>
      <div className="curv-button-link">
        <div className="curv-step-number">0{number}.</div>
      </div>
      <div className="curv-left-top">
        <CurvLT />
      </div>
      <div className="curv-right-bottom">
        <CurvRB />
      </div>
    </div>
  )
}

const Steps = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Steps</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Car Rental <span className="text-primary">Process</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div
            className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
            style={{ borderRadius: "20px 20px 20px 0" }}
          >
            <div>
              <h5 className="text-xl font-bold mb-4">Choose a Car</h5>
              <p className="text-sm text-neutral-500 mb-4">
                View our range of cars, find your perfect car for the coming
                days.
              </p>
            </div>
            <StepNumber number={1} />
          </div>
          <div
            className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
            style={{ borderRadius: "20px 20px 20px 0" }}
          >
            <div>
              <h5 className="text-xl font-bold mb-4">Come In Contact</h5>
              <p className="text-sm text-neutral-500 mb-4">
                Our advisor team is ready to help you with the booking process
                or any questions.
              </p>
            </div>
            <StepNumber number={2} />
          </div>
          <div
            className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
            style={{ borderRadius: "20px 20px 20px 0" }}
          >
            <div>
              <h5 className="text-xl font-bold mb-4">Enjoy Driving</h5>
              <p className="text-sm text-neutral-500 mb-4">
                Receive the key and enjoy your car. We treat all our cars with
                respect.
              </p>
            </div>
            <StepNumber number={3} />
          </div>
        </div>
        <p className="text-sm text-neutral-500 font-light text-center mt-4">
          If you've never rented a car before, we'll guide you through the
          process.
        </p>
      </div>
    </section>
  )
}

export default Steps

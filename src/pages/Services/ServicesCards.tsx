import CurvLT from "../../assets/CurvLT"
import CurvRB from "../../assets/CurvRB"
import { servicesCards } from "../../lib/constants"

interface CardText {
  title: string
  text: string
  number: number
}

const StepNumber = ({ number }: { number: number }) => {
  return (
    <div className="curv-button" style={{ borderRadius: "0 40px 0 0" }}>
      <div className="curv-button-link ">
        <div className="curv-step-number hover:bg-primary hover:text-dark transition-effect">
          0{number}.
        </div>
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

const Card = ({ title, text, number }: CardText) => {
  return (
    <div
      className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
      style={{ borderRadius: "20px 20px 20px 0" }}
    >
      <div>
        <h5 className="text-xl font-bold mb-4">{title}</h5>
        <p className="text-sm text-neutral-500 mb-4">{text}</p>
      </div>
      <StepNumber number={number} />
    </div>
  )
}

const ServicesCards = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-5">
          {servicesCards.map((card) => (
            <Card title={card.title} text={card.text} number={card.number} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCards

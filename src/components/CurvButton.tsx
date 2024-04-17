import { Link } from "react-router-dom"
import CurvLT from "../assets/CurvLT"
import CurvRB from "../assets/CurvRB"

type ButtonProps = {
  href: string
  icon: React.ReactNode
}

const CurvButton = ({ href, icon }: ButtonProps) => {
  return (
    <div className="curv-button" style={{ borderRadius: "0 40px 0 0" }}>
      <Link to={href} className="curv-button-link">
        <div className="curv-button-icon">{icon}</div>
      </Link>
      <div className="curv-left-top">
        <CurvLT />
      </div>
      <div className="curv-right-bottom">
        <CurvRB />
      </div>
    </div>
  )
}

export default CurvButton

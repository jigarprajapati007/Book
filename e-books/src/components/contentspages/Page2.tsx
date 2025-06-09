import cir from "../../assets/content/page2circle.svg"
import logo from "../../assets/content/page2logo.svg"
export const Page2 = () => {
  return (
    <div className="pg2">
        <h4 className="pg2-h4">Your Score</h4>
        <div className="pg2-fst">
            <img src={cir} alt="" />
            <p>Your score will appear once the assessment is completed.</p>
        </div>
        <img className="pg2-img" src={logo} alt="" />
    </div>
  )
}

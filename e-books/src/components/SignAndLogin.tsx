import bg from "../assets/signup/bglogo.svg"
import txt from "../assets/signup/txt.svg"
import google from "../assets/signup/google.svg"
import foot from "../assets/signup/footlogo.svg"
import email from "../assets/signup/email.svg"
import apple from "../assets/signup/apple.svg"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
export const SignAndLogin = () => {
    const navigate = useNavigate()
    const routToNextPage = () =>{
        navigate('/assessment')
    }
  return (
    <div className="sign-container">
        <div className="bg-dv">
            <img src={bg} alt="" />
        </div>
        <div className="btn-dv">
            <img className="fst" src={txt} alt="" />
            <h2 className="h-sign">Create Account</h2>
            <p className="p1-sign">Sign up with your preferred method.</p>
            <Button onClick={routToNextPage} className="btn-sign"> <img src={email} alt="" /> Sign Up with Email</Button><br />
            <Button onClick={routToNextPage} className="btn-sign"> <img src={google} alt="" /> Sign Up with Google</Button><br />
            <Button onClick={routToNextPage} className="btn-sign"> <img src={apple} alt="" /> Sign Up with Apple</Button>
            <p className="p2-sign">Already have an account ? <span>Sign in</span></p>
            <img src={foot} alt="" />
            <p className="p3-sign">By continuing, you agree to Smart Book’s <span>Terms of Service</span> and <span>Privacy Policy.</span></p>
        </div>
    </div>
  )
}

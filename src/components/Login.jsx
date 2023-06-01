import './App.css'
import BluePage from "./Bluepage";
import Button from './Button';
import Form from "./Form";
// import RegisterButton from './SignupButton';
// import Form_demo from './Formdemo';


function Login() {
    return(
        
        <div className="login-container">
        {/* This div contains the page with the Blue page and logo */}
            <div className="blue">
            <BluePage />
            </div>
            
            <div className="login_box">
                <div className="formdetails">
                 <h2>Sign In</h2>   
                <Form />
                
                <Button btnText={"Sign In"} />
                {/* <RegisterButton /> */}
                

                               
                </div>
                <div className="dont">
                <p>Don't have an account?</p>
                <a href='./Create.jsx' target='_blank'>Sign Up</a>
                </div>
                {/* <Form_demo /> */}
            
            </div>
        </div>
    )

}
export default Login;
import BluePage from "./Bluepage";
import Button from "./Button";

import Input from "./Input";
import Label from "./Label";

function Create(){
    return(
        <>
        <div className="create-box">
            <div className="blue">
            <BluePage />
            </div>
            
            <div className="createpage">
            
            <h1>Create Account</h1>
                <div className="namebox">
                
                 <div className="fname-box"> 
                 <Label Text={"First Name"}/><br />  
                 
                {/* change form class name to "registerform" */}
                <form className="fname">
                <Input InputType={"Text"} placeholderText={"Enter First Name"}/>
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M16.8125 6.75C16.8125 9.92601 14.2385 12.5 11.0625 12.5C7.88649 12.5 5.3125 9.92601 5.3125 6.75C5.3125 3.57399 7.88649 1 11.0625 1C14.2385 1 16.8125 3.57399 16.8125 6.75ZM11.0625 15.8438C12.3677 15.8438 13.6093 15.561 14.7298 15.0625H15.4375C18.7844 15.0625 21.5 17.7781 21.5 21.125V23.1562C21.5 24.1741 20.6741 25 19.6562 25H2.46875C1.45095 25 0.625 24.1741 0.625 23.1562V21.125C0.625 17.7781 3.3406 15.0625 6.6875 15.0625H7.39557C8.51963 15.5607 9.75659 15.8438 11.0625 15.8438Z" fill="white" stroke="#18345E"/>
</svg>

                </form>
                </div>
                
                 <div className="lname-box">   
                 <Label Text={"Last Name"}/><br />
                
                <form className="lname">
                <Input InputType={"Text"} placeholderText={"Enter First Name"}/>
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M16.8125 6.75C16.8125 9.92601 14.2385 12.5 11.0625 12.5C7.88649 12.5 5.3125 9.92601 5.3125 6.75C5.3125 3.57399 7.88649 1 11.0625 1C14.2385 1 16.8125 3.57399 16.8125 6.75ZM11.0625 15.8438C12.3677 15.8438 13.6093 15.561 14.7298 15.0625H15.4375C18.7844 15.0625 21.5 17.7781 21.5 21.125V23.1562C21.5 24.1741 20.6741 25 19.6562 25H2.46875C1.45095 25 0.625 24.1741 0.625 23.1562V21.125C0.625 17.7781 3.3406 15.0625 6.6875 15.0625H7.39557C8.51963 15.5607 9.75659 15.8438 11.0625 15.8438Z" fill="white" stroke="#18345E"/>
</svg>

                </form>
                </div>

                
                
                
                
                </div>
                <Label Text={"Email"} /><br />
                <div className="email_box">
                
                <Input InputType={"text"} placeholderText={"Enter Email"} />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#b6d7f6" stroke-linejoin="round" stroke-width="2"><path stroke-linecap="round" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"/><path d="m2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8"/></g></svg>

                </div>

                <div className="namebox">
                
                 <div className="fname-box"> 
                 <Label Text={"First Name"}/><br />  
                
                <form className="fname">
                <Input InputType={"Text"} placeholderText={"Enter First Name"}/>
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M16.8125 6.75C16.8125 9.92601 14.2385 12.5 11.0625 12.5C7.88649 12.5 5.3125 9.92601 5.3125 6.75C5.3125 3.57399 7.88649 1 11.0625 1C14.2385 1 16.8125 3.57399 16.8125 6.75ZM11.0625 15.8438C12.3677 15.8438 13.6093 15.561 14.7298 15.0625H15.4375C18.7844 15.0625 21.5 17.7781 21.5 21.125V23.1562C21.5 24.1741 20.6741 25 19.6562 25H2.46875C1.45095 25 0.625 24.1741 0.625 23.1562V21.125C0.625 17.7781 3.3406 15.0625 6.6875 15.0625H7.39557C8.51963 15.5607 9.75659 15.8438 11.0625 15.8438Z" fill="white" stroke="#18345E"/>
</svg>

                </form>
                </div>
                
                 <div className="lname-box">   
                 <Label Text={"Last Name"}/><br />
                
                <form className="lname">
                <Input InputType={"Text"} placeholderText={"Enter First Name"}/>
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M16.8125 6.75C16.8125 9.92601 14.2385 12.5 11.0625 12.5C7.88649 12.5 5.3125 9.92601 5.3125 6.75C5.3125 3.57399 7.88649 1 11.0625 1C14.2385 1 16.8125 3.57399 16.8125 6.75ZM11.0625 15.8438C12.3677 15.8438 13.6093 15.561 14.7298 15.0625H15.4375C18.7844 15.0625 21.5 17.7781 21.5 21.125V23.1562C21.5 24.1741 20.6741 25 19.6562 25H2.46875C1.45095 25 0.625 24.1741 0.625 23.1562V21.125C0.625 17.7781 3.3406 15.0625 6.6875 15.0625H7.39557C8.51963 15.5607 9.75659 15.8438 11.0625 15.8438Z" fill="white" stroke="#18345E"/>
</svg>

                </form>
                </div>

                
                
                
                
                </div>
                <div className="xters">
                    <form>
                    <Input InputType={"radio"} id="colored_radio" />    
                    <Label Text= {"Contains at least one uppercase letter"} /><br />
                    <Input InputType={"radio"} />    
                    <Label Text= {"Contains at least one uppercase letter"} /><br />
                    <Input InputType={"radio"} />    
                    <Label Text= {"Contains at least one uppercase letter"} /><br />
                    <Input InputType={"radio"} />    
                    <Label Text= {"Contains at least one uppercase letter"} /><br />
                    
                    </form>
                </div>
                <Button btnText={"Sing Up"} />
                <div className="dont">
                <p>Already a Member?</p>
                <a href='./Create.jsx' target='_blank'>Sign In</a>
                </div>
                
                
            </div>
        </div>

        
        
        </>
    )

}

export default Create;
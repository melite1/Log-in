import "./App.css"
import Input from "./Input";
import Label from "./Label";

function Form(){
    return(
        <>
            <div className="formbox">
                

                <form className="email">
                    <Label className="email_label" Text={"Email"} /> <br/>
                    <div className="email box">
                    <Input InputType={"text"} placeholderText={"Enter Email"} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#b6d7f6" stroke-linejoin="round" stroke-width="2"><path stroke-linecap="round" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"/><path d="m2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8"/></g></svg>
                    </div>

                    <Label Text={"Password"} /> <br/>
                    <div className="password box">
                        <Input InputType={"password"} placeholderText={"Enter Password"} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 20 20"><g transform="translate(20 0) scale(-1 1)"><path fill="#b6d7f6" d="M17.3 3.3c-.4-.4-1.1-.4-1.6 0l-2.4 2.4a9.6 9.6 0 0 0-3.3-.6c-3.8.1-7.2 2.1-9 5.4c.2.4.5.8.8 1.2c.8 1.1 1.8 2 2.9 2.7L3 16.1c-.4.4-.5 1.1 0 1.6c.4.4 1.1.5 1.6 0L17.3 4.9c.4-.5.4-1.2 0-1.6zm-10.6 9l-1.3 1.3c-1.2-.7-2.3-1.7-3.1-2.9C3.5 9 5.1 7.8 7 7.2c-1.3 1.4-1.4 3.6-.3 5.1zM10.1 9c-.5-.5-.4-1.3.1-1.8c.5-.4 1.2-.4 1.7 0L10.1 9zm8.2.5c-.5-.7-1.1-1.4-1.8-1.9l-1 1c.8.6 1.5 1.3 2.1 2.2C15.9 13.4 13 15 9.9 15h-.8l-1 1c.7-.1 1.3 0 1.9 0c3.3 0 6.4-1.6 8.3-4.3c.3-.4.5-.8.8-1.2c-.3-.3-.5-.7-.8-1zM14 10l-4 4c2.2 0 4-1.8 4-4z"/></g></svg>
                    </div>
                </form>
                
               
                                    
                
            </div>
                 


        </>
    )
}
export default Form;
import { useState } from "react";
import { loginFormElements } from "../../config"; // Importing the form configuration
import CommonForm from "../common-form"; // Import the CommonForm component

const initialFormData={
    email: '',
        password: '',
}

function LoginComponent() {
    // State to hold the form data
    const [loginFormData, setLoginFormData] = useState(initialFormData);

    console.log(loginFormData,'loginFormdata')

    function onHandleSubmit(event){
        event.preventDefault();
        console.log(loginFormData,'loginFormdata');

        //api logic 

        setLoginFormData(initialFormData)

    }

    return (
        <div>
            <h1>Login page</h1>
             <div style={{
            border: 'solid 3px #000',
            width: '500px',
            height: '170px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: 'auto', 
            position: 'absolute', 
            top: '37%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
          }}>
            
            <CommonForm  
                formData={loginFormData} // Pass the form data state
                setFormData={setLoginFormData} // Pass the function to update the form data
                formControls={loginFormElements} // Pass the form controls
                buttonText={'Login'}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
        </div>
       
    );
}

export default LoginComponent;

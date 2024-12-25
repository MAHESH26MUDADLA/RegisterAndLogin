import { registerFormElements } from "../../config";
import CommonForm from "../common-form";
import { useState } from "react";


const initialRegisterFormData={
    name:'',
    email:'',
    password:''
}

function RegisterComponent(){
    const [registerFormData, setRegisterFormData]=useState(initialRegisterFormData);

    function handleRegisterOnSubmit(event){
        event.preventDefault();
        console.log(registerFormData);

        setRegisterFormData(initialRegisterFormData);
    }

    return (
        <div>
            <h1>Register page</h1>
            <div style={{
            border: 'solid 3px #000',
            width: '500px',
            height: '200px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: 'auto', 
            position: 'absolute', 
             top:'37%',
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            borderRadius: '15px', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
          }}>
            
            <CommonForm
            formControls={registerFormElements}
            formData={registerFormData}
           setFormData={setRegisterFormData} 
           buttonText={"register"}
           onHandleSubmit={handleRegisterOnSubmit}/>
        </div>
        </div>
        
    )

}
export default RegisterComponent;
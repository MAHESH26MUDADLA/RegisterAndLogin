import { useState } from 'react'
import LoginComponent from './components/login'
import RegisterComponent from './components/register'
import { Routes, Route, useNavigate} from 'react-router-dom';


function App() {
  //const [count, setCount] = useState(0)
  const navigate=useNavigate();

  return (
   
    <div>
      
      {/*<div style={{display : 'flex', gap:"40px"}}> 
        <LoginComponent/>
        <RegisterComponent/>
          
      </div>*/}

      

     <Routes style={{border:'solid'}}>
      <Route path='login' element={<LoginComponent/>}/>
      <Route path='register' element={<RegisterComponent/>}/>
     </Routes>

     <button style={{marginTop:'300px'}} onClick={()=>navigate('/login')} 
        >Login</button>
      <button style={{marginTop:'300px'}} onClick={()=>navigate('/register')} 
        >Register</button>
    </div>
    
  )
}

export default App

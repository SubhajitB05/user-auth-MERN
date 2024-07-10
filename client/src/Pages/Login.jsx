import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import {toast} from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [userLoginData, setUserLoginData] = useState({
    email:"",
    password:""
  })

  const handleUserLogin = async(e)=>{
    e.preventDefault();
    // axios.get('/')
    const {email, password} = userLoginData;
    try{
      const {data} = await axios.post('/login', {
        email, password
      })
      if(data.error){
        toast.error(data.error);
      }
      else{
        setUserLoginData({});
        toast.success('Login Successful');
        navigate('/dasboard');
      }
    }
    catch(err){
      console.log(err);
    }

  }
  return (
    <div className='form-container'>
        <h2>Login</h2>
        <form onSubmit={handleUserLogin} className='form'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@gmail.com"
              value={userLoginData.email}
              onChange={(e)=>setUserLoginData({...userLoginData, email:e.target.value})}  
              required={true}
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="********"
              value={userLoginData.password}  
              onChange={(e)=>setUserLoginData({...userLoginData, password:e.target.value})}
              required={true}
            />
            <button className='login-btn' type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to={'/register'}>Register here</Link></p>
    </div>
  )
}

export default Login
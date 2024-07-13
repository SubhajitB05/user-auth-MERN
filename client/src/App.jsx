import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
// import Navbar from "./Components/Navbar"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import Dasboard from "./Pages/Dasboard";

axios.defaults.baseURL = 'https://user-auth-mern-backend.vercel.app/';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Toaster position="top-right" toastOptions={{duration:3000}}/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dasboard/>}/>
    </Routes>
    </>
  )
}

export default App

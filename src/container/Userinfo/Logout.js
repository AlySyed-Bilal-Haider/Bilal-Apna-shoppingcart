import React,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Logout() {
   const navigate=useNavigate();
  useEffect(()=>{
    localStorage.removeItem("userlogindetails");
    navigate('/userlogin');
  },[])
  return <span></span>
}

export default Logout
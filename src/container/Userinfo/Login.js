import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import fir from "../../Firebase/Fire";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { getAuth } from "firebase/auth";
function Login() {
   const [email,setemail]=useState('');
   const [password,setpassword]=useState('');
   const [getuseremail,getEmail]=useState('');
   const [getpassword,getPassworduser]=useState('');
     const nagivate = useNavigate();
    const loginHandler=(e)=>{
      e.preventDefault();
     const userinfo=JSON.parse(localStorage.getItem("user"));
     getEmail(userinfo.email);
     getPassworduser(userinfo.password);
     if(email==getuseremail && password==getpassword)
     {
      const logindetails={logemail:email,logpassword:password} 
      localStorage.setItem("userlogindetails",JSON.stringify(logindetails));
      setTimeout(()=>{
        nagivate('/');
      },2000)
      toast.success('login successfully', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     }else{
      toast.error('🦄 Invalid email or password, please try again', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
       return false;
     }}
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <br />
      <br />
        <div className="form_wrapper mt-5" style={{ height: "350px" }}>
          <div className="form_container">
            <div className="title_container">
              <h2>Login Form</h2>
            </div>
            <div className="row clearfix">
              <div className="">
                <form className="Signup" onSubmit={loginHandler}>
                  <div className="input_field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="email"
                      autoComplete="off"
                      style={{
                        width:'95%',
                        height:'30px',
                        borderRadius:'5px'
                      }}
                      value={email}
                     onChange={(e)=>{setemail(e.target.value)}}
                    />
                  </div>
                  <br />
                  <div className="input_field">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      required
                      className="password"
                      style={{
                        width:'95%',
                        height:'30px',
                        borderRadius:'5px'
                      }}
                      value={password}
                      onChange={(e)=>{setpassword(e.target.value)}}
                    />
                  </div>
                  <br />
                  <button
                    id="submit"
                    type="submit"
                    className="button"
                     style={{width:'60px',height:'30px',borderRadius:'5px',background:'skyblue',outline:'none',border:'none'}}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      <br />
      <br />
      <Footer />
    </>
  );}
export default Login;

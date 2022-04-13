import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { Formik, Field, Form } from "formik";
import { LoginSchema } from "./Yup";
import Errormsg from "./Errormsg";
import "./Registerations.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Registerations() {
  const Initivalue = {
    email: "",
    password: "",
    cpassword: "",
    fname: "",
    lname: "",
    username: "",
    role: 1,
  };
  const nagivate = useNavigate();
  const jumpone_pageto_another=()=>{
    setTimeout(()=>{
      nagivate('/userlogin');
    },2000);
    toast.success('login successfully', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Formik
        initialValues={Initivalue}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
        const mydata={fname:values.fname,lname:values.lname,username:values.username,password:values.password,email:values.email} 
         localStorage.setItem('user',JSON.stringify(mydata));
          jumpone_pageto_another();

      }}
      >
        <div className="conatiner m-5">
          <div className="row">
            <div className="col justify-content-center py-2 Signup">
              <h3 style={{ textAlign: "center", padding: "5px" }}>
                Signup Form
              </h3>
              <Form>
                <div className="input_field">
                  <Field
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    autoComplete="off"
                  />
                  <Errormsg name="email" className="error" />
                </div>
                <div className="input_field">
                  <Field
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <Errormsg name="password" className="error" />
                </div>
                <div className="input_field">
                  <Field
                    type="password"
                    className="input"
                    name="cpassword"
                    placeholder="Re-type Password"
                    required
                  />
                  <Errormsg name="cpassword" className="error" />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <Field
                        type="text"
                        className="input"
                        name="fname"
                        placeholder="First Name"
                      />
                      <Errormsg name="fname" className="error" />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <Field
                        type="text"
                        className="input"
                        name="lname"
                        placeholder="Last Name"
                        required
                      />
                      <Errormsg name="lname" className="error" />
                    </div>
                  </div>
                  <div className="input_field">
                    <Field
                      type="text"
                      className="input"
                      name="username"
                      placeholder="user name"
                      required
                    />
                    <Errormsg name="username" className="error" />
                  </div>
                 
                  <div className="input_field">
                    <Field
                      type="hidden"
                      className="input"
                      name="role"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary py-2"
                  style={{ marginRight: "720px" }}
                >
                  Register
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
      <br />
      <ToastContainer/>
      <Footer />
    </>
  );
}

export default Registerations;

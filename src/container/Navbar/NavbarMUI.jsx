import React from 'react'
import {Grid,Typography} from "@mui/material";
import TemporaryDrawer from './Responsivedrawer';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './NavbarMUI.css';
const navbarstyling={
    padding:'5px',
    marginTop:'10px'
}
const NavbarMUI = () => {
    var Addtocartitem = useSelector((state) => state);
  return <>
   <Grid container style={{backgroundColor:"#198754",color:'white'}}>
       <Grid item md={6}>
            <Typography sx={{margin:'30px 0px 0px 20px',color:'white',float:'left',
            display:{ lg:'block', md:'block', sm:'none', xs:'none' }}} variant="h5">Shopping cart</Typography>
            </Grid>
            <Grid item md={6}  sx={{display:{ lg:'block', md:'block', sm:'none', xs:'none' }}}>
           <nav style={navbarstyling}>
           <NavLink to="/" className="navlink">  Home </NavLink>
           <NavLink to="/usersignup" className="navlink"> Registerations </NavLink>
           <NavLink to="/userlogin" className="navlink"> login </NavLink>
            <NavLink to="/shoppingcart" className="navlink" >
                <i
                  className="fa fa-shopping-cart cart-icon "
                  aria-hidden="true"
                  style={{ color: "white", fontSize: "22px", }}
                />
                 <span className="counter" style={{margin:'0px 5px 20px 0px',position:'absolute'}}> {Addtocartitem.AddtoCartProductsreducer.length}</span>
              </NavLink>
             <button className="btn bnt-primary">  <NavLink to="/logout" style={{float:'right',marginBottom:'10px'}} className="navlink"> Logout </NavLink></button>
            </nav>

       </Grid>
       <Grid item  md={6}
       sx={{color:'white',zIndex:1,display:{ lg:'none', md:'none',  sm:'block', xs:'block' }}} style={{position:'absolute'}}>
         <TemporaryDrawer/>
       </Grid>
   </Grid>
  </>
}

export default NavbarMUI
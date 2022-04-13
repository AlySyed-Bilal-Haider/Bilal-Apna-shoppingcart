import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AddtoCartProducts } from '../../redux/Actions/productsActions';
function Cart(props) {
    const addtocartuseId=props.user;
    const Emptycart="";
    const navigate=useNavigate();
    const usedispatch=useDispatch();
    useEffect(()=>{
        itemAddtocart();
      },[addtocartuseId]);
         const itemAddtocart= async ()=>{
          await axios.get(`https://fakestoreapi.com/products/${addtocartuseId}`)
         .then(function(response){
          usedispatch(AddtoCartProducts(response.data));
          props.func(Emptycart);
          props.Buytocart==true && navigate('/shoppingcart');
         }).catch((error)=>{
             console.log("error",error)
         });}
         return(<> 
       
               </>)
}

export default Cart;
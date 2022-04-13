import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import '../container/assets/productsdetauls.css';
import { useDispatch,useSelector} from 'react-redux';
import { singleproducts } from '../redux/Actions/productsActions';
import 'font-awesome/css/font-awesome.min.css';
import Cart from './AddtoCart/Cart';
import Footer from './Footer/Footer';
import Header from './Header';
 const ProductsDetails=()=> {
  const usedispatch=useDispatch();
  const sperate_products=useSelector(state=>state.ProductsDetails);
  let [navigatebuytocart,setMovebuytocart]=useState(false);
  const params=useParams();
  const [addtocart,setAddtocart]=useState('');
  const id=params.productsid;
  useEffect(()=>{
    Productsdata();
  },[]);
     const Productsdata= async ()=>{
       if(id!=='')
       {
      await axios.get(`https://fakestoreapi.com/products/${id}`)
     .then(function(response){
      usedispatch(singleproducts(response.data));
     }).catch((error)=>{
         console.log("error",error)
     });}}

      const addTocart=(productsId)=>{
        setAddtocart(productsId);
        setMovebuytocart(true);
      }
      const addtocartEmpty=(cartEmptyvalue)=>{
        setAddtocart(cartEmptyvalue);
        setMovebuytocart(false);
      }
  return <>
  <div>
  <Header/>
  </div>
      <div className='container productsdetails_container'>
          <div className="row shadow-sm p-3 mb-5 bg-white bg-light rounded">
            {
              sperate_products&&sperate_products.map((item,index)=>{
                return <>
                 <div className="col-md-6 left-column" key={index}>
                <img className="img" src={item.image} alt=""/>
                </div>
              <div className=" col-md-6  right-column mt-3 mt-sm-5 pt-2">
              <div className="product-description">
                <span>{item.category}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <div className="product-price">
              <span>{item.price}</span>
              <button  className="cart-btn  btn  bg-success text-white" onClick={()=>{addTocart(item.id)}}>Add to cart</button>
              <button className=" btn btn-primary cart-btn  text-white" 
              style={{marginLeft:'10px'}}
              onClick={()=>{addTocart(item.id)}}>Buy now</button>
            </div>
          </div> </>})}
          </div>
          </div><br/><br/><br/> 
          <Footer/>
          {addtocart&&<Cart user={addtocart} func={addtocartEmpty} Buytocart={navigatebuytocart}/>}
</>}
export default ProductsDetails;

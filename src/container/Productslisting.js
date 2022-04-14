import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/productslist.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/Actions/productsActions";
import { Link } from "react-router-dom";
import Cart from "./AddtoCart/Cart";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer/Footer";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer, toast } from 'react-toastify';
function Productslisting() {
  const navigate=useNavigate();
  const Products = useSelector((state) => state.productReducer);
  let [loading, setLoading] = useState(true);
  let [navigatebuytocart,setMovebuytocart]=useState(false);
  const usedispatch = useDispatch();
  const [addtocart, setAddtocart] = useState("");
  useEffect(() => {
    Productsdata();
  }, []);
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  const Productsdata = async () => {
    await axios
      .get(`https://fakestoreapi.com/products`,axiosConfig)
      .then(function (response) {
        usedispatch(selectedProduct(response.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  // add to cart method
  const Buynowrproducts = (productsId) => {
    if ("userlogindetails" in localStorage)
    {
    setAddtocart(productsId);
    setMovebuytocart(true);
    return true;
    }
    else
    {
      setTimeout(()=>{
        navigate('/userlogin');
      },2000);
      toast.error(' please craete account or login', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
    }
  };
  // parents to child values method;
  const addtocartEmpty = (cartEmptyvalue) => {
    setAddtocart(cartEmptyvalue);
    setMovebuytocart(false);
  };
  //buy now products methods
  const addTocart=(id)=>{
    setAddtocart(id);
  }
  const override = css`
  display: block;
  margin: auto;
  textAlign:center;
  border-color: red;
  color:green;
  margin-top:20%;
`;
const sweetloading={
  width:'100%',
  minHeight:'100vh',
  backgroundColor:'rgba(#4848488,0,0,0.10)',
  position: 'absolute',
  zIndex: 9999,
  marginTop:'-55px',
  position:'fixed',
}
  return (
    <>
    {loading==true&&<div className="sweet-loading" style={sweetloading}>
      <HashLoader loading={loading} css={override} size={100} >Loading</HashLoader>
    </div>}
    {loading==false&&<div>
    <Header/>
    <Slider/>
    <div className="container py-3  text-center " style={{ height: "100px", marginBottom: "15px" }} >
        <h1>Products Categores</h1>
      </div></div>}
      <div
        className="container "
        style={{ marginTop: "50px", paddingBottom: "5px" }}
      >
        <div className="row">
          {Products.map((products) => {
            const { id, title, price, image, category } = products;
            return (
              <>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 text-center mt-4 product_detalis py-2 shadow-sm"
                  key={id}
                >
                  <div className="product_data">
                    <Link to={`/ProductsDetails/${id}`}>
                      <div className="Product_img">
                        <img
                          src={image}
                          className="Product_image"
                          alt={title}
                          title={title}
                        />
                      </div>
                    </Link>
                    <div className="product_name">
                      <h5>{title}</h5>
                    </div>
                    <div className="product_price"  style={{ margin:'10px' }}>
                      <h3>
                        <span> Price:</span>
                        {price}
                      </h3>
                    </div>
                    <div className="add_to_cart">
                      <button className="btn btn-primary" 
                       onClick={()=>{Buynowrproducts(id)}}
                      style={{ margin:'10px' }}>Buy now</button>
                      <button
                        className="btn  bg-success text-white"
                        onClick={() => {
                          addTocart(id);
                        }}
                      >
                        <i className="fa fa-shopping-cart dropbtn"></i>Add to
                        Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <ToastContainer/>
      {loading==false && (<Footer/>)}
      {addtocart && <Cart user={addtocart} func={addtocartEmpty} Buytocart={navigatebuytocart}/>}
      
    </>
  );
}

export default Productslisting;

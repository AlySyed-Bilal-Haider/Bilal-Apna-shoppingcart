import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/productslist.css";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/Actions/productsActions";
import { Link } from "react-router-dom";
import Cart from "./AddtoCart/Cart";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer/Footer";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
function Productslisting() {
  const Products = useSelector((state) => state.productReducer);
  let [loading, setLoading] = useState(true);
  const usedispatch = useDispatch();
  const [addtocart, setAddtocart] = useState("");
  useEffect(() => {
    // setLoading(true);
    Productsdata();
    // setLoading(false);
  }, []);
  const Productsdata = async () => {
    await axios
      .get(`https://fakestoreapi.com/products`)
      .then(function (response) {
        usedispatch(selectedProduct(response.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const addTocart = (productsId) => {
    setAddtocart(productsId);
  };
  const addtocartEmpty = (cartEmptyvalue) => {
    setAddtocart(cartEmptyvalue);
  };
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
  height:'100%',
  backgroundColor:'#4848488f',
  position: 'absolute',
  zIndex: 9999,
  marginTop:'-55px'
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
                      <button className="btn btn-primary" style={{ margin:'10px' }}>Buy now</button>
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
      {loading==false && (<Footer/>)}
      {addtocart && <Cart user={addtocart} func={addtocartEmpty} />}
      
    </>
  );
}

export default Productslisting;

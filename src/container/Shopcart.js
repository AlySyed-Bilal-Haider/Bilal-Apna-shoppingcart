import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './Footer/Footer';
import Header from './Header';
import { useNavigate } from "react-router-dom";
import '../container/assets/shopcart.css'
import { selectedRemoveProduct } from '../redux/Actions/productsActions';
import CreditCard from './Creditcard/Card';
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer, toast } from 'react-toastify';
function Shopcart() {
    const navigate=useNavigate();
    var totalamount=0;
    var Addtocartitem=useSelector(state=>state);
    const usedispatch=useDispatch();
    const removeproductsHandler=(id)=>{
      usedispatch(selectedRemoveProduct(id));
    }
    const checkoutProducts= () => {
        if ("userlogindetails" in localStorage)
        {
            toast.success('Checkout successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
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
     return <>
                   <Header/><br/>
                   {Addtocartitem.AddtoCartProductsreducer.length!==0?(<div className="container mt-3 p-3 rounded cart">
            <div className="row no-gutters">
        <div className="col-md-8">
            <div className="product-details mr-2">
                <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span></div>
                <hr/>
                <h6 className="mb-0">Shopping cart</h6>
                <div className="d-flex justify-content-between"><span>You have {Addtocartitem.AddtoCartProductsreducer.length} items in your cart</span>
                    <div className="d-flex flex-row align-items-center"><span className="text-black-50">Sort by:</span>
                        <div className="price ml-2"><span className="mr-1">price</span><i className="fa fa-angle-down"></i></div>
                    </div>
                </div>
                {Addtocartitem.AddtoCartProductsreducer.map((items)=>{
                    totalamount=totalamount+items.price;
                return <>
                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded" key={items.id}>
                    <div className="d-flex flex-row"><img class="rounded" src={items.image} width="40" alt=""/>
                        <div className="ml-2"><span class="font-weight-bold d-block">{items.title}</span>
                        <span className="spec" style={{ marginLeft:'5px' }}>Rs:{items.price}</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <span className="d-block">Quantity: <input type="number"style={{width:'50px',marginRight:'10px'}} placeholder='1'/></span>
                           <span className="d-block mr-3 font-weight-bold ">$900</span>
                               <i class="fa fa-trash-o ml-3 text-black-50 " style={{ fontSize:'18px' }} onClick={ ()=>{removeproductsHandler(items.id)}}></i>
                               </div>
                </div>
                </>
                })}
            </div>
        </div>
        <div className="col-md-4 sm-mt-5" style={{width:'100%'}}>
            <div className="payment-info">
                <div className="d-flex justify-content-between align-items-center"><span>Card details</span><img className="rounded" src="https://i.imgur.com/WU501C8.jpg" alt="" width="30"/></div>
                <CreditCard/>
                <hr className="line"/>
                <div className="d-flex justify-content-between information"><span>Total amount:</span><span readOnly>{totalamount}</span></div>
                <button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button" onClick={checkoutProducts}>
                  <span readOnly>{totalamount}</span><span>Checkout<i class="fa fa-long-arrow-right ml-1"></i></span></button>
            </div>
        </div>
    </div>
</div>):(<div className='cartempty pb-5' style={{position:'relative',margin:'auto',marginTop:'10%',lineHeight:'14px',textAlign:'center',fontSize:'12px' }}><span><strong>There are no items in this cart</strong></span><br/>
        <button className='contineshopping btn mt-3 boder-1 btn-primary py-3' onClick={()=>{
            navigate('/');
        }}>Continue shopping</button></div>)}
        <ToastContainer/>
<br/><br/><br/><br/>
<Footer/>
  </>
}

export default Shopcart
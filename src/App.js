import { Route, Routes } from "react-router-dom";
import ProductsDetails from "./container/ProductsDetails";
import Productslisting from "./container/Productslisting";
import Login from "./container/Userinfo/Login";
import Logout from "./container/Userinfo/Logout";
import Shopcart from "./container/Shopcart";
import Registerations from "./container/Userinfo/Registerations";
import { BrowserRouter } from "react-router-dom";
// import PaymentButton from './container/Payment/PaymentButton'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            name="productslisting"
            path="/"
            element={<Productslisting />}
          />
          <Route
            exact
            name="ProductsDetails/:productsid"
            path="/ProductsDetails/:productsid"
            element={<ProductsDetails />}
          />
          <Route
            exact
            name="signup"
            path="/usersignup"
            element={<Registerations />}
          />
          <Route exact name="loginuser" path="/userlogin" element={<Login />} />
          <Route
            exact
            name="shoppingcart"
            path="/shoppingcart"
            element={<Shopcart />}
          />
          <Route exact name="logout" path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

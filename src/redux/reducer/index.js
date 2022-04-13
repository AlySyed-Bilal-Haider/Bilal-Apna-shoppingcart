import {
  productReducer,
  AddtoCartProductsreducer,
  ProductsDetails,
  UserReducer,
  Productsretrive,
  Categoryreducer,
  Brandreducer,
} from "./Productsreducer";
import { combineReducers } from "redux";
export const reducer = combineReducers({
  productReducer,
  ProductsDetails,
  AddtoCartProductsreducer,
  UserReducer,
  Productsretrive,
  Categoryreducer,
  Brandreducer,
});

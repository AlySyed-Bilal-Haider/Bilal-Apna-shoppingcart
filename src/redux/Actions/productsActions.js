import { ActionTypes } from "../contants/Actions-type";
export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
export const selectedRemoveProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
export const singleproducts = (product) => {
  return {
    type: ActionTypes.SINGLE_PRODUCT,
    payload: product,
  };
};
export const AddtoCartProducts = (product) => {
  return {
    type: ActionTypes.ADDTOCART,
    payload: product,
  };
};
export const Fetchusers = (uservalues) => {
  console.log("Pass values", uservalues);
  return {
    type: ActionTypes.Userfetch,
    payload: uservalues,
  };
};
export const Productsretrive = (productsvalues) => {
  console.log("Pass values", productsvalues);
  return {
    type: ActionTypes.Productes,
    payload: productsvalues,
  };
};
export const Category = (categoryvalues) => {
  return {
    type: ActionTypes.Category,
    payload: categoryvalues,
  };
};
export const Brand = (Branddata) => {
  return {
    type: ActionTypes.Brand,
    payload: Branddata,
  };
};

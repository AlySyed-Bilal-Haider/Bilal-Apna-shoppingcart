import { ActionTypes } from "../contants/Actions-type";
const initialState = [];
export const productReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionTypes.SELECTED_PRODUCT:
      const newproducts = actions.payload;
      state = [...newproducts];
      return state;
    default:
      return state;
  }
};

export const ProductsDetails = (state = [], actions) => {
  switch (actions.type) {
    case ActionTypes.SINGLE_PRODUCT:
      const products = actions.payload;
      state = [{ ...products }];
      return state;
    default:
      return state;
  }
};
const Cartinit = [];
export const AddtoCartProductsreducer = (state = Cartinit, actions) => {
  switch (actions.type) {
    //add to cart
    case ActionTypes.ADDTOCART:
      const cartproducts = actions.payload;
      state = [...state, { ...cartproducts }];
      return state;
    //remove to cart
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      const productID = actions.payload;
      const newstate = [...state];
      newstate.splice(
        newstate.findIndex((v) => v.id === productID),
        1
      );
      return newstate;
    default:
      return state;
  }
};
const userdetails = [];
export const UserReducer = (state = userdetails, action) => {
  switch (action.type) {
    case ActionTypes.Userfetch:
      state = [...action.payload];
      return state;
    default:
      return state;
  }
};

const Products = [];
export const Productsretrive = (state = Products, action) => {
  switch (action.type) {
    case ActionTypes.Productes:
      state = [...action.payload];
      return state;
    default:
      return state;
  }
};
const Category = [];
export const Categoryreducer = (state = Category, action) => {
  switch (action.type) {
    case ActionTypes.Category:
      state = [...action.payload];
      return state;
    default:
      return state;
  }
};
const Brand = [];
export const Brandreducer = (state = Brand, action) => {
  switch (action.type) {
    case ActionTypes.Brand:
      state = [...action.payload];
      return state;
    default:
      return state;
  }
};

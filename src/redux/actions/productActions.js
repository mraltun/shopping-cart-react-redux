import { ActionTypes } from "../constants/actionTypes";
import fakeStoreApi from "../../apis/fakeStoreApi";

// We need to return plain JS Object so we can't make parent function async but the returning one. We are using thunk middleware.
export const fetchProducts = (products) => {
  return async function (dispatch, getState) {
    const response = await fakeStoreApi("/products");

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

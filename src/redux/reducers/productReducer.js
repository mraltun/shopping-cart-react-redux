import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "MrAltun",
      category: "Developer",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};

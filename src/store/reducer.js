import axios from "axios";
import { NEW_API, ADD_CART } from "./types";

const initialState = {
  api: [],
  cartNumber: [],
};

export const cartAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CART,
    cartData: data,
  });
};

export function apiAction() {
  return async (disptach) => {
    const getJson = await axios("https://jsonplaceholder.typicode.com/photos");

    const resData = getJson.data;

    disptach({
      type: NEW_API,
      data: resData,
    });
  };
}

function nextReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_API:
      //console.log("resData -->>", action.data);
      return {
        ...state,
        api: action.data,
      };
    case ADD_CART:
      const dataState = [...state.cartNumber, action.cartData];
      return { ...state, cartNumber: dataState };
    default:
      return state;
  }
}

export default nextReducer;

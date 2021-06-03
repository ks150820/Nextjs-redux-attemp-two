import { createWrapper } from "next-redux-wrapper";
import store from "./RootReducer/store";

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

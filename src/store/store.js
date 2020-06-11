import { createStore, combineReducers } from "redux";
import CartReducer from "./reducer";

const allReducers = combineReducers({
  cart: CartReducer,
});

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default myStore;

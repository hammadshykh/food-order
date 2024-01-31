import { combineReducers } from "redux";
// import cartReducer from "./cartReducer";
import cartFirestore from "./cartFirestore";
import menuFirestore from "./menuFirestore";
import orderFirestore from "./PayOrder";
import categoryFirestore from "./categoryFirestore";

const rootReducer = combineReducers({
  // cart: cartReducer,
  cartStore: cartFirestore,
  menuStore: menuFirestore,
  orderStore: orderFirestore,
  categoryStore: categoryFirestore,
});

export default rootReducer;

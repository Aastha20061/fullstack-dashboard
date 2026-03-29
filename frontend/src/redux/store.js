import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : { items: [] };
  } catch {
    return { items: [] };
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  preloadedState: {
    cart: loadCart()
  }
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      "cart",
      JSON.stringify(store.getState().cart)
    );
  } catch (err) {
    console.log(err);
  }
});

export default store;
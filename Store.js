import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlices";

export const Store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

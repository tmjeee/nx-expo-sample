import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import productsReducer from "./reducers/productsReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  }
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;

export default store;

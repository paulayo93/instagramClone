import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducers from "./product.reducers";
import { productApi } from "./product.effects";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  product: productReducers,
  [productApi.reducerPath]: productApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(productApi.middleware),
});

export default store;

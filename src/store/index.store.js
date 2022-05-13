import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";

import employes from "./employes.store";

const reducers = combineReducers({
  employes,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["employes"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export default store;

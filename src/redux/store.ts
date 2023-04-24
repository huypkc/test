import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

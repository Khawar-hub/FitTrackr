import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { configSliceReducer } from "./slices/config";
import { userSliceReducer } from "./slices/user";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import EncryptedStorage from "react-native-encrypted-storage";
import { workoutSliceReducer } from "./slices/workouts";
import { productsApi } from "~rtk/get-workouts-API";
const persistConfig = {
  key: "root",
  storage: EncryptedStorage,
  whitelist: ["user"], // List of reducers to persist (add 'user')
};
const rootReducer = combineReducers({
  user: userSliceReducer,
  config: configSliceReducer,
  workout: workoutSliceReducer,
  [productsApi.reducerPath]: productsApi.reducer,

});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
});
export const persistor = persistStore(store);

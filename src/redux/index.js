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
const persistConfig = {
  key: "root",
  storage: EncryptedStorage,
  whitelist: ["user"], // List of reducers to persist (add 'user')
};
const rootReducer = combineReducers({
  user: userSliceReducer,
  config: configSliceReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

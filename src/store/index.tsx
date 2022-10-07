import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";

import { store } from "../index";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import characterSlice from "./charachterSlice";

export function configureAppStore() {
  const enhancers = [] as StoreEnhancer[];

  const store = configureStore({
    reducer: {
      store: characterSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
    enhancers,
  });

  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

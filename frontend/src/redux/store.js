import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice"
import applicationSlice from "./applicationSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    job:jobSlice,
    company:companySlice,
    application:applicationSlice
  },
});
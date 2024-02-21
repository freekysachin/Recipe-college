import { configureStore } from "@reduxjs/toolkit";
import isLoginReducer from "../slices/loginSlice";

export const store = configureStore({
    reducer: isLoginReducer
});
import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "./reducers/toursReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
    devTools: true,
    reducer: {
        tour: toursReducer,
        user: userReducer
    },
})
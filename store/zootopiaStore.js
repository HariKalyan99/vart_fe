import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/AuthenticationSlices/AuthSlice.js'

export const zootopiaStore = configureStore({
    reducer: {
        auth: authReducer,
    }
})


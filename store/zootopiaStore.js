import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/AuthenticationSlices/AuthSlice.js'
import crudReducer from '../slices/CRUDSlices/CrudOperationSlice.js'



export const zootopiaStore = configureStore({
    reducer: {
        auth: authReducer,
        crud: crudReducer,
    }
})


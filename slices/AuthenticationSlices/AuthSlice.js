import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../backend/config';


const backendConfig = config.backend;

const initialState = {
    registrationResponse: {},
    registrationPending: false,
    registrationError: false
}


export const authRegisterNew = createAsyncThunk("auth/register", async(registerDetails) => {
    try {
        const {data} = await axios.post(`${backendConfig.endpoint}/auth/signup`, registerDetails, {
            headers: {
                "Content-Type": "application/json",
                "appvalidationtoken": `${backendConfig.headercontract}`
            },
        })
        return data;
    } catch (error) {
        return error.response.data;
    }
})


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(authRegisterNew.pending, (state) => {
            state.registrationPending = true,
            state.registrationError = false
        }).addCase(authRegisterNew.fulfilled, (state,action) => {
            state.registrationResponse = action.payload,
            state.registrationPending = false,
            state.registrationError = false
        }).addCase(authRegisterNew.rejected, (state) => {
            state.registrationPending = false,
            state.registrationError = true
        })
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../backend/config";
import { Slide, toast } from "react-toastify";
import Cookies from 'js-cookie'

const backendConfig = config.backend;
const initialState = {
  registrationResponse: {},
  registrationPending: false,
  loginResponse: {},
  loginPending: false,
  logoutResponse: {},
  logoutPending: false,
};

export const authRegisterNew = createAsyncThunk(
  "auth/register",
  async (registerDetails) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth/signup",
        registerDetails,
        {
          headers: {
            "Content-Type": "application/json",
            appvalidationtoken: `${backendConfig.headercontract}`,
          },
        }
      );
      if (data.status === "success") {
        toast.success(`${data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      }
      return data;
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        toast.error(`${message}`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      } else {
        toast.error(`Unknown error occurred`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
    }
  }
);

export const authLogin = createAsyncThunk(
  "auth/login",
  async (loginDetails) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth/login",
        loginDetails,
        {
          headers: {
            "Content-Type": "application/json",
            appvalidationtoken: `${backendConfig.headercontract}`,
          },
        }
      );
      if (data.status === "success") {
        toast.success(`${data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      }else{
        toast.warning(`${data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        })
      }
      return data;
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        toast.error(`${message}`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      } else {
        toast.error(`Unknown error occurred`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
    }
  }
);

export const authLogout = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      const token = Cookies.get('jwt');
      console.log(token)
      const { data } = await axios.get(
        "/api/v1/auth/logout",
        {
          headers: {
            "Content-Type": "application/json",
            appvalidationtoken: `${backendConfig.headercontract}`,
            "Authorization" : `Bearer ${token}`,  
          },
        }
      );
      if (data.status === "success") {
        toast.success(`${data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      }else{
        toast.warning(`${data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        })
      }
      return data;
    } catch (error) {
      if(error.response.data?.error){
        toast.error(`${error.response.data?.error}`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }else if (error.response) {
        const { message } = error.response.data;
        console.log(error)
        toast.error(`${message}`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }else {
        toast.error(`Unknown error occurred`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegistrationResponse: (state) => {
      state.registrationResponse = {};
      state.registrationPending = false;
    },
    resetLoginResponse: (state) => {
      state.loginResponse = {};
      state.loginPending = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRegisterNew.pending, (state) => {
        state.registrationPending = true;
      })
      .addCase(authRegisterNew.fulfilled, (state, action) => {
        state.registrationResponse = action.payload;
        state.registrationPending = false;
      })
      .addCase(authRegisterNew.rejected, (state) => {
        state.registrationPending = false;
      });

    builder
      .addCase(authLogin.pending, (state) => {
        state.loginPending = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loginResponse = action.payload;
        state.loginPending = false;
      })
      .addCase(authLogin.rejected, (state) => {
        state.loginPending = false;
      });

      
    builder
    .addCase(authLogout.pending, (state) => {
      state.logoutPending = true;
    })
    .addCase(authLogout.fulfilled, (state, action) => {
      state.logoutResponse = action.payload;
      state.logoutPending = false;
    })
    .addCase(authLogout.rejected, (state) => {
      state.logoutPending = false;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

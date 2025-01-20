// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { config } from "../../backend/config";
// import { Slide, toast } from "react-toastify";
// import Cookies from 'js-cookie'

// const backendConfig = config.backend;
// const initialState = {
//   registrationResponse: {},
//   registrationPending: false,
//   loginResponse: {},
//   loginPending: false,
//   logoutResponse: {},
//   logoutPending: false,
//   forgotPasswordMail: {},
//   forgotPasswordEmailPending: false,
//   resetPasswordResponse: {},
//   resetPasswordPending: false,
// };

// export const authRegisterNew = createAsyncThunk(
//   "auth/register",
//   async (registerDetails) => {
//     try {
//       const { data } = await axios.post(
//         "/api/v1/auth/signup",
//         registerDetails,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             appvalidationtoken: `${backendConfig.headercontract}`,
//           },
//         }
//       );
//       if (data.status === "success") {
//         toast.success(`${data.message}`, {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Slide,
//         });
//       }
//       return data;
//     } catch (error) {
//       if (error.response) {
//         const { message } = error.response.data;
//         toast.error(`${message}`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       } else {
//         toast.error(`Unknown error occurred`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       }
//     }
//   }
// );

// export const authLogin = createAsyncThunk(
//   "auth/login",
//   async (loginDetails) => {
//     try {
//       const { data } = await axios.post(
//         "/api/v1/auth/login",
//         loginDetails,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             appvalidationtoken: `${backendConfig.headercontract}`,
//           },
//         }
//       );
//       if (data.status === "success") {
//         toast.success(`${data.message}`, {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Slide,
//         });
//       }else{
//         toast.warning(`${data.message}`, {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Slide,
//         })
//       }
//       return data;
//     } catch (error) {
//       if (error.response) {
//         const { message } = error.response.data;
//         toast.error(`${message}`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       } else {
//         toast.error(`Unknown error occurred`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       }
//     }
//   }
// );

// export const authLogout = createAsyncThunk(
//   "auth/logout",
//   async () => {
//     try {
//       const token = Cookies.get('jwt');
//       const { data } = await axios.get(
//         "/api/v1/auth/logout",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             appvalidationtoken: `${backendConfig.headercontract}`,
//             "Authorization" : `Bearer ${token}`,
//           },
//         }
//       );
//       if (data.status === "success") {
//         Cookies.remove("jwt");
//         toast.success(`${data.message}`, {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Slide,
//         });
//       }else{
//         toast.warning(`${data.message}`, {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Slide,
//         })
//       }
//       return data;
//     } catch (error) {
//       if(error.response.data?.error){
//         toast.error(`${error.response.data?.error}`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       }else if (error.response) {
//         const { message } = error.response.data;
//         console.log(error)
//         toast.error(`${message}`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       }else {
//         toast.error(`Unknown error occurred`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       }
//     }
//   }
// );

// export const forgotPasswordResponse = createAsyncThunk(
//   "auth/forgotpwd",
//   async (email) => {
//     try {
//       const {data} = await axios.post("/api/v1/auth/forgotpassword", {email}, {
//         headers: {
//           "Content-Type": "application/json",
//           appvalidationtoken: `${backendConfig.headercontract}`,
//         },
//       });
//       if (data.status === "success") {
//         toast.success(`${data.message}`, {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Slide,
//         });
//       }
//       return data;
//     } catch (error) {
//       if (error.response) {
//         const { message } = error.response.data;
//         toast.error(`${message}`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       } else {
//         toast.error(`Unknown error occurred`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       }
//     }
//   }
// );

// export const authResetPassword = createAsyncThunk(
//   "auth/resetpwd",
//   async (resetDetails) => {
//     try {
//       const {data} = await axios.post("/api/v1/auth/resetpassword", resetDetails, {
//         headers: {
//           "Content-Type": "application/json",
//           appvalidationtoken: `${backendConfig.headercontract}`,
//         },
//       });
//       if (data.status === "success") {
//         toast.success(`${data.message}`, {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Slide,
//         });
//       }
//       return data;
//     } catch (error) {
//       if (error.response) {
//         const { message } = error.response.data;
//         toast.error(`${message}`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       } else {
//         toast.error(`Unknown error occurred`, {
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Slide,
//         });
//       }
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     resetRegistrationResponse: (state) => {
//       state.registrationResponse = {};
//       state.registrationPending = false;
//     },
//     resetLoginResponse: (state) => {
//       state.loginResponse = {};
//       state.loginPending = false;
//     },
//     resetLogoutResponse: (state) => {
//       state.logoutResponse = {};
//       state.logoutPending = false;
//     },
//     resetPasswordEmailResponse: (state) => {
//       state.forgotPasswordMail = {};
//       state.forgotPasswordEmailPending = false;
//     },
//     resetForgotPasswordResponse: (state) => {
//       state.resetPasswordResponse = {};
//       state.resetPasswordPending = false;
//     }

//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(authRegisterNew.pending, (state) => {
//         state.registrationPending = true;
//       })
//       .addCase(authRegisterNew.fulfilled, (state, action) => {
//         state.registrationResponse = action.payload;
//         state.registrationPending = false;
//       })
//       .addCase(authRegisterNew.rejected, (state) => {
//         state.registrationPending = false;
//       });

//     builder
//       .addCase(authLogin.pending, (state) => {
//         state.loginPending = true;
//       })
//       .addCase(authLogin.fulfilled, (state, action) => {
//         state.loginResponse = action.payload;
//         state.loginPending = false;
//       })
//       .addCase(authLogin.rejected, (state) => {
//         state.loginPending = false;
//       });

//     builder
//     .addCase(authLogout.pending, (state) => {
//       state.logoutPending = true;
//     })
//     .addCase(authLogout.fulfilled, (state, action) => {
//       state.logoutResponse = action.payload;
//       state.logoutPending = false;
//     })
//     .addCase(authLogout.rejected, (state) => {
//       state.logoutPending = false;
//     });

// // forgot-pwt
//     builder
//     .addCase(forgotPasswordResponse.pending, (state) => {
//       state.forgotPasswordEmailPending = true;
//     })
//     .addCase(forgotPasswordResponse.fulfilled, (state, action) => {
//       state.forgotPasswordMail = action.payload;
//       state.forgotPasswordEmailPending = false;
//     })
//     .addCase(forgotPasswordResponse.rejected, (state) => {
//       state.forgotPasswordEmailPending = false;
//     });
// // reset-pwd
//     builder
//     .addCase(authResetPassword.pending, (state) => {
//       state.resetPasswordPending = true;
//     })
//     .addCase(authResetPassword.fulfilled, (state, action) => {
//       state.resetPasswordResponse = action.payload;
//       state.resetPasswordPending = false;
//     })
//     .addCase(authResetPassword.rejected, (state) => {
//       state.resetPasswordResponse = false;
//     });
//   },
// });

// export const authActions = authSlice.actions;
// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../backend/config";
import Cookies from "js-cookie";
import { handleError, showToast } from "../../helpers/helperFunction";
import { getList } from "../CRUDSlices/CrudOperationSlice";

const backendConfig = config.backend;
const initialState = {
  registrationResponse: {},
  registrationPending: false,
  loginResponse: {},
  loginPending: false,
  logoutResponse: {},
  logoutPending: false,
  forgotPasswordMail: {},
  forgotPasswordEmailPending: false,
  resetPasswordResponse: {},
  resetPasswordPending: false,
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
        showToast(data.message);
      }
      return data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const authLogin = createAsyncThunk(
  "auth/login",
  async (loginDetails, {dispatch}) => {
    try {
      const { data } = await axios.post("/api/v1/auth/login", loginDetails, {
        headers: {
          "Content-Type": "application/json",
          appvalidationtoken: `${backendConfig.headercontract}`,
        },
      });
      if (data.status === "success") {
        // const listData = await dispatch(getList());
        // console.log(listData)
        showToast(data.message);
      } else {
        showToast(data.message, "warning");
      }
      return data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const authLogout = createAsyncThunk("auth/logout", async () => {
  try {
    const token = Cookies.get("jwt");
    const { data } = await axios.get("/api/v1/auth/logout", {
      headers: {
        "Content-Type": "application/json",
        appvalidationtoken: `${backendConfig.headercontract}`,
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.status === "success") {
      showToast(data.message);
      Cookies.remove("jwt");
    } else {
      showToast(data.message, "warning");
    }
    return data;
  } catch (error) {
    handleError(error);
  }
});

export const forgotPasswordResponse = createAsyncThunk(
  "auth/forgotpwd",
  async (email) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth/forgotpassword",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            appvalidationtoken: `${backendConfig.headercontract}`,
          },
        }
      );
      if (data.status === "success") {
        showToast(data.message);
      }
      return data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const authResetPassword = createAsyncThunk(
  "auth/resetpwd",
  async (resetDetails) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth/resetpassword",
        resetDetails,
        {
          headers: {
            "Content-Type": "application/json",
            appvalidationtoken: `${backendConfig.headercontract}`,
          },
        }
      );
      if (data.status === "success") {
        showToast(data.message);
      }
      return data;
    } catch (error) {
      handleError(error);
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
    },
    resetLogoutResponse: (state) => {
      state.logoutResponse = {};
      state.logoutPending = false;
    },
    resetPasswordEmailResponse: (state) => {
      state.forgotPasswordMail = {};
      state.forgotPasswordEmailPending = false;
    },
    resetForgotPasswordResponse: (state) => {
      state.resetPasswordResponse = {};
      state.resetPasswordPending = false;
    },
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

    builder
      .addCase(forgotPasswordResponse.pending, (state) => {
        state.forgotPasswordEmailPending = true;
      })
      .addCase(forgotPasswordResponse.fulfilled, (state, action) => {
        state.forgotPasswordMail = action.payload;
        state.forgotPasswordEmailPending = false;
      })
      .addCase(forgotPasswordResponse.rejected, (state) => {
        state.forgotPasswordEmailPending = false;
      });

    builder
      .addCase(authResetPassword.pending, (state) => {
        state.resetPasswordPending = true;
      })
      .addCase(authResetPassword.fulfilled, (state, action) => {
        state.resetPasswordResponse = action.payload;
        state.resetPasswordPending = false;
      })
      .addCase(authResetPassword.rejected, (state) => {
        state.resetPasswordResponse = false;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

import {createSlice } from "@reduxjs/toolkit";
import { registerNewAnimal } from "./signupNewAnimal";
import { animalLogin } from "./loginAnimal";
import { animalLogout } from "./logoutAnimal";
import { forgotPasswordResponse } from "./forgotPassword";
import { animalResetPassword } from "./resetPassword";

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


const animalSlice = createSlice({
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
      .addCase(registerNewAnimal.pending, (state) => {
        state.registrationPending = true;
      })
      .addCase(registerNewAnimal.fulfilled, (state, action) => {
        state.registrationResponse = action.payload;
        state.registrationPending = false;
      })
      .addCase(registerNewAnimal.rejected, (state) => {
        state.registrationPending = false;
      });

    builder
      .addCase(animalLogin.pending, (state) => {
        state.loginPending = true;
      })
      .addCase(animalLogin.fulfilled, (state, action) => {
        state.loginResponse = action.payload;
        state.loginPending = false;
      })
      .addCase(animalLogin.rejected, (state) => {
        state.loginPending = false;
      });

    builder
      .addCase(animalLogout.pending, (state) => {
        state.logoutPending = true;
      })
      .addCase(animalLogout.fulfilled, (state, action) => {
        state.logoutResponse = action.payload;
        state.logoutPending = false;
      })
      .addCase(animalLogout.rejected, (state) => {
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
      .addCase(animalResetPassword.pending, (state) => {
        state.resetPasswordPending = true;
      })
      .addCase(animalResetPassword.fulfilled, (state, action) => {
        state.resetPasswordResponse = action.payload;
        state.resetPasswordPending = false;
      })
      .addCase(animalResetPassword.rejected, (state) => {
        state.resetPasswordResponse = false;
      });
  },
});

export const authActions = animalSlice.actions;
export default animalSlice.reducer;

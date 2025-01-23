import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import axios from "axios";
import { handleError, showToast } from "../../errorhandling/handleErrors";

const backendConfig = config.backend;

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

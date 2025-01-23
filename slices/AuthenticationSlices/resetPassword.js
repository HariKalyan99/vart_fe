import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import axios from "axios";
import { handleError, showToast } from "../../errorhandling/handleErrors";

const backendConfig = config.backend;

export const animalResetPassword = createAsyncThunk(
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

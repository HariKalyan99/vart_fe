import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import axios from "axios";
import { handleError, showToast } from "../../errorhandling/handleErrors";

const backendConfig = config.backend;

export const animalLogin = createAsyncThunk(
    "auth/login",
    async (loginDetails) => {
      try {
        const { data } = await axios.post("/api/v1/auth/login", loginDetails, {
          headers: {
            "Content-Type": "application/json",
            appvalidationtoken: `${backendConfig.headercontract}`,
          },
        });
        if (data.status === "success") {
          localStorage.setItem("data", JSON.stringify(data));
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
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import Cookies from "js-cookie";
import axios from "axios";
import { handleError, showToast } from "../../errorhandling/handleErrors";

const backendConfig = config.backend;

export const animalLogout = createAsyncThunk("auth/logout", async () => {
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
      localStorage.clear();
      Cookies.remove("jwt");
    } else {
      showToast(data.message, "warning");
    }
    return data;
  } catch (error) {
    handleError(error);
  }
});
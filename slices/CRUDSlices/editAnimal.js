import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import Cookies from "js-cookie";
import axios from "axios";
import { handleError, showToast } from "../../errorhandling/handleErrors";

const backendConfig = config.backend;

export const editAnimal = createAsyncThunk(
  "editAnimal/edit",
  async (editedInduvidualData) => {
    try {
      const token = Cookies.get("jwt");
      const { data } = await axios.put(
        `/api/v1/animals/animaledit/${editedInduvidualData.id}`,
        editedInduvidualData.body,
        {
          headers: {
            "Content-Type": "application/json",
            appvalidationtoken: `${backendConfig.headercontract}`,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.status === "success") {
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
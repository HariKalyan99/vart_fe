import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import Cookies from "js-cookie";
import axios from "axios";
import { handleError, showToast } from "../../errorhandling/handleErrors";

const backendConfig = config.backend;

export const deleteAnimal = createAsyncThunk(
  "deleteAnimal/remove",
  async (animalId) => {
    try {
      console.log(animalId);
      const token = Cookies.get("jwt");
      const { data } = await axios.delete(
        `/api/v1/animals/animalremove/${animalId}`,
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
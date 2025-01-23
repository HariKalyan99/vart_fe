import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config";
import Cookies from "js-cookie";
import axios from "axios";
import { handleError } from "../../errorhandling/handleErrors";

const backendConfig = config.backend;

export const getAnimalList = createAsyncThunk("allAnimal/list", async () => {
    try {
      const token = Cookies.get("jwt");
      const { data } = await axios.get("/api/v1/animals/animalslist", {
        headers: {
          "Content-Type": "application/json",
          appvalidationtoken: `${backendConfig.headercontract}`,
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  });
  
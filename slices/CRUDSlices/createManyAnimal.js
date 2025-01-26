import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../configuration/config"; 
import Cookies from "js-cookie";
import axios from "axios";
import { handleError, showToast } from "../../errorhandling/handleErrors";  
const backendConfig = config.backend;  

export const uploadCsvAnimals = createAsyncThunk(
  'animals/uploadCsv',
  async (file) => {
    const formData = new FormData();
    formData.append('csvfile', file);  

    try {
      const token = Cookies.get("jwt"); 
      const { data } = await axios.post(
        "/api/v1/animals/manyanimals", 
        formData,  
        {
          headers: {
            "Content-Type": "multipart/form-data",  
            appvalidationtoken: `${backendConfig.headercontract}`, 
            Authorization: `Bearer ${token}`,  
          },
        }
      );
      if (data.status === "success" || data.status === "error") {
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


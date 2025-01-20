import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { config } from "../../backend/config";
import { handleError, showToast } from "../../helpers/helperFunction";
import Cookies from "js-cookie";
import axios from "axios";


const backendConfig = config.backend;

const initialState = {
    listOfInduviduals: {},
    listOfInduvidualsPending: false,

    createInduvidual: {},
    createInduvidualPending: false,

    deleteInduvidual: {},
    deleteInduvidualPending: false,

    editInduvidual: {},
    editInduvidualPending: false
}

export const getList = createAsyncThunk("induviduals/list", async () => {
    try {
      const token = Cookies.get("jwt");
      const {data} = await axios.get("/api/v1/animals/animalslist", {
        headers: {
          "Content-Type": "application/json",
          appvalidationtoken: `${backendConfig.headercontract}`,
          Authorization: `Bearer ${token}`,
        },
      });
      // if (data.status === "success") {
      //   showToast(data.message);
      // } else {
      //   showToast(data.message, "warning");
      // }
      return data;
    } catch (error) {
      handleError(error);
    }
  });


  export const createOne = createAsyncThunk("induviduals/create", async (newInduvidualData) => {
    try {
      const token = Cookies.get("jwt");
      const { data } = await axios.post("/api/v1/animals/animalcreate", newInduvidualData, {
        headers: {
          "Content-Type": "application/json",
          appvalidationtoken: `${backendConfig.headercontract}`,
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status === "success") {
        showToast(data.message);
      } else {
        showToast(data.message, "warning");
      }
      return data;
    } catch (error) {
      handleError(error);
    }
  });



  export const deleteOne = createAsyncThunk("induviduals/remove", async (id) => {
    try {
      const token = Cookies.get("jwt");
      const { data } = await axios.delete(`/api/v1/animals/animalremove/${id}`, {
        headers: {
          "Content-Type": "application/json",
          appvalidationtoken: `${backendConfig.headercontract}`,
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status === "success") {
        showToast(data.message);
      } else {
        showToast(data.message, "warning");
      }
      return data;
    } catch (error) {
      handleError(error);
    }
  });


  export const editOne = createAsyncThunk("induviduals/edit", async (editedInduvidualData) => {
    try {
      const token = Cookies.get("jwt");
      const { data } = await axios.put("/api/v1/animals/animaledit", editedInduvidualData, {
        headers: {
          "Content-Type": "application/json",
          appvalidationtoken: `${backendConfig.headercontract}`,
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status === "success") {
        showToast(data.message);
      } else {
        showToast(data.message, "warning");
      }
      return data;
    } catch (error) {
      handleError(error);
    }
  });




const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(getList.pending, (state) => {
          state.listOfInduvidualsPending = true;
        })
        .addCase(getList.fulfilled, (state, action) => {
          state.listOfInduviduals = action.payload;
          state.listOfInduvidualsPending = false;
        })
        .addCase(getList.rejected, (state) => {
          state.listOfInduvidualsPending = false;
        });
  
      builder
        .addCase(createOne.pending, (state) => {
          state.createInduvidualPending = true;
        })
        .addCase(createOne.fulfilled, (state, action) => {
          state.createInduvidual = action.payload,
          state.createInduvidualPending = false;
        })
        .addCase(createOne.rejected, (state) => {
          state.createInduvidualPending = false;
        });
  
      builder
        .addCase(deleteOne.pending, (state) => {
          state.deleteInduvidualPending = true;
        })
        .addCase(deleteOne.fulfilled, (state, action) => {
          state.deleteInduvidual = action.payload;
          state.deleteInduvidualPending = false;
        })
        .addCase(deleteOne.rejected, (state) => {
          state.deleteInduvidualPending = false;
        });
  
      builder
        .addCase(editOne.pending, (state) => {
          state.editInduvidualPending = true;
        })
        .addCase(editOne.fulfilled, (state, action) => {
          state.editInduvidual = action.payload;
          state.editInduvidualPending = false;
        })
        .addCase(editOne.rejected, (state) => {
          state.editInduvidualPending = false;
        });
    },
  });
  

  export const crudActions = crudSlice.actions;
  export default crudSlice.reducer;
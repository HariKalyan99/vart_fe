import { createSlice } from "@reduxjs/toolkit";
import { getAnimalList } from "./getAnimalList";
import { createNewAnimal } from "./createAnimal";
import { deleteAnimal } from "./deleteAnimal";
import { editAnimal } from "./editAnimal";
import { getAnimalById } from "./getAnimalById";

const initialState = {
  listOfAnimalsResponse: {},
  listOfAnimalsPendingResponse: false,

  getOneAnimalResponse: {},
  getOneAnimalResponsePending: false,

  createAnimalResponse: {},
  createAnimalPendingResponse: false,

  deleteAnimalResponse: {},
  deleteAnimalPendingResponse: false,

  editAnimalResponse: {},
  editAnimalPendingResponse: false,
};

const animalOperationSlices = createSlice({
  name: "crud",
  initialState,
  reducers: {
    resetCreationResponse: (state) => {
      state.createAnimalResponse = {};
      state.createAnimalPending = false;
    },
    reseteditAnimalResponse: (state) => {
      state.editAnimalResponse = {};
      state.editAnimalPendingResponse = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimalList.pending, (state) => {
        state.listOfAnimalsPendingResponse = true;
      })
      .addCase(getAnimalList.fulfilled, (state, action) => {
        state.listOfAnimalsResponse = action.payload;
        state.listOfAnimalsPendingResponse = false;
      })
      .addCase(getAnimalList.rejected, (state) => {
        state.listOfAnimalsPendingResponse = false;
      });

    builder
      .addCase(createNewAnimal.pending, (state) => {
        state.createAnimalPendingResponse = true;
      })
      .addCase(createNewAnimal.fulfilled, (state, { payload }) => {
        state.createAnimalResponse = payload;
        state.createAnimalPendingResponse = false;
      })
      .addCase(createNewAnimal.rejected, (state) => {
        state.createAnimalPendingResponse = false;
      });

    builder
      .addCase(deleteAnimal.pending, (state) => {
        state.deleteAnimalPendingResponse = true;
      })
      .addCase(deleteAnimal.fulfilled, (state, action) => {
        state.deleteAnimalResponse = action.payload;
        state.deleteAnimalPendingResponse = false;
      })
      .addCase(deleteAnimal.rejected, (state) => {
        state.deleteAnimalPendingResponse = false;
      });

    builder
      .addCase(editAnimal.pending, (state) => {
        state.editAnimalPendingResponse = true;
      })
      .addCase(editAnimal.fulfilled, (state, action) => {
        state.editAnimalResponse = action.payload;
        state.editAnimalPendingResponse = false;
      })
      .addCase(editAnimal.rejected, (state) => {
        state.editAnimalPendingResponse = false;
      });

    builder
      .addCase(getAnimalById.pending, (state) => {
        state.getOneAnimalResponsePending = true;
      })
      .addCase(getAnimalById.fulfilled, (state, action) => {
        state.getOneAnimalResponse = action.payload;
        state.getOneAnimalResponsePending = false;
      })
      .addCase(getAnimalById.rejected, (state) => {
        state.getOneAnimalResponsePending = false;
      });
  },
});

export const crudActions = animalOperationSlices.actions;
export default animalOperationSlices.reducer;

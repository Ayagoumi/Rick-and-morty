import { createSlice } from "@reduxjs/toolkit";
import { initialStateType, Status } from "../@types/store";
import { RootState } from "./index";
import { getAllCharacters } from "./utils";

let initialState: initialStateType = {
  loading: Status.IDLE,
  characters: [],
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCharacters.pending, (state) => {
        state.loading = Status.LOADING;
      })
      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.characters = payload;
        state.loading = Status.SUCCESS;
      })
      .addCase(getAllCharacters.rejected, (state) => {
        state.loading = Status.FAIL;
      });
  },
});

// Select All Characters
export const getCharacters = (state: RootState) => state.store;

export default characterSlice.reducer;

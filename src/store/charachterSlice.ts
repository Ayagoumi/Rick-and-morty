import { createSlice } from "@reduxjs/toolkit";
import { initialStateType, Status } from "../@types/store";
import { RootState } from "./index";
import { getAllCharacters } from "./utils";

let initialState: initialStateType = {
  loading: Status.IDLE,
  characters: [],
  pagesCount: 0,
  charactersCount: 0,
  currentPage: 1,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setPagesCount(state, { payload }) {
      state.pagesCount = payload;
    },
    setCharactersCount(state, { payload }) {
      state.charactersCount = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
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
export const getCharacters = (state: RootState) => state.store.characters;
// Select Current Page
export const getCurrentPage = (state: RootState) => state.store.currentPage;
// Select All Page
export const getAllPages = (state: RootState) => state.store.pagesCount;

export const { setPagesCount, setCharactersCount, setCurrentPage } =
  characterSlice.actions;
export default characterSlice.reducer;

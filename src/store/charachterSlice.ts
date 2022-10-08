import { createSlice } from "@reduxjs/toolkit";
import { initialStateType, Status } from "../@types/store";
import { filterCharactersFromStore } from "../utils/fetchData";
import { RootState } from "./index";
import { getAllCharacters } from "./utils";

let initialState: initialStateType = {
  loading: Status.IDLE,
  characters: [],
  pagesCount: 0,
  allPageCount: 0,
  charactersCount: 0,
  currentPage: 1,
  gender: "Default",
  status: "Default",
  name: "",
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setGender(state, { payload }) {
      state.gender = payload;
    },
    setStatus(state, { payload }) {
      state.status = payload;
    },
    setName(state, { payload }) {
      state.name = payload;
    },
    setPagesCount(state, { payload }) {
      state.pagesCount = payload;
    },
    setAllPagesCount(state, { payload }) {
      state.allPageCount = payload;
    },
    setCharactersCount(state, { payload }) {
      state.charactersCount = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    filterCharacters(state, { payload: filter }) {
      filterCharactersFromStore(state, filter);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCharacters.pending, (state) => {
        state.loading = Status.LOADING;
      })
      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.filtredCharacters = payload;
        state.characters = payload;
        state.loading = Status.SUCCESS;
      })
      .addCase(getAllCharacters.rejected, (state) => {
        state.loading = Status.FAIL;
      });
  },
});

// Select All Characters
export const getCharacters = (state: RootState) =>
  state.store.filtredCharacters;
export const getAllCharactersFromStore = (state: RootState) =>
  state.store.characters;
// Select Current Page
export const getCurrentPage = (state: RootState) => state.store.currentPage;
// Select All Page
export const getAllPages = (state: RootState) => state.store.pagesCount;
// Select All Page
export const getAllPagesCount = (state: RootState) => state.store.allPageCount;

// Select Status
export const getStatus = (state: RootState) => state.store.status;

export const getName = (state: RootState) => state.store.name;

export const getGender = (state: RootState) => state.store.gender;

export const {
  setPagesCount,
  setAllPagesCount,
  setCharactersCount,
  setCurrentPage,
  filterCharacters,
  setGender,
  setName,
  setStatus,
} = characterSlice.actions;
export default characterSlice.reducer;

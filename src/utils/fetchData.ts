import { createAsyncThunk, current } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { characterType, initialStateType } from "../@types/store";
import { NUM_OF_CHARACTERS } from "../constants/store";
import { setCharactersCount, setPagesCount } from "../store/charachterSlice";

export const formatArray = (array: characterType[]) => {
  let formattedArray: characterType[][] = [];
  let tempArray: characterType[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i % NUM_OF_CHARACTERS === 0 && i !== 0) {
      formattedArray.push(tempArray);
      tempArray = [];
    }
    tempArray.push(array[i]);
  }
  formattedArray.push(tempArray);
  return formattedArray;
};

interface filterType {
  name: string;
  status: string;
  gender: string;
}

export const filterCharactersFromStore = (
  state: initialStateType,
  filter: filterType
) => {
  let spanState = current(state);
  if (spanState.characters && spanState.characters.length > 0) {
    let filtredCharacters: characterType[] = [];
    let charactersCopy = [...spanState.characters];
    charactersCopy.forEach((elem: characterType[]) => {
      let res: characterType[] = [];
      // eslint-disable-next-line array-callback-return
      res = elem?.filter((el: characterType) => {
        if (
          !filter.name ||
          (filter.name &&
            el.name.toLowerCase().includes(filter.name.toLowerCase()))
        ) {
          if (filter.status === "Default" && filter.gender !== "Default")
            return el.gender.toLowerCase() === filter.gender.toLowerCase();
          else if (filter.status !== "Default" && filter.gender === "Default")
            return el.status.toLowerCase() === filter.status.toLowerCase();
          else if (filter.status !== "Default" && filter.gender !== "Default")
            return (
              el.status.toLowerCase() === filter.status.toLowerCase() &&
              el.gender.toLowerCase() === filter.gender.toLowerCase()
            );
          return el;
        }
      });
      filtredCharacters.push(...res);
    });
    state.charactersCount = filtredCharacters.length;
    state.pagesCount = Math.floor(filtredCharacters.length / 20);
    state.filtredCharacters = formatArray(filtredCharacters);
  }
};

export const getAllCharacters = createAsyncThunk(
  "characters",
  async (_, thunkAPI) => {
    try {
      const { count: charactersCount, pages: pagesCount } = (
        await axios.get(`https://rickandmortyapi.com/api/character`)
      ).data.info;
      let concatCharactersIds = "1";
      thunkAPI.dispatch(setPagesCount(pagesCount));
      thunkAPI.dispatch(setCharactersCount(charactersCount));
      for (let i = 2; i <= charactersCount; i++) {
        concatCharactersIds += `,${i}`;
      }
      const characters = await axios.get(
        `https://rickandmortyapi.com/api/character/${concatCharactersIds}`
      );
      if (characters.data.length === 0) {
        return [];
      }
      return formatArray(characters.data);
    } catch (e) {
      let error = e as AxiosError;
      console.log(error.message);
    }
  }
);

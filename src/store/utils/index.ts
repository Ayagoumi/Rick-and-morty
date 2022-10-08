import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { characterType } from "../../@types/store";
import { NUM_OF_CHARACTERS } from "../../constants/store";
import { setCharactersCount, setPagesCount } from "../charachterSlice";

const formatArray = (array: characterType[]) => {
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

export const getAllCharacters = createAsyncThunk(
  "characters",
  async (_, thunkAPI) => {
    try {
      const { count: charactersCount, pages: pagesCount } = (
        await axios.get(`https://rickandmortyapi.com/api/character`)
      ).data.info;
      let concatCharactersIds = "1";
      // console.log(charactersCount, pagesCount);
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

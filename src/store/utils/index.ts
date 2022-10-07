import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { characterType } from "../../@types/store";
import { NUM_OF_CHARACTERS } from "../../constants/store";

const formatArray = (array: any[]) => {
  let formattedArray: characterType[] = [];
  let tempArray: any = [];

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

export const getAllCharacters = createAsyncThunk("characters", async () => {
  try {
    const charactersCount = (
      await axios.get(`https://rickandmortyapi.com/api/character`)
    ).data.info.count;
    let concatCharactersIds = "1";
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
});

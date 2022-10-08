export enum Status {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export interface originType {
  name: string;
  url: string;
}

export interface locationType extends originType {}

export interface characterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: originType;
  location: locationType;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface initialStateType {
  loading: Status;
  characters?: characterType[][];
  filtredCharacters?: characterType[][];
  pagesCount: number;
  allPageCount: number;
  charactersCount: number;
  currentPage: number;
  gender: string;
  status: string;
  name: string;
}

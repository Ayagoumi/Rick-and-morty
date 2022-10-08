import { parseInt } from "lodash";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { characterType } from "../@types/store";
import RNMCharacterDetail from "../components/RNM-components/RNMCharacterDetail";
import { NUM_OF_CHARACTERS } from "../constants/store";
import SecondaryLayout from "../layout/secondaryLayout";
import { useAppSelector } from "../store";
import { getCharacters, getAllPages } from "../store/charachterSlice";

export default function DetailsPage() {
  const location = useLocation();
  const [character, setCharacter] = useState<characterType>();
  const [error, setError] = useState(false);
  const characters = useAppSelector(getCharacters);
  const allPages = useAppSelector(getAllPages);
  useEffect(() => {
    const id = parseInt(location.pathname.split("/")[2]);
    let page = Math.floor((id - 1) / NUM_OF_CHARACTERS);

    if (page > allPages) setError(true);
    else setError(false);

    if (
      characters &&
      characters.length > 0 &&
      page >= 0 &&
      page <= allPages - 1
    ) {
      setCharacter(characters[page].find((elem) => elem.id === id));
    }
  }, [characters]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SecondaryLayout>
      <RNMCharacterDetail char={character} error={error} />
    </SecondaryLayout>
  );
}

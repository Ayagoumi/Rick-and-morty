import { parseInt } from "lodash";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { characterType } from "../@types/store";
import { NUM_OF_CHARACTERS } from "../constants/store";
import { useAppSelector } from "../store";
import { getAllPagesCount, getCharacters } from "../store/charachterSlice";
import RNMCharacterDetail from "../components/RNM-components/RNMCharacterDetail";
import SecondaryLayout from "../layout/SecondaryLayout";

export default function DetailsPage() {
  const location = useLocation();
  const [character, setCharacter] = useState<characterType>();
  const [error, setError] = useState(false);
  const characters = useAppSelector(getCharacters);
  const allPages = useAppSelector(getAllPagesCount);
  useEffect(() => {
    const id = parseInt(location.pathname.split("/")[2]);
    let page = Math.floor((id - 1) / NUM_OF_CHARACTERS);

    if (page > allPages) setError(true);
    else setError(false);

    if (characters && characters.length > 0 && page >= 0) {
      let p;
      let res: characterType | undefined;

      characters?.forEach((item) => {
        p = item.find((char) => char.id === id);
        if (p && !res) {
          res = p;
        }
      });

      setCharacter(res);
    }
  }, [characters]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SecondaryLayout>
      <RNMCharacterDetail char={character} error={error} />
    </SecondaryLayout>
  );
}

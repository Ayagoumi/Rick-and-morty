import { Box, Grid } from "@mui/material";
import RNMCard from "./RNMCard";
import RNMpagination from "./RNMpagination";
import { useAppSelector } from "../../store";
import { characterType } from "../../@types/store";
import { getCharacters, getCurrentPage } from "../../store/charachterSlice";

export default function RNMCards() {
  const filtredCharacters = useAppSelector(getCharacters);
  const currentPage = useAppSelector(getCurrentPage);
  return (
    <Box
      sx={{ m: "auto", display: "flex", justifyContent: "center", pb: "80px" }}
    >
      <Grid container spacing={3}>
        {filtredCharacters &&
          filtredCharacters[currentPage - 1]?.map((item: characterType) => (
            <RNMCard key={item.id} character={item} />
          ))}
      </Grid>
      <RNMpagination />
    </Box>
  );
}

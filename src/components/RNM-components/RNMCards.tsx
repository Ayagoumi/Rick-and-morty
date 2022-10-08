import { Box, Grid } from "@mui/material";
import RNMCard from "./RNMCard";
import RNMpagination from "./RNMpagination";
import { RootState, useAppSelector } from "../../store";
import { useSelector } from "react-redux";
import { characterType } from "../../@types/store";
import { getCurrentPage } from "../../store/charachterSlice";

export default function RNMCards() {
  const characters =
    useSelector((state: RootState) => state.store.characters) || [];
  const currentPage = useAppSelector(getCurrentPage);
  return (
    <Box
      sx={{ m: "auto", display: "flex", justifyContent: "center", pb: "80px" }}
    >
      <Grid container spacing={3}>
        {characters[currentPage - 1]?.map((item: characterType) => (
          <RNMCard key={item.id} character={item} />
        ))}
      </Grid>
      <RNMpagination />
    </Box>
  );
}

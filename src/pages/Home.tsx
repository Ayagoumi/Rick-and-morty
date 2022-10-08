import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { MContainer } from "../components/@material-extend/MContainer";
import RNMCards from "../components/RNM-components/RNMCards";
import { NAVBAR_HEIGHT } from "../constants/style";
import DefaultLayout from "../layout/DefaultLayout";
import Sidebar from "../layout/Sidebar";
import { useAppDispatch, useAppSelector } from "../store";
import {
  filterCharacters,
  getGender,
  getName,
  getStatus,
} from "../store/charachterSlice";
import { getAllCharacters } from "../store/utils";

export default function Home() {
  const [open, setOpen] = useState(false);
  const allCharacters = useAppSelector(getAllCharacters);
  const dispatch = useAppDispatch();
  const gender = useAppSelector(getGender);
  const status = useAppSelector(getStatus);
  const name = useAppSelector(getName);
  useEffect(() => {
    if (allCharacters.length > 0) {
      dispatch(
        filterCharacters({ name: name, status: status, gender: gender })
      );
    }
  }, [name, gender, status]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <DefaultLayout onOpenSidebar={() => setOpen(true)}>
      <Box sx={{ display: "flex", flex: 1, mt: NAVBAR_HEIGHT }}>
        <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        <Box
          sx={{ flexGrow: 1, overflow: "auto", minHeight: "100%", p: "15px" }}
        >
          <MContainer>
            <RNMCards />
          </MContainer>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

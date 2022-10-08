import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { NAVBAR_HEIGHT } from "../constants/style";
import ToTop from "../components/ToTop";
import { MContainer } from "../components/@material-extend/MContainer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <Navbar onOpenSidebar={() => setOpen(true)} />
      <Box sx={{ display: "flex", flex: 1, mt: NAVBAR_HEIGHT }}>
        <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        <Box
          sx={{ flexGrow: 1, overflow: "auto", minHeight: "100%", p: "15px" }}
        >
          <MContainer>{children}</MContainer>
        </Box>
      </Box>
      <ToTop />
    </Box>
  );
}

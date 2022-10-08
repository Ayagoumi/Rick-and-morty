import React from "react";
import { Box, Container } from "@mui/material";
import { NAVBAR_HEIGHT } from "../constants/style";
import DefaultLayout from "./DefaultLayout";

interface SecondaryLayoutProps {
  children: React.ReactNode;
}

export default function SecondaryLayout({ children }: SecondaryLayoutProps) {
  return (
    <DefaultLayout backBtn>
      <Box sx={{ display: "flex", flex: 1, mt: NAVBAR_HEIGHT }}>
        <Box sx={{ flexGrow: 1, overflow: "auto", minHeight: "100%", py: "15px" }}>
          <Container maxWidth="lg">{children}</Container>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

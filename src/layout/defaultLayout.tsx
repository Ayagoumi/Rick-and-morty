import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
  onOpenSidebar?: () => void;
  backBtn?: boolean;
}

export default function DefaultLayout({
  children,
  onOpenSidebar,
  backBtn,
}: DefaultLayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <Navbar onOpenSidebar={onOpenSidebar} backBtn={backBtn} />
      <>{children}</>
    </Box>
  );
}

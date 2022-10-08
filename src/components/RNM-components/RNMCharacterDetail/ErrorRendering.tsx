import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ErrorRenderingProps {
  children: ReactNode;
  error: boolean;
}

export default function ErrorRendering({
  children,
  error,
}: ErrorRenderingProps) {
  return (
    <>
      {error ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">404 Character not found</Typography>
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

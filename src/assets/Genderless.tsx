import { Box, BoxProps, useTheme } from "@mui/material";

export default function Female({ ...other }: BoxProps) {
  const theme = useTheme();
  const COMMON_GREY = theme.palette.divider;

  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke={COMMON_GREY}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="12" r="6"></circle>
        <path d="M7 12h11"></path>
      </svg>
    </Box>
  );
}

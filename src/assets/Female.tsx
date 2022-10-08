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
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="9" r="5" />
        <line x1="12" y1="14" x2="12" y2="21" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    </Box>
  );
}

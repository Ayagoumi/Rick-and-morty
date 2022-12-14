import { Box, BoxProps, useTheme } from "@mui/material";

export default function UpIcon({ ...other }: BoxProps) {
  const theme = useTheme();
  const COMMON_WHITE = theme.palette.common.white;

  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke={COMMON_WHITE}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="16" y1="9" x2="12" y2="5"></line>
        <line x1="8" y1="9" x2="12" y2="5"></line>
      </svg>
    </Box>
  );
}

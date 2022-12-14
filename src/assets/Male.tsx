import { Box, BoxProps, useTheme } from "@mui/material";

export default function Male({ ...other }: BoxProps) {
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
        <circle cx="10" cy="14" r="5" />
        <line x1="19" y1="5" x2="13.6" y2="10.4" />
        <line x1="19" y1="5" x2="14" y2="5" />
        <line x1="19" y1="5" x2="19" y2="10" />
      </svg>
    </Box>
  );
}

import { Theme } from "@mui/material/styles";

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 600px)": {
            maxWidth: "570px",
          },
          "@media (min-width: 900px)": {
            maxWidth: "590px",
          },
          "@media (min-width: 1200px)": {
            maxWidth: "890px",
          },
          "@media (min-width: 1536px)": {
            maxWidth: "1225px",
          },
          "@media (min-width: 1847px)": {
            maxWidth: "1535px",
          },
        },
      },
    },
  };
}

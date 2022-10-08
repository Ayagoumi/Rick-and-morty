import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

type MContainerProps = {
  children: ReactNode;
  style?: SxProps<Theme>;
};

export function MContainer({ children, style }: MContainerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        display: "block",
        paddingRight: "16px",
        paddingLeft: "16px",
        "@media (min-width: 600px)": {
          maxWidth: "570px",
          paddingLeft: "24px",
          paddingRight: "24px",
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
        ...style,
      }}
    >
      {children}
    </Box>
  );
}

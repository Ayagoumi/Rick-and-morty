import { BoxProps, Chip, useTheme } from "@mui/material";
import { ColorSchema } from "../../@types/theme";

type LabelColor =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

type LabelVariant = "filled" | "outlined";

interface LabelProps {
  label: string;
  color?: LabelColor;
  variant?: LabelVariant;
  sx?: BoxProps["sx"];
}

export default function Label({
  color = "default",
  variant = "filled",
  label,
  sx,
}: LabelProps) {
  const theme = useTheme();

  const styleFilled = (color: ColorSchema) => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
  });

  const styleOutlined = (color: ColorSchema) => ({
    color: theme.palette[color].main,
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette[color].main}`,
  });

  return (
    <Chip
      label={label}
      color={color}
      variant={variant}
      sx={{
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: theme.typography.fontFamily,
        height: "22px",
        minWidth: "22px",
        borderRadius: "8px",
        cursor: "default",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.grey[800],
        fontSize: theme.typography.pxToRem(12),
        backgroundColor: theme.palette.grey[300],
        ...(color !== "default"
          ? {
              ...(variant === "filled" && { ...styleFilled(color) }),
              ...(variant === "outlined" && { ...styleOutlined(color) }),
            }
          : {
              ...(variant === "outlined" && {
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.grey[500_32]}`,
              }),
            }),
        ...sx,
      }}
    />
  );
}

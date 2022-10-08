import { ReactNode } from "react";
import { Theme, useMediaQuery } from "@mui/material";

type MHiddenProps = {
  children: ReactNode;
  width:
    | "xsDown"
    | "smDown"
    | "mdDown"
    | "lgDown"
    | "xlDown"
    | "xsUp"
    | "smUp"
    | "mdUp"
    | "lgUp"
    | "xlUp";
};

export default function MHidden({ width, children }: MHiddenProps) {
  const hiddenUp = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
  const hiddenDown = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md")
  );

  if (width.includes("Down")) {
    return hiddenDown ? null : <>{children}</>;
  }

  if (width.includes("Up")) {
    return hiddenUp ? null : <>{children}</>;
  }

  return null;
}

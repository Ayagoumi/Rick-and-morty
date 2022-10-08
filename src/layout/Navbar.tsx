import {
  Box,
  alpha,
  Toolbar,
  useTheme,
  IconButton,
  AppBar,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import arrowIosBackFill from "@iconify/icons-eva/arrow-ios-back-fill";
import MHidden from "../components/@material-extend/MHidden";
import { NAVBAR_HEIGHT } from "../constants/style";
import { Link as RouterLink } from "react-router-dom";

type NavbarProps = {
  onOpenSidebar?: VoidFunction;
  backBtn?: boolean;
};

export default function Navbar({ onOpenSidebar, backBtn }: NavbarProps) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: theme.customShadows.z1,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
        backgroundColor: alpha(theme.palette.background.default, 0.72),
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
        height: NAVBAR_HEIGHT,
        justifyContent: "center",
      }}
    >
      <Toolbar>
        {!backBtn && (
          <MHidden width="lgUp">
            <IconButton onClick={onOpenSidebar} sx={{ color: "text.primary" }}>
              <Icon icon={menu2Fill} />
            </IconButton>
          </MHidden>
        )}
        {backBtn && (
          <RouterLink to="/">
            <Button
              color="inherit"
              startIcon={<Icon icon={arrowIosBackFill} />}
              sx={{ color: "text.primary", textAlign: "center" }}
            >
              Back
            </Button>
          </RouterLink>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          component="img"
          sx={{ height: { xs: 32, sm: 40, md: 48 } }}
          alt="rick&morty_Logo"
          src={`/assets/rickandmortylogo.svg`}
        />
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

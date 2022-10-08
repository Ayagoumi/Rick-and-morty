import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import MHidden from "../components/@material-extend/MHidden";
import MIconButton from "../components/@material-extend/MIconButton";
import GenderFilter from "../components/RNM-components/Filter/GenderFilter";
import SearchBar from "../components/RNM-components/Filter/SearchBar";
import StatusFilter from "../components/RNM-components/Filter/StatusFilter";
import {
  DRAWER_MAXWIDTH,
  DRAWER_MAXWIDTH_SM,
  DRAWER_WIDTH,
  DRAWER_WIDTH_SM,
  NAVBAR_HEIGHT,
} from "../constants/style";
import { Icon } from "@iconify/react";
import closeFill from "@iconify/icons-eva/close-fill";

type DashboardSidebarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
};

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
}: DashboardSidebarProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        width: DRAWER_WIDTH,
        maxWidth: DRAWER_MAXWIDTH,
        flex: 1,
        transition: theme.transitions.create("width", {
          duration: theme.transitions.duration.complex,
        }),
      }}
    >
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: {
              maxWidth: DRAWER_MAXWIDTH_SM,
              width: DRAWER_WIDTH_SM,
              p: "20px",
              py: "15px",
            },
          }}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 2, pr: 1, pl: 2.5 }}
          >
            <Typography variant="subtitle1">Filter Settings</Typography>
            <MIconButton onClick={onCloseSidebar}>
              <Icon icon={closeFill} width={20} height={20} />
            </MIconButton>
          </Stack>
          <Divider />
          <Stack spacing={3} sx={{ mt: 5 }}>
            <SearchBar />
            <StatusFilter />
            <GenderFilter />
          </Stack>
        </Drawer>
      </MHidden>
      <MHidden width="lgDown">
        <Drawer
          open
          variant="permanent"
          sx={{ width: "inherit" }}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              height: "100%",
              mt: NAVBAR_HEIGHT,
              [`& .MuiDrawer-paper`]: {
                position: "relative",
                width: DRAWER_WIDTH,
                height: "100%",
                boxSizing: "border-box",
              },
              p: "10px",
              py: "30px",
            },
          }}
        >
          <Stack spacing={3}>
            <Typography variant="subtitle1">Filter Settings</Typography>
          </Stack>
          <Divider sx={{ mt: 2, mb: 4 }} />
          <Stack spacing={3}>
            <SearchBar />
            <StatusFilter />
            <GenderFilter />
          </Stack>
        </Drawer>
      </MHidden>
    </Box>
  );
}

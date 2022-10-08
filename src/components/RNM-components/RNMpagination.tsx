import { Box, Pagination, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  getAllPages,
  getCurrentPage,
  setCurrentPage,
} from "../../store/charachterSlice";

export default function RNMpagination() {
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const allPages = useAppSelector(getAllPages);
  const currentPage = useAppSelector(getCurrentPage);
  const dispatch = useAppDispatch();
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        bottom: "0",
        justifyContent: "center",
        alignItems: "center",
        height: "160px",
        width: "100%",
        maxWidth: "1535px",
        backgroundColor: "#FFFFFF",
        background: "linear-gradient(180deg, #0000, #FFF 60%, #fff)",
        pt: "80px",
      }}
    >
      <Pagination
        onChange={handleChange}
        count={allPages}
        defaultPage={currentPage}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        color="primary"
        size={width <= theme.breakpoints.values.sm ? "small" : "large"}
        showFirstButton={currentPage === 1 ? false : true}
        showLastButton={currentPage === allPages ? false : true}
        sx={{
          "& .MuiPaginationItem-page": {
            border: "none",
          },
        }}
      />
    </Box>
  );
}

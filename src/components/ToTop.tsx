import { Box, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
import UpIcon from "../assets/UpIcon";

export default function ToTop() {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (ref.current) {
        if (scrollTop > 150) {
          ref.current.style.opacity = "1";
          ref.current.style.pointerEvents = "auto";
        } else {
          ref.current.style.opacity = "0.5";
          ref.current.style.pointerEvents = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      ref={ref}
      onClick={handleClick}
      style={{
        display: "block",
        position: "fixed",
        bottom: "70px",
        right: "20px",
        width: "45px",
        height: "45px",
        borderRadius: "8px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        cursor: "pointer",
        boxShadow: theme.customShadows.z24,
        transition: "all 0.3s ease",
        zIndex: 9999,
        opacity: 0.5,
        pointerEvents: "none",
        border: `1px solid ${theme.palette.primary.dark}`,
      }}
    >
      <UpIcon
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}

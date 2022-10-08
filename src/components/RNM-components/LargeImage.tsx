import { Box } from "@mui/material";

type LargeImageProps = {
  alt: string;
  src: string;
  status?: string;
};

export default function LargeImage({ alt, src, status }: LargeImageProps) {
  return (
    <Box
      sx={{
        zIndex: 0,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        maxHeight: "450px",
      }}
    >
      <Box sx={{ paddingTop: "100%" }}>
        <img
          alt={alt}
          src={src}
          style={{
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            position: "absolute",
            filter: status === "Dead" ? "grayscale(100%)" : "none",
            WebkitBackdropFilter:
              status === "Dead" ? "grayscale(100%)" : "none",
          }}
        />
      </Box>
    </Box>
  );
}

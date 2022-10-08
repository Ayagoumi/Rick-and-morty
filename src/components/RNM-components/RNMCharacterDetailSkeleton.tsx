import { Grid, Skeleton, Box } from "@mui/material";

export default function RNMCharacterDetailSkeleton() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={7}>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ paddingTop: "100%", borderRadius: 2 }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={5} sx={{ alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Skeleton variant="text" width={80} height={50} />
          <Skeleton variant="text" width={80} height={50} />
        </Box>
        <Skeleton variant="text" height={40} width="100%" />
        <Skeleton variant="text" height={40} width="100%" />
        <Skeleton variant="text" height={40} width="100%" />
        <Skeleton variant="text" height={40} width="100%" />
      </Grid>
    </Grid>
  );
}

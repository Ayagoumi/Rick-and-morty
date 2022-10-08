import { Grid, Typography, Box } from "@mui/material";

interface RNMEpisodeNameProps {
  name: string;
}

export default function RNMEpisodeName({ name }: RNMEpisodeNameProps) {
  return (
    <>
      {name && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle1">Episode Name:</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                {name}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

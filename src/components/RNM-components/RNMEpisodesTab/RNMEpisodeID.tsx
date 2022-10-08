import { Grid, Typography, Box } from "@mui/material";

interface RNMEpisodesTabProps {
  id: string;
}

export default function RNMEpisodeID({ id }: RNMEpisodesTabProps) {
  return (
    <>
      {id && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle1">Episode ID:</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                {id}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

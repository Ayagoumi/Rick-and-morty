import { Grid, Typography, Box } from "@mui/material";
import { formatedDate } from "../../../utils/formatTime";

interface RNMEpisodioAiredProps {
  air_date: string | number | Date;
}

export default function RNMEpisodeAirDate({ air_date }: RNMEpisodioAiredProps) {
  return (
    <>
      {air_date && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle1">Air Date:</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                {formatedDate(air_date)}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}
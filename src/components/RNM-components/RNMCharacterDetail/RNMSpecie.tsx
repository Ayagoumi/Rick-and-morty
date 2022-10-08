import { Grid, Typography, Box } from "@mui/material";

interface RNMSpecieProps {
  specie: string;
}

export default function RNMSpecie({ specie }: RNMSpecieProps) {
  return (
    <>
      {specie && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Specie
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                {specie}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

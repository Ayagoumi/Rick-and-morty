import { Grid, Typography, Box } from "@mui/material";

interface RNMNameProps {
  name: string;
}

export default function RNMName({ name }: RNMNameProps) {
  return (
    <>
      {name && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
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

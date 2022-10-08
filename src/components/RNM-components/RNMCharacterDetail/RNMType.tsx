import { Grid, Typography, Box } from "@mui/material";

interface RNMTypeProps {
  type: string;
}

export default function RNMType({ type }: RNMTypeProps) {
  return (
    <>
      {type && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Type
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                {type}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

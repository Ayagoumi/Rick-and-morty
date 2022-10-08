import { Grid, Typography, Box } from "@mui/material";

interface RNMGenderProps {
  gender: string;
}

export default function RNMGender({ gender }: RNMGenderProps) {
  return (
    <>
      {gender && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Gender
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                {gender}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

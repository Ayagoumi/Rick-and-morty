import { Grid, Typography, Box } from "@mui/material";
import { formatedDate } from "../../../utils/formatTime";

interface RNMCreatedAtProps {
  created: string;
}

export default function RNMCreatedAt({ created }: RNMCreatedAtProps) {
  return (
    <>
      {created && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Created
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                {formatedDate(created)}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

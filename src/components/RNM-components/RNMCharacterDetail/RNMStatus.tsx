import { Grid, Typography, Box } from "@mui/material";
import Label from "../Label";

interface RNMStatusProps {
  status: string;
}

export default function RNMStatus({ status }: RNMStatusProps) {
  return (
    <>
      {status && (
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Status
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">
              <Box component="span" sx={{ color: "text.disabled" }}>
                <Label
                  variant="filled"
                  color={
                    (status === "Dead" && "error") ||
                    (status === "Alive" && "success") ||
                    "warning"
                  }
                  sx={{ textTransform: "capitalize", zIndex: 20 }}
                  label={status}
                />
              </Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

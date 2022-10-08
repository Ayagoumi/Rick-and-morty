import {
  Box,
  Card,
  Grid,
  Avatar,
  CardContent,
  useTheme,
  Typography,
} from "@mui/material";
import Label from "./Label";
import Male from "../../assets/Male";
import Female from "../../assets/Female";
import Genderless from "../../assets/Genderless";
import { characterType } from "../../@types/store";
import { Link as RouterLink } from "react-router-dom";

export default function RNMCard({ character }: { character: characterType }) {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          maxWidth: "300px",
          maxHeight: "400px",
        }}
      >
        <RouterLink
          to={`/details/${character.id}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              position: "relative",
              pt: { xs: "100%", sm: "calc(100% * 4.5 / 4.66)" },
            }}
          >
            <Label
              variant="filled"
              color={
                (character?.status === "Dead" && "error") ||
                (character?.status === "Alive" && "success") ||
                "warning"
              }
              sx={{
                position: "absolute",
                bottom: 10,
                right: 10,
                textTransform: "capitalize",
                zIndex: 20,
              }}
              label={character?.status}
            />
            <Box
              sx={{
                width: 80,
                height: 36,
                zIndex: 9,
                bottom: -15,
                position: "absolute",
                mask: `url(/assets/shape-avatar.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/shape-avatar.svg) no-repeat center / contain`,
                bgcolor: "background.paper",
              }}
            />
            <Avatar
              sx={{
                zIndex: 9,
                width: 32,
                height: 32,
                position: "absolute",
                left: theme.spacing(3),
                bottom: theme.spacing(-2),
                bgcolor: "unset",
              }}
            >
              {character?.gender === "Male" ? (
                <Male />
              ) : character?.gender === "Female" ? (
                <Female />
              ) : (
                <Genderless />
              )}
            </Avatar>

            <img
              alt={character?.name ? character?.name : "image not found"}
              src={
                character?.image
                  ? character?.image
                  : "/assets/image_not_found.svg"
              }
              style={{
                top: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                filter:
                  character?.status === "Dead" ? "grayscale(100%)" : "none",
                WebkitBackdropFilter:
                  character?.status === "Dead" ? "grayscale(100%)" : "none",
              }}
            />
          </Box>

          <CardContent sx={{ pt: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                ...theme.typography.subtitle1,
                height: 20,
                color: "grey.800",
                overflow: "hidden",
                WebkitLineClamp: 2,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
            >
              {character?.name}
            </Typography>
          </CardContent>
        </RouterLink>
      </Card>
    </Grid>
  );
}

import Page from "../../page";
import RNMCharacterDetailSkeleton from "../RNMCharacterDetailSkeleton";
import { characterType } from "../../../@types/store";
import { Card, Grid, Box } from "@mui/material";
import LargeImage from "../LargeImage";
import RNMEpisodesTab from "../RNMEpisodesTab";
import ErrorRendering from "./ErrorRendering";
import RNMName from "./RNMName";
import RNMStatus from "./RNMStatus";
import RNMSpecie from "./RNMSpecie";
import RNMType from "./RNMType";
import RNMCreatedAt from "./RNMCreatedAt";
import RNMGender from "./RNMGender";
import RNMOrigin from "./RNMOrigin";

interface RNMCharacterDetailProps {
  char: characterType | undefined;
  error: boolean;
}

export default function RNMCharacterDetail({
  char,
  error,
}: RNMCharacterDetailProps) {
  return (
    <Page title="Rick and Morty | Details">
      <ErrorRendering error={error}>
        {!char ? (
          <RNMCharacterDetailSkeleton />
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <Card
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: "560px",
                  md: "100%",
                  margin: "auto",
                },
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={5}
                  lg={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ p: 1 }}>
                    <LargeImage
                      alt={char.name}
                      src={
                        char?.image ? char.image : "/assets/image_not_found.svg"
                      }
                      status={char?.status}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={7}
                  lg={6}
                  sx={{ display: "grid", alignItems: "center", p: "24px" }}
                >
                  <Box>
                    <RNMName name={char?.name} />
                    <RNMStatus status={char?.status} />
                    <RNMSpecie specie={char?.species} />
                    <RNMType type={char?.type} />
                    <RNMGender gender={char.gender} />
                    <RNMOrigin name={char.origin.name} />
                    <RNMCreatedAt created={char.created} />
                  </Box>
                </Grid>
              </Grid>
            </Card>
            <RNMEpisodesTab episodes={char?.episode} />
          </Box>
        )}
      </ErrorRendering>
    </Page>
  );
}

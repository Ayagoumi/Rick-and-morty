import { Card, Box, Tab, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import axios from "axios";
import RNMEpisodeID from "./RNMEpisodeID";
import RNMEpisodeName from "./RNMEpisodeName";
import RNMEpisodeAirDate from "./RNMEpisodeAirDate";
import RNMepisodeNumber from "./RNMepisodeNumber";

interface Episode {
  id: string;
  name: string;
  air_date: string | number | Date;
  episode: string;
}

interface RNMEpisodesTabProps {
  episodes: string[];
}

export default function RNMEpisodesTab({ episodes }: RNMEpisodesTabProps) {
  const [value, setValue] = useState<number>(1);
  const [episodeData, setEpisodeData] = useState<Episode>();

  useEffect(() => {
    const url = episodes?.[value - 1];
    if (url) {
      axios
        .get(url)
        .then((res) => {
          setEpisodeData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(url);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card>
      <TabContext value={value.toString()}>
        <Box sx={{ px: 3, bgcolor: "background.neutral" }}>
          <TabList
            onChange={(_, value) => setValue(value)}
            allowScrollButtonsMobile
            variant="scrollable"
          >
            {episodes?.map((_, index) => (
              <Tab
                key={index}
                label={`Episode ${index + 1}`}
                value={(index + 1).toString()}
              />
            ))}
          </TabList>
        </Box>
        <Divider />
        {episodes?.map((_, index) => (
          <TabPanel key={index} value={(index + 1).toString()}>
            {episodeData && (
              <Box sx={{ p: 3 }}>
                <RNMEpisodeID id={episodeData.id} />
                <RNMEpisodeName name={episodeData.name} />
                <RNMEpisodeAirDate air_date={episodeData.air_date} />
                <RNMepisodeNumber episode={episodeData.episode} />
              </Box>
            )}
          </TabPanel>
        ))}
      </TabContext>
    </Card>
  );
}

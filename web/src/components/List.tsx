import React from "react";
import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { Element } from "./music/Element";
import { songs } from "../utils/config/data";

export const MusicList: React.FC = () => {
  return (
    <Box mt={"20px"}>
      <Heading mb={"10px"} fontWeight="bold">
        Music.
      </Heading>
      <SimpleGrid mt={"10px"} columns={4} spacing={"15px"}>
        {songs.map((song) => (
          <Element {...song} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

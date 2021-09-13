import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Register, MusicList, AddSong } from "../components";

export const Home: React.FC = () => {
  return (
    <Box>
      <Heading>hello</Heading>
      <AddSong />
      <Register />
      <MusicList />
    </Box>
  );
};

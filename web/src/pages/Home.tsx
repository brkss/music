import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Register, MusicList } from "../components";

export const Home: React.FC = () => {
  return (
    <Box>
      <Heading>hello</Heading>
      <Register />
      <MusicList />
    </Box>
  );
};

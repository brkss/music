import React from "react";
import { Box, Grid, GridItem, Image, Heading, Text } from "@chakra-ui/react";
import { IResult } from "../../utils/types/Result";

export const MusicSearchElement: React.FC<IResult> = ({
  artist,
  name,
  image,
}) => {
  return (
    <Box h={"120px"} mt={"10px"}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem h={"100px"} colSpan={1} _hover={{ opacity: 0.7 }}>
          <Image src={image} w={"120px"} rounded={"7px"} />
        </GridItem>
        <GridItem h={"100px"} p={"0 10px"} colSpan={3}>
          <Heading>{name}</Heading>
          <Text>{artist}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

import React from "react";
import { Box, Grid, GridItem, Image, Heading, Text } from "@chakra-ui/react";
import { IResult } from "../../utils/types/Result";

export const MusicSearchElement: React.FC<IResult> = ({
  artist,
  name,
  image,
}) => {
  const handleLongText = (text: string) => {
    if (text.length > 25) return text.slice(0, 22) + "...";
    return text;
  };

  return (
    <Box
      h={"120px"}
      cursor={"pointer"}
      transition={".3s"}
      _hover={{ opacity: 0.7, transition: ".3s" }}
      mt={"10px"}
    >
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem h={"100px"} colSpan={1}>
          <Image src={image} w={"120px"} rounded={"7px"} />
        </GridItem>
        <GridItem h={"100px"} p={"0 10px"} colSpan={3}>
          <Heading>{handleLongText(name)}</Heading>
          <Text>{handleLongText(artist)}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

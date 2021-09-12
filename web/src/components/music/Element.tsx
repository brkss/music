import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { ISong } from "../../utils/types/Song";

export const Element: React.FC<ISong> = ({ name, image, us }) => {
  return (
    <Box>
      <Image rounded={7} w={"100%"} src={image} />
      <Text textAlign="left" fontSize="20px" fontWeight="bold">
        {name}
      </Text>
      <Text opacity={0.8}> @{us || "unkown"}</Text>
    </Box>
  );
};

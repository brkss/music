import React from "react";
import { Input, Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { SearchMusic } from ".";

export const AddSong: React.FC = () => {
  const _searchPanel = useDisclosure();
  return (
    <Box
      padding={"10px"}
      border="1px solid #ff5a6340"
      rounded="7px"
      mt={"20px"}
    >
      <Text mb={"5px"} fontWeight={"bold"} fontSize="20px">
        Add Song{" "}
      </Text>

      <Button
        bg={"#232323"}
        color="white"
        onClick={() => _searchPanel.onOpen()}
        fontWeight="bold"
      >
        Add !
      </Button>
      <SearchMusic {..._searchPanel} />
    </Box>
  );
};

import React from "react";
import { Input, Box, Button, Text } from "@chakra-ui/react";

export const AddSong: React.FC = () => {
  return (
    <Box
      padding={"10px"}
      border="1px solid #ff5a6340"
      rounded="7px"
      mt={"20px"}
    >
      <Text mb={"5px"} fontWeight={"bold"} fontSize="20px">
        Add Song:{" "}
      </Text>
      <Input
        p={"14px 7px"}
        fontWeight="bold"
        mb={"10px"}
        bg={"#38383878"}
        size={"lg"}
        variant={"unstyled"}
      />
      {/*
      <Button bg={"#232323"} color="white" fontWeight="bold">
        Save !
      </Button>
        */}
    </Box>
  );
};

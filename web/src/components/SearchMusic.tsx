import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Heading,
  Input,
  Box,
} from "@chakra-ui/react";
import { MusicSearchElement } from "./base/MusicSearchElement";
import axios from "axios";
import { create_search_url } from "../utils/api/fns";
import { IResult } from "../utils/types/Result";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const SearchMusic: React.FC<Props> = ({ onOpen, isOpen, onClose }) => {
  const [results, SetResults] = React.useState<IResult[]>([]);

  const handleInputChange = async (e: React.FormEvent<any>) => {
    if (e.currentTarget.value) {
      const query = e.currentTarget.value;
      const res = await axios.get(create_search_url(query));
      console.log("res => ", res);

      if (res.data.results?.trackmatches?.track) {
        const _data = res.data.results.trackmatches.track.map(
          (track: any): IResult => ({
            name: track.name,
            image: track.image[2]["#text"] || "",
            artist: track.artist,
            mbid: track.mbiud,
            url: track.url,
            listeners: track.listeners,
          })
        );
        SetResults(_data);
        //console.log("final data : ", _data);
      }
    }
  };
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" size={"lg"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderLeft={"6px solid"} bg={"#000"} color={"#ff5a63"}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Heading>Search</Heading>
            <Box mt={"14px"}>
              <Input
                placeholder={"Track name"}
                p={"14px 14px"}
                fontWeight="bold"
                mb={"10px"}
                bg={"#38383878"}
                size={"lg"}
                variant={"unstyled"}
                onChange={(e) => handleInputChange(e)}
              />
            </Box>
            <Box mt={"14px"}>
              {results.map((track) => (
                <MusicSearchElement {...track} />
              ))}
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

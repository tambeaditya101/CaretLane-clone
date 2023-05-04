import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

const Shipped = ( ) => {
  

  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        p="10px"
        mb={"20px"}
      >
        <Box
          width={{ base: "10%", md: "12%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>NAME</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "17%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>ADDRESS</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "10%", lg: "7%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>IMAGE</Text>
        </Box>

        <Box
          width={{ base: "15%", md: "28%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>PRODUCTS</Text>
        </Box>

        <Box
          width={{ base: "10%", md: "11%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>AMOUNT</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "10%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>DATE</Text>
        </Box>
        <Box
          width={{ base: "20%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>STATUS</Text>
        </Box>
      </Box>
  
    </>
  );
};

export default Shipped;

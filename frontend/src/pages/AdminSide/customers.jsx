import {
  Avatar,
  Box,
  Heading,
  Image,
  Input,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Customers = () => {
  
   
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Customers</Heading>
      <Text color={"#00b5b8"}>List of Customers</Text>

      <Box mt={"30px"} width={{ base: "100%", md: "50%", lg: "30%" }}>
        {/* <Input
          // onKeyDown={handleSearchData}
          placeholder="Search Users..."
        ></Input> */}
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        p="10px"
        mb={"20px"}
        mt={"30px"}
      >
        <Box
          width={{ base: "5%", md: "7%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>S.NO</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "12%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>IMAGE</Text>
        </Box>
        <Box
          width={{ base: "7%", md: "15%", lg: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>NAME</Text>
        </Box>

        <Box
          width={{ base: "10%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>CONTACT</Text>
        </Box>

        <Box
          width={{ base: "15%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>EMAIL</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>PASSWORD</Text>
        </Box>
        
      </Box>

      
 
    </Box>
  );
};

export default Customers;

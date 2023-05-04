import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductItems from "./products-item";
import axios from "axios";

const Products = () => {
 
 
 
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Products</Heading>
      <Text color={"#00b5b8"}>List of Products</Text>
      {/* Table of all products */}
      <Box mt={"30px"} w={"100%"}>
        <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
         
          
        </Box>

        

        <Box>
          <SimpleGrid gap={5}>
            <Box
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"left"}
              boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
              padding={"10px"}
              mt={"20px"}
            >
              <Box
                width={{ base: "10%", md: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>ID</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>IMAGE</Text>
              </Box>
              <Box
                width={{ base: "10%", md: "27%", lg: "25%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRODUCTS</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "7%", lg: "8%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRICE</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "15%", lg: "15%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>CATEGORY</Text>
              </Box>
              <Box
                w={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>STATUS</Text>
              </Box>
            </Box>
         {/* map data */}
          </SimpleGrid>
        </Box>
      </Box>
 

     
    </Box>
  );
};

export default Products;

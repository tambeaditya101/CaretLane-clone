import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
 
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Dashboard</Heading>
      <Text color={"#00b5b8"}>Welcome to Dashboard</Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        width={{ base: "100%", md: "100%", lg: "95%" }}
        m={"auto"}
        mt={2}
        spacingY={10}
      >
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
             34
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
          MangalSutra
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
             45
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
           Rings
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
           34
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Ear-Rings
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            140
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
           Necklaces
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            34
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
             Bangles
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
             45
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
             Bracelets
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;

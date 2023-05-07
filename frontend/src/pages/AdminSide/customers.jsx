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
  const [CustomerData , setCustomerData ] = useState([])
   
  const GetCustomers=()=>{
    axios.get(`http://localhost:8080/user/`)
    .then((res)=>{ 
      console.log(res.data)
      setCustomerData(res.data)
    })
    .catch((err)=>{
      console.log("Something went wrong !!")
    })
  }

  useEffect(() => {
    GetCustomers()
  }, [])
  
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
          <Text>GENDER</Text>
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
          <Text>STATUS</Text>
        </Box>
        
      </Box>

      {CustomerData.map((el, i) => (
        <Box
          key={Math.random()}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          p="10px"
          mb={"10px"}
          width={"100%"}
          cursor={"pointer"}
        >
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              width={{ base: "5%", md: "7%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>{i + 1}</Text>
            </Box>
            <Box
              width={{ base: "8%", md: "12%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Avatar src="https://avatars.githubusercontent.com/u/111531676?s=40&v=4" name={el.name}></Avatar>
            </Box>
            <Box
              width={{ base: "7%", md: "15%", lg: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>{el.name} </Text>
            </Box>

            <Box
              width={{ base: "10%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text as={"mark"}>{el.gender}</Text>
            </Box>

            <Box
              width={{ base: "15%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{el.email}</Text>
            </Box>
            <Button
              colorScheme='teal' size='md'
              width={{ base: "10%", md: "13%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{`Active`}</Text>
            </Button>
       
          </Box>
          {/*``````````````````````````` Small Screen Data```````````````````````` */}
          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent={"space-between"}
            p={"10px"}
          >
            {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
            <Box width={{ base: "30%", sm: "40%" }}>
              <Box
                h="25px"
                width={"78px"}
                border={"1px solid green"}
                bg={"green.500"}
                mb={"10px"}
                color="black"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                  User Details
                </Text>
              </Box>
              <Avatar
                size={{ base: "lg", sm: "2xl" }}
                src="https://avatars.githubusercontent.com/u/111531676?s=40&v=4"
                name={el.name}
              ></Avatar>
            </Box>
            {/* ```````````````````````````````````right Div````````````````````````````` */}
            <Box
              w={{ base: "60%", sm: "60%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
            >
              <Box>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "13px", sm: "14px" }}
                >
                  {el.name}
                </Text>
                <Text
                  as={"mark"}
                  mt={"10px"}
                  fontSize={{ base: "12px", sm: "13px" }}
                >
                  {el.gender}
                </Text>
                <Text
                  fontWeight={"bold"}
                  mt={"10px"}
                  fontSize={{ base: "13px", sm: "14px" }}
                  color={"green.500"}
                >
                  Mail-{el.email}
                </Text>
                <Button
                 colorScheme='green' size='md'
                  fontWeight={"bold"}
                  mt={"10px"}
                  fontSize={{ base: "13px", sm: "14px" }}
                >
                  Active
                </Button>
                
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
 
    </Box>
  );
};

export default Customers;

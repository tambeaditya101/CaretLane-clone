import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AccountInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const [details, setDetails] = useState({
    Name: "Hemensan",
    EmailId: "Hemensan@diamond.com",
    Phone: "6264866332",
    Password: "@Hemensan",
  });
  const [show, setShow] = useState(false);
  const [ids, setIds] = useState(0);
  let adminDetails = {};
  
  const [updateData, setUpdateData] = useState([]);
  const handleClick = () => setShow(!show);
  
 
 
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>My Acccount</Heading>
      <Text color={"#00b5b8"}>My Account</Text>
      <Box textAlign={"center"} mt={"30px"}>
        <Avatar
          size={"2xl"}
          src="https://avatars.githubusercontent.com/u/111531676?v=4"
          alt="admin"
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        ></Avatar>
        <SimpleGrid
          width={{ base: "90%", md: "85%", lg: "40%" }}
          m={"auto"}
          mt={"20px"}
          gap={3}
        >
          <Input color={"gray.600"} readOnly value={details.Name}></Input>
          <Input color={"gray.600"} readOnly value={details.EmailId}></Input>
          <Input color={"gray.600"} readOnly value={details.Phone}></Input>
          <InputGroup size="md">
            <Input
              color={"gray.600"}
              readOnly
              pr="4.5rem"
              type={show ? "text" : "password"}
              value={details?.Password}
            />
            <InputRightElement width="4.5rem">
              <Box onClick={handleClick} cursor={"pointer"}>
                {show ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Box>
            </InputRightElement>
          </InputGroup>
          
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AccountInfo;

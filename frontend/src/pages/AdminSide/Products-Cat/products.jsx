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
  const toast = useToast();
  const [datas, setDatas] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, SetImage] = useState("");
  const [mid, msetId] = useState("");
 
  
  // `````````````````````Editable Modal ````````````````````````````````
  const handleOpenDetails = (id, product_name,
    product_price,
    product_img ) => {
    setTitle(product_name);
    setPrice(product_price);
    SetImage(product_img);
    msetId(id);
    onOpen();
  };
  //```````````````````````````Update-Listings``````````````````````````` `

  const handleGetData = () => {
    axios
      .get(
        `http://localhost:8080/products`
      )
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetData();
  }, [ ]);

  //```````````````````````````````````````````````````````````` submit modal data`````````````````````````````
  // product_name,
  //  product_price,
  //  product_img,
  const handleSubmitModalDetails = (mid) => {
    let dataToSend = {
      product_name: title,
      product_price: +price,
      product_img: image,
    };

    axios
      .patch(
        `http://localhost:8080/product/update/${mid}`,
        dataToSend
      )
      .then((res) => {
        handleGetData();
        toast({
          title: "Updated Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((res) => {
        toast({
          title: "Invalid Request",
          status: "Error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

 
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
            
            </Box>
         {/* map data */}
         {datas.map((el, i) => (
              <ProductItems
                key={el._id}
                i={i}
                {...el}
                handleOpenDetails={handleOpenDetails}
                
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
 
  {/* ``````````````````````````````````````````Modal`````````````````````````````````````` */}

  <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent bg={"#0c0e1f"} color={"white"}>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  SetImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.image} */}
              </Input>
              <Text mt={"10px"}>Title:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.details} */}
              </Input>
              <Text mt={"10px"}>Price:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  console.log(e.target.value);
                }}
              >
                {/* Price- Rs {Math.floor(Number(modalDetail.product_price) * 60)} */}
              </Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmitModalDetails(mid);
                onClose();
              }}
            >
              Save
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

     
    </Box>
  );
};

export default Products;
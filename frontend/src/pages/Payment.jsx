import {
  Box,
  FormControl,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  FormLabel,
  Select,
  Grid,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,

  useColorModeValue,


} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";




// const initState={
//   first_name= "Hemensan",
// "last_name= "Mahilange",
// "mobile"= 123485934,
// "country"= "India",
// "address": "Chhattisgarh",
// "city": "Janjgir",
// "pincode": 495557,
// "totalPrice": 1000,
// "product": [
//     {
//       "_id": "645648d7caea51a505fac450",
//       "product_img": "https://cdn.caratlane.com/media/catalog/product/J/B/JB01163-1RP600_1_lar.jpg",
//       "product_name": "Malisa Diamond Bangle",
//       "product_price": 31999,
//       "product_desc": "Malisa Diamond Bangle",
//       "product_weight": 11,
//       "product_type": "Bangles",
//        "order-status" :"pending",
//       "user_ID": "64534c5e9d79e64870a3a6ec"
//   },
//   {
//       "_id": "6456495bcaea51a505fac453",
//       "product_img": "https://cdn.caratlane.com/media/catalog/product/J/B/JB01214-1YP900_1_lar.jpg",
//       "product_name": "Rahi Diamond Bangle",
//       "product_price": 14599,
//       "product_desc": "Rahi Diamond Bangle",
//       "product_weight": 8,
//       "product_type": "Bangles",
//        "order-status" :"pending",
//       "user_ID": "64534c5e9d79e64870a3a6ec"
//   }
//    ] 
//   }




const Payment = () => {
  const [first_name, setFirsName] = useState("");
  const [last_name, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  // const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [product, setProduct] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("India");
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const toast = useToast()
  const token=localStorage.getItem("token")
  console.log(token)
 const fetChData=()=>{
  fetch(`http://localhost:8080/cart/products`,{
     method : "GET",
     headers : {
      "content-type" : "Application/json",
      "Authorization" : `Bearer ${token}`
     }
  })
  .then(res=> res.json())
  .then((data)=> {
    setData(data)
    console.log(data)
  }).catch((err)=>{
    console.log("Error")
  })
 }
 useEffect(() => {
    fetChData()
 }, [])
 
  
  
  const handlePayment = () => {
    let userData = {
      first_name,
      last_name ,
      city ,
      address,
      mobile,
      pincode ,
      product,
      country,
    };
   
    toast({
      position: "top",
      title: "Order placed",
      description: "SuccessFul.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

   


//     fetch(`http://localhost:8080/cart/product/add`,{
//   method:"POST",
//   body:JSON.stringify({userData}),
//   headers:{
//     "Content-Type":"application/json",
//     "Authorization":`Bearer ${JSON.parse(localStorage.getItem("token"))}`
//   }
// })
// .then(res=> res.json()
// ).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err);
// })

    window.location.href = "/"
   
  };


  


  let sum = 0,gst=0,grandTotal
  if(data){
    for(let i=0; i<data.length; i++){
      sum+=Number(data[i].product_price*data[i].product_qty)
    }
    gst = (sum*18)/100
    grandTotal = Math.floor(sum+gst)
    console.log('grandTotal:', grandTotal)
   
  }

  let discount;
  if(grandTotal>20000){
   discount=grandTotal*(2/100);
  }else if(grandTotal>50000){
  discount=grandTotal*(5/100);
  }else if(grandTotal>100000){
    discount=grandTotal*(8/100); 
  }else{
    discount=0;
  }





  return (
    <>
    <Navbar/>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        alignItems="center"
        gap={"0.2px"}
        margin="auto"
        paddingTop={"10px"}
      >
        <Stack
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          width={"35%"}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"2xl"} textAlign={"center"} color="blk">
                Shipping Address
              </Heading>
            </Stack>

            <Stack
              spacing={4}
              width={{ base: "300px", md: "400px", lg: "450px" }}
            >
              <FormControl id="firstName">
                {/* <FormLabel>First Name</FormLabel> */}
                <Input
                  width={"100%"}
                  type="text"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  value={first_name}
                  onChange={(e) => setFirsName(e.target.value)}
                  placeholder="First name"
                />
              </FormControl>

              <FormControl id="lastName">
                {/* <FormLabel>Last Name</FormLabel> */}
                <Input
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  placeholder="Last name"
                />
              </FormControl>

              <FormControl id="mobile" isRequired>
                {/* <FormLabel>Phone number</FormLabel> */}
                <Input
                  value={mobile}
                  onChange={(e) => setMobile(Number(e.target.value))}
                  type="number"
                  maxLength={"10"}
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  placeholder="Phone number"
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                {/* <FormLabel>Phone number</FormLabel> */}
                <Input
                  value={address}
                  type="text"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  placeholder="Address & House no"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <FormControl id="city" isRequired>
                {/* <FormLabel>City</FormLabel> */}
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  placeholder="Enter city"
                />
              </FormControl>
              <FormControl id="state" isRequired>
                {/* <FormLabel>State</FormLabel> */}
                <Input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  placeholder="Enter State"
                />
              </FormControl>

              <FormControl id="pincode" isRequired>
                {/* <FormLabel>City</FormLabel> */}
                <Input
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  type="text"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  placeholder="Pincode"
                />
              </FormControl>


              <FormControl id="country" isRequired>
                {/* <FormLabel>State</FormLabel> */}
                <Input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  borderRadius={"none"}
                  border={"1px solid gray"}
                  focusBorderColor="gray.400"
                  placeholder="Country"
                />
              </FormControl>

              <Stack spacing={5} pt={2}></Stack>
            </Stack>
          </Stack>
        </Stack>
        
        <Stack gap={"15px"} m={"auto"}>
          <Select placeholder="Select payment method">
            <option value="option1">Cash on Delivery</option>
            <option value="option2">UPI</option>
            <option value="option3">CARD</option>
          </Select>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormLabel>CARD DETAILS</FormLabel>
                <FormControl id="fullname" isRequired>
                 
                  <Input
                    type="text"
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="Full Name"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormLabel>CVV</FormLabel>
                <FormControl id="cvv">
                
                  <Input
                    type="number"
                    maxLength={"3"}
                    borderRadius={"none"}
                    border={"1px solid gray"}
                    focusBorderColor="gray.400"
                    placeholder="CVV"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="cardnumber" isRequired>
          
              <Input
                type="number"
                maxLength={"10"}
                borderRadius={"none"}
                border={"1px solid gray"}
                focusBorderColor="gray.400"
                placeholder="Card number"
              />
            </FormControl>



<Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bgGradient="linear(to-r, #F8BBD0, #b3d4fc)"
              color={useColorModeValue('black', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={() => handlePayment()}
              >

              Place Order
            </Button>
            <Stack spacing={10} pt={2}></Stack>
          </Stack>
        </Stack>

       

        <Grid m={"auto"}>
          <TableContainer>
            <Table
              variant="simple"
              colorScheme="teal"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
              <TableCaption>
                You are our lucky customer ! stay connected
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>SUB TOTAL</Th>

                  <Th isNumeric> ₹{Math.floor(grandTotal)}</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>CART DISCOUNT</Td>

                  <Td isNumeric>₹ {discount}</Td>
                </Tr>
                <Tr>
                  <Td>SHIPPING CHARGES</Td>

                  <Td isNumeric>FREE</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>TOTAL COAST</Th>

                  <Th isNumeric> ₹{grandTotal-discount} </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Grid>
      </Flex>
      <Footer/>
    </>
  );
};

export default Payment;
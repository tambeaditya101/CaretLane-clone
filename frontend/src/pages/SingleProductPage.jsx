import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Icon,
    Center
  } from '@chakra-ui/react';

import {BsBag} from 'react-icons/bs'
import axios from 'axios';
import {useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
import { addToCart } from '../redux/Cart/action';
import ProductCard from '../components/ProductCard';


  
  export default function SingleProductPage() {
    const location = useLocation()
    const [data , setData] = useState()
    const navigate = useNavigate()
    let {productID} = useParams()
    const toast = useToast()


    const AddtoCartItem = async ()=>{
      
        if(localStorage.getItem('token')){
          
          data.product_qty=1;
          data.order_status="pending"
          axios.post(`${process.env.REACT_APP_BASE_URL}/cart/product/add`,data,{
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((res)=>{
            if(res.data.msg == 'product added to the cart successfully.'){
              toast({
                title: 'Item Added To Cart.',
                description: "Your item has been added to your cart",
                status: 'success',
                position : 'top',
                duration: 3000,
                isClosable: true,
              })
            }
          })
          .catch((err)=>{
            console.log(err)
            toast({
              title: 'Your Item already in the cart',
              status: 'warning',
              position : 'top',
              duration: 3000,
              isClosable: true,
            })
          })

        }else{
          toast({
            title: 'Please login first',
            status: 'error',
            position : 'top',
            duration: 3000,
            isClosable: true,
          })
          navigate('/login')
        }
        
      

    }
    
    
    

    function getData(){
        axios.get(`${process.env.REACT_APP_BASE_URL}/product/singleProduct/${productID}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
      window.scrollTo({
        top: 0,
      });
        getData()
    },[location])




    return <>
        <Navbar/>
      <Box>
        <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex >
          <Image
              rounded={'md'}
              alt={'product image'}
              src={
                data?data.product_img:"'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'"
              }
              fit='cover'
              
              align={'center'}
              w={{ base: '100%', sm: '90%' }}
              h={{ base: '100%', sm: '70%'}}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
            <Heading
                textAlign={'center'}
                color='#F48FB1'
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl'}}>
                  {data?data.product_name:"Name"}
              </Heading>

              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={600}
                fontSize={'2xl'}>
                {data?"₹"+data.product_price:"price"}
              </Text>
              <Box display={'flex'} justifyContent={'center'} color='#F48FB1' >
                <Text fontWeight={'semibold'} >MRP</Text>
                <Text mx={2} textDecoration={'line-through'} >Rs.{Math.floor(data?.product_price + (15*data?.product_price)/100 )}</Text>
                <Text  >(15% off)</Text>
              </Box>
              <Text textAlign={'center'}   color={'gray.500'} >Price inclusive of all taxes</Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {data?data.product_desc:"Description"}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('#9575CD', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('#9575CD', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Weight:
                    </Text>{' '}
                    {data?.product_weight}g
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                    </Text>{' '}
                    {data?.product_rating} Star
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Product ID:
                    </Text>{' '}
                    {data?._id}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Type:
                    </Text>{' '}
                    {data?.product_type}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    DELIVERY:
                    </Text>{' '}
                    Standard Home Delivery
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Standard Click & Collect:
                    </Text>{' '}
                    Your order will arrive in store within 3-5 days.
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    RETURNS:
                    </Text>{' '}
                    We’ll be happy to exchange or refund within 14 days of purchase
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    By post:
                    </Text>{' '}
                    A delivery charge is applicable.
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bgGradient="linear(to-r, #F8BBD0, #b3d4fc)"
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={()=>AddtoCartItem(data.id)}>
              <Icon mr={2} as={BsBag}/>Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box>
        <Heading fontSize={{base:"18px",sm:"26px"}} ml={{base:10,sm:59}} mb={{base:2,sm:5}} fontFamily={'serif'} >You May Like it</Heading>
          <Box margin={'auto'} border={'1px solid gray'} width={{base:"80%",sm:"90%"}} mb={8}></Box>
            <Center>
                <SimpleGrid  p={8} gridTemplateColumns={{base:'repeat(2,1fr)' , sm:'23% 23% 23% 23%'}} gap={{base:'7px',sm:'15px'}} >
                {
                    extraData?.map((el)=>(
                        <ProductCard key={el.id} {...el} />
                    ))
                }
                </SimpleGrid>
          </Center>
      </Box>
      </Box>
    </>;
  }


  let extraData = [
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/T/UT00016-YG0000_11_listfront.jpg",
      product_name : "Ally Cluster Diamond Ring",
      product_price : 7099,
      _id : "6453717004630327a2dea0eb",
    },
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/J/R/JR03367-RGP600_1_lar.jpg",
      product_name : "Lindy Pave Diamond Band",
      product_price : 11999,
      _id : "6453724104630327a2dea0ee",
    },
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/J/R/JR03281-YGP900_1_lar.jpg",
      product_name : "Ripple Dazzle Diamond Ring",
      product_price : 34999,
      _id : "645372b104630327a2dea0f1",
    },
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/J/R/JR03394-YGP600_1_lar.jpg",
      product_name : "Karen Clusters Diamond Band",
      product_price :24999 ,
      _id : "64537708e05d22df467e9bb4",
    },
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/J/L/JL04653-1YP900_1_lar.jpg",
      product_name : "Stag Patronus & Always Diamond",
      product_price :24999,
      _id : "64564032caea51a505fac414",
    },
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/J/L/JL04047-1YP600_1_lar.jpg",
      product_name : "Dazzle Alphabet J Diamond Neck",
      product_price :25999,
      _id : "64537e3ce05d22df467e9be0",
    },
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/J/B/JB01039-YGP900_1_lar.jpg",
      product_name : "Aahana 22KT Gold Bracelet",
      product_price :29037,
      _id : "645625af62c1ec5071aff0bc",
    },
    {
      product_img : "https://cdn.caratlane.com/media/catalog/product/S/R/SR02837-WGP900_1_lar.jpg",
      product_name : "Lambent Solitaire Ring",
      product_price :47403,
      _id : "6456721ce570a5d4a15b2745",
    },
  ]
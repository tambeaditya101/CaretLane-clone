import { Box, Heading, SimpleGrid,Image,Button , Center, HStack, Text, Icon, useToast } from "@chakra-ui/react"
import {useEffect, useState } from "react"
import { getCartData,deleteCartItem,updateQuantity } from "../redux/Cart/action"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {RiDeleteBin6Line} from 'react-icons/ri'
import Navbar from '../components/navbar/Navbar'
import axios from "axios"

export default function CartPage(){

    const toast = useToast()
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.cartReducer.data)
    
    
    const [flag,setFlag] = useState(false)

    let sum = 0,gst=0,grandTotal
    if(data){
      for(let i=0; i<data.length; i++){
        sum+=Number(data[i].product_price*data[i].product_qty)
      }
      gst = (sum*18)/100
      grandTotal = Math.floor(sum+gst)
    }
    
    useEffect(()=>{
      dispatch(getCartData)
    },[flag])

    const handleDelete = (id)=>{
      deleteCartItem(id).then(()=>setFlag(!flag))
      toast({
        title: 'Item Deleted from the Cart.',
        description: "Your item has been Deleted from your cart",
        status: 'error',
        position : 'top',
        duration: 3000,
        isClosable: true,
      })
      
    }

    const handleUpdateQty = (value,id) =>{
      if(id){
        value = Number(value)
        updateQuantity(value,id)
        .then(()=>dispatch(getCartData))
        setFlag(!flag)
        }
    }



  

    if(!data){
      return <Box>
        <Center>
        <Image width={{base:"80%",md:"25%"}} mt='10%' src='https://imgs.search.brave.com/5MCFjtWkk3lNM-JvIVfNSBCTMHlmMAxCrpNQ9rc5iLQ/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2hvcHBpbmct/YW5kLWVjb21tZXJj/ZS0yOC85MC9lbXB0/eV9jYXJ0LTUxMi5w/bmc' />
        </Center>
      </Box>
    }



    return (
      <>
      <Navbar/>
      <Box>
        <Box display={'grid'} gridTemplateColumns= {{base:'repeat(1,1fr)',sm:"73% 25%"}} gap={'1%'} m={1} ml={3} mb={'70px'}>
          <Box>
            {
              grandTotal==0?
              <Box>
                <Box>
                  <Center>
                      <Image src={cartImage} />
                  </Center>
                </Box>
                <Box>
                    <Heading textAlign={'center'} color={'gray.800'} fontWeight={'800'} >Empty Cart</Heading>
                </Box>
              </Box>
              :
              <SimpleGrid gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)"}} >
              {data.map((el)=>(
                <HStack key={el._id} border='1px solid #BDBDBD' height={{base:'180px',sm:'200px'}} mx={4} my={4}>
                    <Box width={{base:'30%',sm:'20%'}} height={{base:'180px',sm:'200px'}} border='1px solid #BDBDBD'  >
                      <Image src={el.product_img} width={'100%'} height={'100%'} alt='image' />
                    </Box>
                    <Box width={{base:'68%',sm:'78%'}}  px={15} >
                      <Heading size='sm'>{el.product_name}</Heading>
                      <Text py='2'>
                        {el.brand}
                      </Text>
                      <Box ml={{base:"0px",sm:"0px"}} display={{base:'flex',sm:'flex'}} justifyContent={"left"} >
                        <Text fontWeight={'semibold'} >Rs. {el.product_price}</Text>
                      </Box>

                      <HStack mt={"15px"} justifyContent={'space-between'} >
                        <Box>
                          Qty <select value={el.product_qty} onChange={(e)=>handleUpdateQty(e.target.value,el._id)} >
                              <option value='1' >1</option>
                              <option value='2' >2</option>
                              <option value='3' >3</option>
                              <option value='4' >4</option>
                              <option value='5' >5</option>
                          </select>
                        </Box>
                        <Icon _hover={{cursor:'pointer'}} onClick={()=>handleDelete(el._id)} mr={{base:"10px" ,sm:"500px"}} fontSize={'17px'} mt={4} as={RiDeleteBin6Line} />
                      </HStack>
                    </Box>
                </HStack>
              ))}
          </SimpleGrid>
            }
          </Box>

          <Box border='1px solid #EEEEEE' bg='#FAFAFA' px={4} pt={4} mt={5}>
                  <Heading fontSize={'17px'} mb={4} >Order Details</Heading>
                  <HStack justifyContent={'space-between'} >
                    <Text >Bag Total</Text>
                    <Text>₹{sum}</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} >
                    <Text>GST</Text>
                    <Text>₹{gst}</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} fontWeight={'semibold'} >
                    <Text>Order Total</Text>
                    <Text>₹{Math.floor(grandTotal)}</Text>
                  </HStack>
                  <Link to='/paymentpage' >
                    <Button mt={2} rounded={'none'} bgGradient="linear(to-r, #F8BBD0, #b3d4fc)" color='white' width={'100%'} isDisabled={grandTotal==0} >
                      PROCEED TO PAY
                    </Button>
                  </Link>
          </Box>
        </Box>
        <Box bg={'white'} width={'100%'} height={'90px'} position={'fixed'} bottom={0} 
                display={{base:'flex',sm:'none'}} border='3px solid #212121' borderBottom={'none'}
                borderLeft={'none'}
                borderRight={'none'}
                borderTopRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                columnGap={5}
                >
                <Button  border={'3px solid #212121'} bg={'white'} 
                  color="#212121"
                  fontWeight={'bold'}
                   >
                  Order Total ₹{Math.floor(grandTotal)}
                  </Button>
                  <Link to='/paymentpage' >
                    <Button isDisabled={grandTotal==0} bg={'#212121'} color={'white'} >Proceed To Pay</Button>
                  </Link>
        </Box>
        </Box>
        </>
        
    )
}


const cartImage = 'data:image/png;base64,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'

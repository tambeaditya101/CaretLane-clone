import { Badge, Box, Button, Heading, Icon, Image } from "@chakra-ui/react";
import {IoIosArrowForward} from 'react-icons/io'
import {TiHome} from 'react-icons/ti'
import {BsFillCameraVideoFill} from 'react-icons/bs'


export default function ProductCard({product_img,_id,product_name,product_price}){
    return <Box key={_id} >
        <Image  mb={'3'} border='1px solid  #F5F5F5' borderRadius='10px' src={product_img} alt='ring' />
        <Badge rounded="full" mb={'3'} px="2" fontSize="0.8em" colorScheme="red">
            Bestseller
        </Badge>
        <Heading fontWeight={'600'} mb={'2'} fontSize={'22px'} >₹{product_price}</Heading>
        <Heading fontWeight={'500'} mb={'2'} fontSize={'17px'} >Check delivery date <Icon as={IoIosArrowForward}/> </Heading>
        <Heading  mb={'2'} fontSize={'15px'} color='#BDBDBD' >{product_name}</Heading>
        <Box display='flex' gap={'5px'} >
            <Button width={'48%'} fontSize={'13px'} border='1px solid #212121' bg={'white'} borderRadius={'10px'} color='#212121' ><Icon mr={'5px'} as={BsFillCameraVideoFill} />Live Video call</Button>
            <Button width={'48%'} fontSize={'13px'} border='1px solid #64DD17' bg={'white'} borderRadius={'10px'} color={'#64DD17'} ><Icon mr={'5px'} as={TiHome} /> Book Try at Home</Button>
        </Box>
    </Box>
}
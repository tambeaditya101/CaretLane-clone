import { Box, Image,Button} from "@chakra-ui/react";
import ProductSidebar from "../components/ProductSidebar";
import ProductCard from "../components/ProductCard";

export default function ProductPage(){
    return <Box>
    <Image src='https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp' alt='banner' />
    <Box p={'4'} bgGradient='linear(to-r, #F8BBD0, #b3d4fc)' >
        <Button mr={'3'} bg={'white'} color={'black'} border='1px solid black'>All</Button>
        <Button mr={'3'} bg={'white'} color={'black'} border='1px solid black'>Try at Home</Button>
        <Button mr={'3'} bg={'white'} color={'black'} border='1px solid black'>Designs in Store</Button>
        <Button mr={'3'} bg={'white'} color={'black'} border='1px solid black'>Fast Delievery</Button>
        <Button mr={'3'} bg={'white'} color={'black'} border='1px solid black'>New in</Button>
    </Box>
    <Box display={'grid'}  mt={'10px'} gridTemplateColumns= {{base:'27% 73%',sm:"27% 73%"}}>
        
        {/*LEFT SIDEBAR */}
        <Box  p={'8%'}>
            <ProductSidebar/>
        </Box>

        {/* RIGHT PRODUCT PAGE */}
        <Box p={'3'} display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} gap={'10px'} >
            {
                data.map((el)=>(<ProductCard/>))
            }
        </Box>


    </Box>
    </Box>
} 


const data = [1,2,3,4,5,6,8,9]
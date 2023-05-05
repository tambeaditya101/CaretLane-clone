import { Box, Image,Button, Heading} from "@chakra-ui/react";
import ProductSidebar from "../components/ProductSidebar";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { getProducts } from "../redux/Product/action";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../baseurl";

export default function ProductPage(){

    const dispatch = useDispatch()
    const {data,isLoading} = useSelector((state)=>state.productReducer)
    const [params,setParams] = useSearchParams()
    const location = useLocation()
    
    let obj = {
        params:{
            minPrice : params.get("minPrice"),
            maxPrice : params.get("maxPrice"),
            type : params.get("type"),
            minWeight : params.get("minWeight"),
            maxWeight : params.get("maxWeight")
        }
    }
    
    useEffect(()=>{
        dispatch(getProducts(obj))
    },[location])


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
        <Box>
            {
                isLoading?
                <Heading mt={'5'} fontSize={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' >
                    Loding....
                </Heading>:
                <Box>
                {
                    data.length==0?<Heading textAlign={'center'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' mt={'155'} fontSize={'40px'} >No Products available of this type</Heading>:<Box p={'3'} display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} gap={'10px'}>
                        {
                            data?.map((el)=>(<ProductCard key={el._id} {...el} />))
                        }
                        </Box>
                }
                </Box>
            }
        </Box>


    </Box>
    </Box>
} 


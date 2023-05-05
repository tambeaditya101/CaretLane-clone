import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



export default function ProductSidebar(){

    const [params,setParams] = useSearchParams()

    const initialMinPrice = params.get('minPrice')
    const initialMaxPrice = params.get('maxPrice')
    const initialMinWeight = params.get('minWeight')
    const initialMaxWeight = params.get('maxWeight')
    const initialType= params.get('type')

    const [minPriceRange,setMinPriceRange] = useState(initialMinPrice || "")
    const [maxPriceRange,setMaxPriceRange] = useState(initialMaxPrice || "")
    const [minWeightRange,setMinWeightRange] = useState(initialMinWeight || "")
    const [maxWeightRange,setMaxWeightRange] = useState( initialMaxWeight || "")
    const [type,setType] = useState( initialType || "")


    const handlePriceRange = (e)=>{
        let value = e.target.value;
        if(value=='under5000'){
            setMinPriceRange('0')
            setMaxPriceRange('5000')
        }
        else if(value=='5001-10001'){
            setMinPriceRange('5001')
            setMaxPriceRange('10001')
        }
        else if(value=='10001-15000'){
            setMinPriceRange('10001')
            setMaxPriceRange('15000')
        }
        else if(value=='15001-20000'){
            setMinPriceRange('15001')
            setMaxPriceRange('20000')
        }
        else if(value=='20001-30000'){
            setMinPriceRange('20001')
            setMaxPriceRange('30000')
        }
        else if(value=='above30000'){
            setMinPriceRange('30000')
            setMaxPriceRange('1000000')
        }
    }

    const handleType = (e)=>{
        const value = e.target.value;
        setType(value)
    }

    const handleWeightRange = (e)=>{
        let value = e.target.value;
        if(value=='0-2'){
            setMinWeightRange('0')
            setMaxWeightRange('2')
        }
        else if(value=='2-5'){
            setMinWeightRange('2')
            setMaxWeightRange('5')
        }
        else if(value=='5-10'){
            setMinWeightRange('5')
            setMaxWeightRange('10')
        }
        else if(value=='10-20'){
            setMinWeightRange('10')
            setMaxWeightRange('20')
        }
    }

    useEffect(()=>{
        let params = {}

        minPriceRange && (params.minPrice=minPriceRange)
        minPriceRange && (params.maxPrice=maxPriceRange)

        type && (params.type=type)

        minWeightRange && (params.minWeight=minWeightRange)
        maxWeightRange && (params.maxWeight=maxWeightRange)

        setParams(params)
      },[minPriceRange,type,minWeightRange])



    return <Box border='1px solid #ECEFF1' borderRadius='20px'  >
        <Box borderTopRadius='20px' bg='#F5F5F5' textAlign='center' p={'5%'}  >Filter By</Box>
        <Box p={'5%'} >
            <Box fontWeight='500' fontSize={'22px'} >Price</Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='price' value='under5000' onChange={(e)=>handlePriceRange(e)} style={{marginRight:'10px'}} defaultChecked={minPriceRange=='0'} /><label>Under ₹5,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='price' value='5001-10001' onChange={(e)=>handlePriceRange(e)} style={{marginRight:'10px'}} defaultChecked={minPriceRange=='5001'} /><label>₹5,001  - ₹10,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='price' value='10001-15000' onChange={(e)=>handlePriceRange(e)} style={{marginRight:'10px'}} defaultChecked={minPriceRange=='10001'} /><label>₹10,001  - ₹15,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='price' value='15001-20000' onChange={(e)=>handlePriceRange(e)} style={{marginRight:'10px'}} defaultChecked={minPriceRange=='15001'} /><label>₹15,001  - ₹20,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='price' value='20001-30000' onChange={(e)=>handlePriceRange(e)} style={{marginRight:'10px'}} defaultChecked={minPriceRange=='20001'} /><label>₹20,001  - ₹30,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='price' value='above30000' onChange={(e)=>handlePriceRange(e)} style={{marginRight:'10px'}} defaultChecked={minPriceRange=='30000'} /><label>Above ₹30,000  </label></Box>
        </Box>
        <Box p={'5%'} borderTop='1px solid #F5F5F5' >
            <Box fontWeight='500' fontSize={'22px'} >Product Type</Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} name='type' value='Earing' onChange={(e)=>handleType(e)} defaultChecked={type=='Earing'}  /><label>Earing</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} name='type' value='Rings' onChange={(e)=>handleType(e)} defaultChecked={type=='Rings'}  /><label>Rings</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} name='type' value='Pendants' onChange={(e)=>handleType(e)} defaultChecked={type=='Pendants'}  /><label>Pendants</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} name='type' value='Bracelets' onChange={(e)=>handleType(e)} defaultChecked={type=='Bracelets'}  /><label>Bracelets</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} name='type' value='Bangles' onChange={(e)=>handleType(e)} defaultChecked={type=='Bangles'}  /><label>Bangles </label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} name='type' value='Chains' onChange={(e)=>handleType(e)}  defaultChecked={type=='Chains'} /><label>Chains</label></Box>
        </Box>
        <Box p={'5%'} borderTop='1px solid #F5F5F5' >
            <Box fontWeight='500' fontSize={'22px'}>Weight Ranges</Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='weight' style={{marginRight:'10px'}} onChange={(e)=>handleWeightRange(e)} value='0-2'  defaultChecked={minWeightRange=='0'} /><label>0-2 g</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='weight' style={{marginRight:'10px'}} onChange={(e)=>handleWeightRange(e)} value='2-5'  defaultChecked={minWeightRange=='2'} /><label>2-5 g</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='weight' style={{marginRight:'10px'}} onChange={(e)=>handleWeightRange(e)} value='5-10' defaultChecked={minWeightRange=='5'} /><label>5-10 g</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' name='weight' style={{marginRight:'10px'}} onChange={(e)=>handleWeightRange(e)} value='10-20' defaultChecked={minWeightRange=='10'} /><label>10-20 g</label></Box>
        </Box>
    </Box>
}
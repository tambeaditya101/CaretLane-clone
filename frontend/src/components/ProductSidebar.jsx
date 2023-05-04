import { Box } from "@chakra-ui/react";

export default function ProductSidebar(){
    return <Box border='1px solid #ECEFF1' borderRadius='20px'  >
        <Box borderTopRadius='20px' bg='#F5F5F5' textAlign='center' p={'5%'}  >Filter By</Box>
        <Box p={'5%'} >
            <Box fontWeight='500' fontSize={'22px'} >Price</Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Under ₹5,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>₹5,001  - ₹10,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>₹10,001  - ₹15,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>₹15,001  - ₹20,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>₹20,001  - ₹30,000</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>₹30,001  - ₹40,000  </label></Box>
        </Box>
        <Box p={'5%'} borderTop='1px solid #F5F5F5' >
            <Box fontWeight='500' fontSize={'22px'} >Product Type</Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Earing</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Rings</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Necklaces</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Pendants</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Bracelets</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Bangles </label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>Chains</label></Box>
        </Box>
        <Box p={'5%'} borderTop='1px solid #F5F5F5' >
            <Box fontWeight='500' fontSize={'22px'}>Weight Ranges</Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>0-2 g</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>2-5 g</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>5-10 g</label></Box>
            <Box fontSize='18px' my={'2'} ><input type='radio' style={{marginRight:'10px'}} /><label>10-20 g</label></Box>
        </Box>
    </Box>
}
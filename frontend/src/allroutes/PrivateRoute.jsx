import { useToast } from "@chakra-ui/react"
import { Navigate, useNavigate } from "react-router-dom"

export const PrivateRoute = ({children})=>{
    const navigate = useNavigate()
    const toast = useToast()
    if(!localStorage.getItem('token')){
        toast({
            title: 'Please Login First',
            status: 'error',
            position : 'top',
            duration: 3000,
            isClosable: true,
        })
        return <Navigate to='/login' />
    }

    return children
}

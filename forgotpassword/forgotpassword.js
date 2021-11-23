import React, {useState,useEffect} from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import { createHashHistory } from 'history'
import './forgotpassword.css'
import { BsFillArrowLeftSquareFill , BsArrowLeft } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi"
import { Button, ButtonGroup, Stack, HStack, Flex, Text } from "@chakra-ui/react"
import { FaWhatsapp, FaDiscord, FaTwitter } from 'react-icons/fa'
import { AiOutlineGoogle } from 'react-icons/ai'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react"
import fpimg from '../images/EC_Auth_ForgotPassword.svg'


export default function ForgotPassword({ navigation }){
    const [userEmail,setUserEmail] = useState('')
    const navigate = useNavigate()
    const history = createHashHistory()
    const resetPassword=()=>{
        alert('reset password')
    }
    return(
        <div className="fp-container">
            <div className="fp-form">
                <div className="fp-form-header item-1">
                    <button className="back-btn" onClick={()=>navigate('/')}>
                        <FiArrowLeft size="60%" color="white"></FiArrowLeft>
                    </button>
                </div>
                <div className="fp-form-body">
                    <div className="fp-form-body-content item-2">
                    <Stack spacing="3">
                        <Text fontSize="3xl" fontWeight="700" color="black">Forgot your password?</Text>
                        <Text fontSize="sm" lineHeight="normal" fontWeight="500" color="rgb(142, 156, 170)">Don't worry. Enter your registered E-mail below to receive password reset instructions.</Text>
                        <form action="">
                            <Stack spacing={3}>
                                <FormControl id="email" border="0px">
                                    <FormLabel fontWeight="600" fontSize="70%">Email</FormLabel>
                                    <Input type="text" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} placeholder="john.doe@example.com" fontSize="80%" />
                                </FormControl>
                                <Stack spacing={6}>
                                    <Text fontSize="xs" fontWeight="600">Remember password? <a className="goto-login" href="/login">Login</a></Text>
                                    <Button borderRadius="0.6rem" backgroundColor="rgb(8, 123, 255)" color="white" _hover={{backgroundColor:"rgb(0, 101, 196)"}}
                                    onClick={()=>resetPassword()}>
                                        Send
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Stack>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className="fp-graphic">
                <div className="fp-graphic-header">
                    <div className="ec-logo-div">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEwaI8wDCGyrA/company-logo_200_200/0/1625805189895?e=2159024400&v=beta&t=pS7w-hq5UxnKb3VAkV2S1ofvRn3WgPM_RpWXAqBUsYw" alt="" />
                        <p className="ec-logo-text">Engineer's Cradle</p>
                    </div>
                </div>
                {/* <BsFillArrowLeftSquareFill alignSelf="flex-start" justifySelf="center"/> */}
                <div className="fp-graphic-image-div">
                    {/* https://image.freepik.com/free-vector/office-background-video-conferencing_23-2148638212.jpg */}
                    <img className="fp-graphic-image" src={fpimg} alt="" />
                </div>
                {/* <div></div> */}
            </div>
        </div>
    )
}

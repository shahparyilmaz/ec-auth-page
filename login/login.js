import React, {useState,useEffect} from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import { createHashHistory } from 'history'
import './login.css'
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
import loginimg from '../images/EC_Auth_Login.svg'


export default function Login(){
    const [logInDetails,setLogInDetails] = useState({
        email:'',
        password:''
    })
    const handleLoginChage=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setLogInDetails({...logInDetails,[name]:value})
    }
    const navigate = useNavigate()
    const history = createHashHistory()
    const handleLogIn=()=>{
        if(logInDetails.email!='' && logInDetails.password.length>=6){
            setLogInDetails({
                firstName:'',
                lastName:'',
                email:'',
                password:'',
            })
            alert('log in successful')
            return
        }
        alert('log in unsuccessful')
    }
    const continueWithGoogle=()=>{
        alert('continue with google')
    }
    return(
        <div className="login-container">
            <div className="login-graphic">
                <div className="login-graphic-header">
                    <button className="back-btn" onClick={()=>navigate('/')}>
                        <FiArrowLeft size="60%" color="white"></FiArrowLeft>
                    </button>
                    <div className="ec-logo-div">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEwaI8wDCGyrA/company-logo_200_200/0/1625805189895?e=2159024400&v=beta&t=pS7w-hq5UxnKb3VAkV2S1ofvRn3WgPM_RpWXAqBUsYw" alt="" />
                        <p className="ec-logo-text">Engineer's Cradle</p>
                    </div>
                    <div className="back-btn-opposite"></div>
                </div>
                {/* <BsFillArrowLeftSquareFill alignSelf="flex-start" justifySelf="center"/> */}
                <div className="login-graphic-image-div">
                    {/* https://image.freepik.com/free-vector/office-background-video-conferencing_23-2148638212.jpg */}
                    <img className="login-graphic-image" src={loginimg} alt="" />
                </div>
                {/* <div></div> */}
            </div>
            <div className="login-form">
                <div className="login-form-header">
                    <Button height="70%" minHeight="30px" borderRadius="0.5rem" borderWidth="1px" borderStyle="solid" borderColor="rgb(8, 123, 255)" color="rgb(8, 123, 255)" backgroundColor="white" 
                    _hover={{backgroundColor:"rgb(8, 123, 255)",color:"white"}} onClick={()=>navigate('/signup')}>
                        Sign Up
                    </Button>
                </div>
                <div className="login-form-body">
                    <div className="login-form-body-content">
                    <Stack spacing="3">
                        <Text fontSize="3xl" fontWeight="700" color="black">Welcome Back!</Text>
                        <form action="">
                            <Stack spacing={3}>
                            <FormControl id="email" border="0px">
                                <FormLabel fontWeight="600" fontSize="70%">Email or Username</FormLabel>
                                <Input type="text" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="email" value={logInDetails.email} onChange={(e)=>handleLoginChage(e)} placeholder="john.doe@example.com" fontSize="80%" />
                            </FormControl>
                            <FormControl id="password" border="0px">
                                <FormLabel fontWeight="600" fontSize="70%">Password</FormLabel>
                                <Input type="password" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="password" value={logInDetails.password} onChange={(e)=>handleLoginChage(e)} placeholder="********" fontSize="80%" />
                            </FormControl>
                            <Stack spacing={6}>
                            <a href="/forgotpassword">
                            <Text fontSize="xs" fontWeight="600" color="rgb(8, 123, 255)">I forgot my password</Text>
                            </a>
                            <Stack spacing={3}>
                            <Button borderRadius="0.6rem" backgroundColor="rgb(8, 123, 255)" color="white" _hover={{backgroundColor:"rgb(0, 101, 196)"}}
                            onClick={handleLogIn}>
                                Log In
                            </Button>
                            <Button borderRadius="0.6rem" borderWidth="1px" borderStyle="solid" borderColor="rgb(8, 123, 255)" color="rgb(8, 123, 255)" backgroundColor="white"
                            onClick={()=>continueWithGoogle()}>
                                <HStack spacing={1}>
                                    <AiOutlineGoogle/><span>Continue with Google</span>
                                </HStack>
                            </Button>
                            </Stack>
                            </Stack>
                            </Stack>
                        </form>
                    </Stack>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
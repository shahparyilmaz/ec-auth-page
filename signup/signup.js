import React, {useState,useEffect} from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import { createHashHistory } from 'history'
import './signup.css'
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
import signupimg from '../images/EC_Auth_SignUp.svg'


export default function SignUp(){
    const [signUpDetails,setSignUpDetails] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })
    const [confirmPassword,setConfirmPassword] = useState('')
    const handleSignUpChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setSignUpDetails({...signUpDetails,[name]:value})
    }
    const navigate = useNavigate()
    const history = createHashHistory()
    const handleSignUp=()=>{
        if(confirmPassword!=signUpDetails.password){
            alert("psswords don't match")
            return
        }
        if(signUpDetails.firstName!='' && signUpDetails.lastName!='' && signUpDetails.email!='' && signUpDetails.password.length>=6){
            setSignUpDetails({
                firstName:'',
                lastName:'',
                email:'',
                password:'',
            })
            setConfirmPassword('')
            alert('sign up successful')
            return
        }
        alert('sign up unsuccessful')
    }
    const continueWithGoogle=()=>{
        alert('continue with google')
    }
    return(
        <div className="signup-container">
            <div className="signup-graphic">
                <div className="signup-graphic-header">
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
                <div className="signup-graphic-image-div">
                    <img className="signup-graphic-image" src={signupimg} alt="" />
                </div>
                {/* <div></div> */}
            </div>
            <div className="signup-form">
                <div className="signup-form-header">
                    {/* <Button height="35%" maxHeight="40px" borderRadius="0.5rem" borderWidth="1px" borderStyle="solid" borderColor="rgb(8, 123, 255)" color="rgb(8, 123, 255)" backgroundColor="white">
                        Log In
                    </Button> */}
                    <Button height="70%" minHeight="40px" borderRadius="0.5rem" borderWidth="1px" borderStyle="solid" borderColor="rgb(8, 123, 255)" color="rgb(8, 123, 255)" backgroundColor="white"
                     _hover={{backgroundColor:"rgb(8, 123, 255)",color:"white"}} onClick={()=>navigate('/login')}>
                        Log In
                    </Button>
                </div>
                <div className="signup-form-body">
                    <Stack spacing={3}>
                    <div className="signup-form-title">
                        <Text fontSize="3xl" fontWeight="700" color="black">Welcome to Engineer's Cradle</Text>
                    </div>
                    <form action="">
                        <Stack spacing={7}>
                            <div className="signup-form-body-content">
                                <FormControl className="grid-item-1" border="0px">
                                    <FormLabel fontWeight="600" fontSize="70%">First Name</FormLabel>
                                    <Input type="text" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="firstName" value={signUpDetails.firstName} onChange={(e)=>handleSignUpChange(e)} placeholder="John" fontSize="80%" />
                                </FormControl>
                                <FormControl className="grid-item-2" border="0px">
                                    <FormLabel fontWeight="600" fontSize="70%">Last Name</FormLabel>
                                    <Input type="text" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="lastName" value={signUpDetails.lastName} onChange={(e)=>handleSignUpChange(e)} placeholder="Doe" fontSize="80%" />
                                </FormControl>
                                <FormControl className="grid-item-3" border="0px">
                                    <FormLabel fontWeight="600" fontSize="70%">Email</FormLabel>
                                    <Input type="email" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="email" value={signUpDetails.email} onChange={(e)=>handleSignUpChange(e)} placeholder="john.doe@example.com" fontSize="80%" />
                                </FormControl>
                                <FormControl className="grid-item-4" border="0px">
                                    <FormLabel fontWeight="600" fontSize="70%">Password</FormLabel>
                                    <Input type="password" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="password" value={signUpDetails.password} onChange={(e)=>handleSignUpChange(e)} placeholder="********" fontSize="80%" />
                                </FormControl>
                                <FormControl className="grid-item-5" border="0px">
                                    <FormLabel fontWeight="600" fontSize="70%">Confirm Password</FormLabel>
                                    <Input type="password" border="0" backgroundColor="rgb(225, 236, 247)" borderRadius="0.5rem" name="confirmpassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="********" fontSize="80%" />
                                </FormControl>
                            </div>
                            <div>
                                <Stack spacing={3}>
                                    <Button borderRadius="0.6rem" backgroundColor="rgb(8, 123, 255)" color="white" _hover={{backgroundColor:"rgb(0, 101, 196)"}}
                                    onClick={handleSignUp}>
                                        Sign Up
                                    </Button>
                                    <Button borderRadius="0.6rem" borderWidth="1px" borderStyle="solid" borderColor="rgb(8, 123, 255)" color="rgb(8, 123, 255)" backgroundColor="white"
                                    onClick={()=>continueWithGoogle()}>
                                        <HStack spacing={1}>
                                            <AiOutlineGoogle/><span>Continue with Google</span>
                                        </HStack>
                                    </Button>
                                </Stack>
                            </div>
                        </Stack>
                    </form>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

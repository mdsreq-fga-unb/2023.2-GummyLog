import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Box,
    Button, 
    Text
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { REQUIRED_VALIDATION } from "../../services/req_validation";
import { useNavigate } from 'react-router-dom'


const UserRegisterForm = () => {
const navigate = useNavigate();
const initValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
};

  const [initialValue, setinitialValue] = useState(initValues)  
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(REQUIRED_VALIDATION("Name")),
    email: yup.string().email().required(REQUIRED_VALIDATION("Email")),
    password: yup.string().required(REQUIRED_VALIDATION("Password")).min(6,"Password must be min 6 character long"),
    confirmpassword: yup.string().when("password",(password,field) => password ? field.required(REQUIRED_VALIDATION("Confirm Password")).oneOf([yup.ref("password")],"Password and Confirm Password must be the same"):field)
  }).required();  

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  const onSubmit = (values, e) => { 
    console.log("Values::::::",values);

    e.target.reset();

    setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);

    navigate("/loginuser")
   }

  const onError = (error) => { 
    console.log("Error::::::",error);
   }

  return (
    <Box>
        {isSuccess && (
                <Text color="green.500" mb={4}>
                    User succesfully registered
                </Text>
            )}
        <form onSubmit={handleSubmit(onSubmit,onError)}>
            <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" type='text' bg='gray.100' {...register("name")}/>
                {
                    errors && errors.name &&
                
                <FormHelperText color='red.500'>{errors.name.message && errors.name.message}</FormHelperText>
                }
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" type='email' bg='gray.100' {...register("email")}/>
                {
                    errors && errors.email &&
                
                <FormHelperText color='red.500'>{errors.email.message && errors.email.message}</FormHelperText>
                }
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type='password' bg='gray.100' {...register("password")}/>
                {
                    errors && errors.password &&
                
                <FormHelperText color='red.500'>{errors.password.message && errors.password.message}</FormHelperText>
                }
            </FormControl>
            <FormControl>
                <FormLabel id="confirmpassword" htmlFor="confirmpassword">Confirm Password</FormLabel>
                <Input type='password' bg='gray.100' {...register("confirmpassword")}/>
                {
                    errors && errors.confirmpassword &&
                
                <FormHelperText color='red.500'>{errors.confirmpassword.message && errors.confirmpassword.message}</FormHelperText>
                }
            </FormControl>
            <Button type="submit" colorScheme='blue'>Submit</Button>
        </form>
    </Box>
  )
}

export default UserRegisterForm
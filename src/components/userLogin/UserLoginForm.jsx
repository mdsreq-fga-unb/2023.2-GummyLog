import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Box,
    Button
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { REQUIRED_VALIDATION } from "../../services/req_validation";

const UserRegisterForm = () => {
const initValues = {
    email: "",
    password: ""
};

  const [initialValue, setinitialValue] = useState(initValues)  

  const schema = yup.object().shape({
    email: yup.string().email().required(REQUIRED_VALIDATION("Email")),
    password: yup.string().required(REQUIRED_VALIDATION("Password")).min(6,"Password must be min 6 character long"),
  }).required();  

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  const onSubmit = (values) => { 
    console.log("Values::::::",values);
   }

  const onError = (error) => { 
    console.log("Error::::::",error);
   }

  return (
    <Box>
        <form onSubmit={handleSubmit(onSubmit,onError)}>
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
            <Button type="submit" colorScheme='blue'>Submit</Button>
        </form>
    </Box>
  )
}

export default UserRegisterForm
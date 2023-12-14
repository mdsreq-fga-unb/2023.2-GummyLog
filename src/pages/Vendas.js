import React from 'react';
import MarcasModal from '../components/Modal';
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Container,
    Select,
    Flex,
    Heading,
    Text,
    Box,
    Button,
    useToast,
} from "@chakra-ui/react";


const Vendas = () => {

    const toast = useToast()
    return (
        

        <Container 
        marginTop={'100px'} 
        bgColor='#E4E9EC' 
        justifyContent={"space-between"} 
        display="flex" 
        flexDirection="row" 
        width="600px">



            <Flex
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                width={"900px"}
                height={"max-content"}
                minHeight={"auto"}
            >
                <Heading>Registrar Venta</Heading>
                <Flex>
                    <FormControl >
                        <FormLabel></FormLabel>
                        <Input placeholder='ID' bgColor='#C5C1CD' color='#000000' _placeholder={{ color: '#666' }} borderRadius={10} width="300px" border="1px solid #1E1E1E" />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl >
                        <FormLabel></FormLabel>
                        <Input placeholder='dirección' bgColor='#C5C1CD' color='#000000' _placeholder={{ color: '#666' }} borderRadius={10} width="300px" mt={3} border="1px solid #1E1E1E"
                        />
                    </FormControl>

                </Flex>
                <Flex mt={1}  >

                    <Text maxWidth="300px" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu urna, accumsan non viverra
                    </Text>

                </Flex>

                <Flex mt={7}>
                    <Input
                        bgColor='#C5C1CD' color='#000000' _placeholder={{ color: '#666' }} borderRadius={10} width="300px" mt={3} border="1px solid #1E1E1E"
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        outlineColor={"#000000"}
                    />
                </Flex>
                <Flex mt={3}>
                    <FormControl >
                        <FormLabel></FormLabel>
                        <Input placeholder='cantidad:' bgColor='#C5C1CD' color='#000000' _placeholder={{ color: '#666' }} borderRadius={10} width="120px" mr={2} textAlign={"center"} border="1px solid #1E1E1E"
                        />
                    </FormControl>
                    <FormControl >
                        <FormLabel></FormLabel>
                        <Input placeholder='precio:' bgColor='#C5C1CD' color='#000000' _placeholder={{ color: '#666' }} borderRadius={10} width="120px" textAlign={"center"} border="1px solid #1E1E1E" />
                    </FormControl>
                </Flex>

                <Flex mt={9} >
                    <Button
                    onClick={() =>
                        toast({
                          title: "venta registrada exitosamente",
                          status: 'success',
                          isClosable: true,
                        })
                      }
                        mr={5}
                        bgColor='#1C1717'
                        width={"140px"}

                    >registrar Venta</Button>

                    <Button

                        bgColor='#C53131'
                    >cancelar</Button>
                </Flex>
            </Flex>




        </Container >
    )
}

export default Vendas;
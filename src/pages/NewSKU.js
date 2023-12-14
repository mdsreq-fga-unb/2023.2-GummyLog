import React from 'react';
import MarcasModal from '../components/Modal';
import {
    FormControl,
    FormLabel,
    Button,
    Textarea,
    Input,
    Container,
    Select,
    Flex,
} from "@chakra-ui/react";


const NewSKU = () => {
    return (
        <Container marginTop={'150px'} bgColor='#E4E9EC'>

            <Flex
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                width={"max-content"}
                height={"max-content"}
                minHeight={"auto"}
            >

                <Flex>
                    <FormControl >
                        <FormLabel></FormLabel>
                        <Input placeholder='Producto' bgColor='#C5C1CD' color='#000000' _placeholder={{ color: '#666' }} borderRadius={15} width="250px" />
                    </FormControl>
                </Flex>

                <Flex justifyContent="space-between" alignItems={"center"}>
                    <FormControl>
                        <Select placeholder='marcas' _placeholder={{ color: '#666' }} bgColor='#C5C1CD' _option={{ color: '#333' }} color='#000000' borderRadius={15}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>

                    <MarcasModal />

                </Flex>

                <Flex flexDirection={"column"} >
                    <FormControl>
                        <FormLabel></FormLabel>
                        <Input placeholder='Cantidad' _placeholder={{ color: '#666' }} bgColor='#C5C1CD' color='#000000' borderRadius={15} width="250px" />
                    </FormControl>

                    <FormControl mt={2}>
                        <FormLabel></FormLabel>
                        <Select placeholder='dirección' bgColor='#C5C1CD' color='#000000' _placeholder={{ color: '#666' }} borderRadius={15} width="250px">
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                        </Select>
                    </FormControl>


                </Flex>
                <Flex mt={5}>
                    <Textarea placeholder='descripción'
                        bgColor='#C5C1CD' color='#000000'
                        _placeholder={{ color: '#666' }}
                        borderRadius={15}
                        width="250px"
                        minHeight="100"
                        maxHeight="180"

                    />
                </Flex>

                <Flex mt={5}>
                    <Button
                        mr={5}
                        bgColor='#1C1717'
                        width={"140px"}

                    >Registrar Produto </Button>

                    <Button

                        bgColor='#C53131'
                    >Cancelar</Button>
                </Flex>

            </Flex>

        </Container>
    )
}

export default NewSKU;
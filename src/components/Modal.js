import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Button,
    useDisclosure,
    Flex,
    Text,
    List,
    ListItem,
} from '@chakra-ui/react';
import { FormInput } from './FormComponents/FormComponens';
import { SmallAddIcon, Search2Icon, MinusIcon } from '@chakra-ui/icons'


const MarcasModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    return (
        <>


            <Button onClick={onOpen} m={4} mr={'1px'} bgColor="#AA67B5" borderRadius={15} border="1px solid #000000" width={"122px"}
            >
                administrar
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={"xl"}
                scrollBehavior={scrollBehavior}

            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader align="center"> Marcas </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={10} justifyContent="space-between" >
                        <Flex justifyContent="space-between">
                            <Flex>
                                <FormControl >
                                    <FormLabel></FormLabel>
                                    <FormInput size={"10px"} placeholder=' marca' />
                                </FormControl>
                                <Button
                                    mt={2}
                                    onClick={null}
                                    ml={2} size={"xs"}
                                    borderRadius="100%"
                                    colorScheme='green'
                                >
                                    <SmallAddIcon w={3} h={4} />
                                </Button>
                            </Flex>

                            <Flex>
                                <FormControl>
                                    <FormLabel></FormLabel>
                                    <FormInput placeholder=' buscar' />
                                    <Search2Icon position="absolute" right="8px" top="50%" transform="translateY(-50%)" marginTop={1} />
                                </FormControl>
                            </Flex>
                        </Flex>


                        <Flex>

                                <List>
                                    <ListItem mt={2}>
                                        <Text color="white">
                                            <Button mr={2} onClick={null} ml={2} size={"xs"} borderRadius="100%" colorScheme='red'>
                                                <MinusIcon w={2} h={3} />
                                            </Button>
                                            Marca  1
                                        </Text>
                                    </ListItem>

                                    <ListItem mt={2}>
                                        <Text color="white">
                                            <Button mr={2} onClick={null} ml={2} size={"xs"} borderRadius="100%" colorScheme='red'>
                                                <MinusIcon w={2} h={4} />
                                            </Button>
                                            Marca  1
                                        </Text>
                                    </ListItem>

                                    <ListItem mt={2}>
                                        <Text color="white">
                                            <Button mr={2} onClick={null} ml={2} size={"xs"} borderRadius="100%" colorScheme='red'>
                                                <MinusIcon w={2} h={4} />
                                            </Button>
                                            Marca  1
                                        </Text>
                                    </ListItem>


                                </List>


                        </Flex>



                    </ModalBody>



                    <ModalFooter style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        
                        <Button onClick={onClose} colorScheme='red' mr={3}>
                            cancelar
                        </Button>
                        <Button colorScheme='blue' mr={3}>
                            salvar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}






export default MarcasModal;

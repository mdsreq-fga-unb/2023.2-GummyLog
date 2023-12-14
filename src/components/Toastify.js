import { useToast } from '@chakra-ui/react'


const Toastify = () => {
    const toast = useToast()
    const positions = [
        'top-right',
    ]
    return (
        <>
            onClick={() =>
                toast({
                    title: 'Estoque baixo.',
                    description: "está faltando item 2",
                    status: 'warning',
                    duration: 5000,
                    position: 'top-right',
                    isClosable: true,
                })
            }
        </>
    )

}

export default Toastify;


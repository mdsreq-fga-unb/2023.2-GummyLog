import NovoSKU from './pages/NovoSKU';
import { ChakraProvider, Box, theme, extendTheme } from "@chakra-ui/react";
import NewSKU from './pages/NewSKU';

function App() {
  return (
    <>

      <ChakraProvider theme={theme}>
        <Box bg="#E4E9EC" color='#000000' h="100vh" p={4}>
          <NewSKU />
        </Box>
      </ChakraProvider>

    </>


  );
}

export default App;

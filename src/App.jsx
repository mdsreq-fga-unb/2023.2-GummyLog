import { Box, Heading } from "@chakra-ui/react";
import Router from "./router";

function App() {
  return (
    <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
      <Heading mb={10}>GummyLog</Heading>
      <Router />
    </Box>
  );
}

export default App;

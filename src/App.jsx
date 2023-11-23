import { Box, Heading } from "@chakra-ui/react";
import Router from "./router";
import TaskTableProdutos from "./components/tabelaProdutos/TaskTableProdutos";
import Header from "./Components/Header";


function App() {
  return (
    <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
      <Header/>
      <Heading mb={10}></Heading>
      <Router />
      <TaskTableProdutos></TaskTableProdutos>
    </Box>
  );
}

export default App;

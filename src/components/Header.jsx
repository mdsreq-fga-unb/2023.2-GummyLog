import { Box, Flex, Heading, Button, Spacer } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box bg="#AA67B5" p={5} color="white" w="100%" position="fixed" top="0" left="0" zIndex="999">
      <Flex align="center" maxW="1000" mx="auto">
        <Heading as="h1" size="lg" fontFamily="'Sacramento', cursive">
          Gummy Log
        </Heading>
        <Spacer />
        <Button
          leftIcon={<SettingsIcon />}
          colorScheme="whiteAlpha"
          size="sm" fontSize="14px" width="120px"
        >
          Configurações
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;

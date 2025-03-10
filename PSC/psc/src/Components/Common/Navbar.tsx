import React from "react";
import { Box, Flex, Link, Text, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Define the Navbar component with React.FC (Functional Component) type
const Navbar: React.FC = () => {
  return (
    <Box boxShadow={"md"} p="2">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontSize="2xl" fontWeight="bold" color="red.600">
            Shopify
          </Box>
          <Box display="flex" w="40%" fontWeight={"bold"} alignItems="center" justifyContent={"space-around"}> 
            {/* Wrap RouterLink in Chakra UI Link for styling */}
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/products">
              Products
            </Link>
            <Link as={RouterLink} to="/about">
              About
            </Link>
            <Link as={RouterLink} to="/contact">
              Contact
            </Link>
            <Link as={RouterLink} to="/blog">
              Blog
            </Link>
            <Link as={RouterLink} to="/register">
              Register
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

import { Box, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const cartItems = useSelector((state)=>(state.cart.items))
  return (
    <Box boxShadow={"md"} p={"4"}>
      <Flex alignItems={"center"} justifyContent={"space-around"}>
        <Box fontSize={"2xl"} fontWeight={"bold"} color={"red.500"}>
          Shopify
        </Box>
        <Box fontWeight={"bold"} cursor={"pointer"} _hover={{color:"red.500"}}>
          <Link to='/products'>Products</Link>
        </Box>
        <Box fontWeight={"bold"} cursor={"pointer"} _hover={{color:"red.500"}}>
          <Link to='/blogs'>Blogs</Link>
        </Box>
        <Box fontWeight={"bold"} cursor={"pointer"} _hover={{color:"red.500"}}>
          <Link to="/cart">Cart({cartItems.length})</Link>
        </Box>
        <Box fontWeight={"bold"} cursor={"pointer"} _hover={{color:"red.500"}}>
                  <Button bg={"red.200"}>
                      <Link to="/register">Register</Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

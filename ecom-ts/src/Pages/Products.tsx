import { useEffect, useState } from "react"
import { Center, Grid, Spinner,Box, Image, Text, Flex,Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import {Product} from '../types/types'


const Products = () => {
  const [products, setProducts] = useState<Product[]>([]) //Array<Product>
  const [loading, setLoading] = useState<boolean>(true)
  const [err, setErr] = useState<string>("")
  const navigate = useNavigate()
  useEffect(() => {
      setLoading(true)
      fetch("https://dummyjson.com/products")
        .then((res => res.json()))
        .then((data) => {
          setProducts(data.products)
          setLoading(false)
        })
        .catch((error) => {
          console.log(err)
          setLoading(false)
          setErr(error.message)
        })
      
    
      
    }, [])
  console.log(products)
  
  if (loading) return
   <Spinner thickness='4px' color='blue.500' size='xl'/>
 
  return (
    <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
      {products.map((product) => (
        <Box position="relative" boxShadow={"md"} padding={"8"}>
          <Text position={"absolute"} bg={"blue.300"} padding="2" borderRadius={10} right="10">{ product.discountPercentage}% off</Text>
          <Image src={product.thumbnail} w="100%" />
          <Flex justifyContent={"space-between"}>          <Text fontWeight={"bold"}>{product.title }</Text>

          <Text fontWeight={"bold"} color={"blue.600"}>${product.price }</Text>
          </Flex>
          <Text marginTop={"10px"} fontWeight={"bold"} color={"red.500"}>{product.rating}/5</Text>
          <Text marginTop={"10px"} noOfLines={2}>{product.description}</Text>
          <Button onClick={()=>navigate(`/products/${product.id}`)} marginTop="10" bg="blue.500" color="white" width="100%" _hover={{bg:"blue.800"}}>View Details</Button>
          
        </Box>
      ))}
    </Grid>
  )
}

export default Products
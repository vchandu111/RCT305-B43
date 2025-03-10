import { useEffect, useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Button,
  VStack,
  Flex,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/RTK/cartSlice";

// Define TypeScript interfaces for the API data structure
interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail?: string; // Assuming there might be a thumbnail in the actual product data
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Box p={6} textAlign="center" color="gray.600">
        <Text fontSize="lg" fontWeight="medium">
          Loading products...
        </Text>
      </Box>
    );

  if (error)
    return (
      <Box
        p={6}
        textAlign="center"
        color="red.500"
        borderRadius="md"
        bg="red.50"
      >
        <Text fontSize="lg" fontWeight="medium">
          Error: {error}
        </Text>
      </Box>
    );

  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        mb={6}
        color="gray.800"
        borderBottom="3px solid"
        borderColor="blue.500"
        pb={2}
        display="inline-block"
      >
        Our Products
      </Text>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={8} mb={10}>
        {products.map((product) => (
          <Box
            onClick={() => navigate(`/products/${product.id}`)}
            key={product.id}
            boxShadow="lg"
            p={0}
            rounded="lg"
            bg="white"
            overflow="hidden"
            transition="all 0.3s ease"
            borderWidth="1px"
            borderColor="gray.200"
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box position="relative" h="180px" overflow="hidden" bg="gray.100">
              <Image
                src={product.thumbnail}
                alt={product.title}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.5s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
              {product.discountPercentage > 0 && (
                <Badge
                  position="absolute"
                  top={2}
                  right={2}
                  colorScheme="red"
                  fontSize="sm"
                  px={2}
                  py={1}
                  borderRadius="md"
                  fontWeight="bold"
                  bg="blue.200"
                >
                  {Math.round(product.discountPercentage)}% OFF
                </Badge>
              )}
            </Box>

            <VStack
              gap={3}
              align="stretch"
              p={4}
              flex="1"
              justifyContent="space-between"
            >
              <VStack align="stretch" gap={1}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Badge
                    colorScheme="blue"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {product.category}
                  </Badge>
                  <Text fontSize="xs" color="gray.500" fontWeight="medium">
                    {product.brand}
                  </Text>
                </Flex>

                <Text
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.800"
                  height="40px"
                >
                  {product.title}
                </Text>

                <HStack gap={2} mt={1}>
                  <Text fontSize="lg" fontWeight="bold" color="blue.600">
                    ${product.price.toFixed(2)}
                  </Text>

                  {product.discountPercentage > 0 && (
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textDecoration="line-through"
                    >
                      $
                      {(
                        product.price /
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </Text>
                  )}
                </HStack>

                <HStack mt={1}>
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    bg={product.stock > 0 ? "green.100" : "red.100"}
                    color={product.stock > 0 ? "green.700" : "red.700"}
                    px={2}
                    py={0.5}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="medium"
                  >
                    {product.stock > 0
                      ? `In Stock (${product.stock})`
                      : "Out of Stock"}
                  </Box>
                </HStack>
              </VStack>

              <Button
                bg="blue.500"
                color="white"
                size="md"
                borderRadius="md"
                fontWeight="semibold"
                w="100%"
                mt={2}
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;

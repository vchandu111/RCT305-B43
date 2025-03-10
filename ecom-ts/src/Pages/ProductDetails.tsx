import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  Badge,
  Spinner,
  Alert,
  AlertIcon,
  HStack,
  Center,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
  Divider
} from '@chakra-ui/react';
import { 
  Star, 
  Heart, 
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Package
} from 'lucide-react';
import { useDispatch } from 'react-redux'
import { addToCart } from '../RTK/cartSlice';
// Define Product type
import { Product } from '../types/types';

const ProductDetails = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const { id } = useParams<{id: string}>();
    const toast = useToast();
    const dispatch = useDispatch()
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error.message);
      });
  }, [id]);

  const handleAddToCart = (product:Product) => {
      //dispatch(addToCart(product))
      dispatch(addToCart(product))
  };

  const calculateDiscountedPrice = (price: number, discountPercentage: number) => {
    return (price - (price * discountPercentage / 100)).toFixed(2);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Render rating stars with Lucide icons
  const renderStars = (rating: number) => {
    return (
      <HStack spacing={1}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < Math.floor(rating) ? "#FFB400" : "none"}
            color={i < Math.floor(rating) ? "#FFB400" : "#CBD5E0"}
          />
        ))}
        <Text fontSize="sm" color="gray.500">({rating})</Text>
      </HStack>
    );
  };

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Center>
    );
  }

  if (error) {
    return (
      <Container maxW="container.lg" py={8}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxW="container.lg" py={8}>
        <Alert status="warning">
          <AlertIcon />
          Product not found
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {/* Product Images */}
        <Box>
          <Box 
            borderRadius="md" 
            overflow="hidden" 
            boxShadow="sm"
            position="relative"
          >
            <Image
              src={product.images[activeImageIndex] || product.thumbnail}
              alt={product.title}
              fallbackSrc="/api/placeholder/500/500"
              w="100%"
              h={{ base: "300px", md: "400px" }}
              objectFit="contain"
            />
            
            {product.discountPercentage > 0 && (
              <Badge
                position="absolute"
                top="4"
                right="4"
                colorScheme="red"
                fontSize="sm"
                fontWeight="bold"
                borderRadius="md"
                px={2}
                py={1}
              >
                {product.discountPercentage}% OFF
              </Badge>
            )}
          </Box>
          
          {/* Image thumbnails */}
          {product.images.length > 1 && (
            <Flex mt={4} gap={2}>
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  borderWidth={activeImageIndex === index ? "2px" : "1px"}
                  borderColor={activeImageIndex === index ? "blue.500" : "gray.200"}
                  borderRadius="md"
                  overflow="hidden"
                  cursor="pointer"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image
                    src={img}
                    fallbackSrc="/api/placeholder/80/80"
                    alt={`${product.title} - view ${index + 1}`}
                    boxSize="60px"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </Flex>
          )}
        </Box>

        {/* Product Details */}
        <Stack spacing={4}>
          <Box>
            <HStack mb={1}>
              <Badge colorScheme="blue">{product.category}</Badge>
              <Badge colorScheme="purple">{product.brand}</Badge>
            </HStack>
            
            <Heading size="lg" fontWeight="bold" mb={2}>
              {product.title}
            </Heading>
            
            <HStack mb={4}>
              {renderStars(product.rating)}
              <Text fontSize="sm" color="gray.500">SKU: {product.sku}</Text>
            </HStack>
            
            <HStack mb={4}>
              {product.discountPercentage > 0 ? (
                <>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                    ${calculateDiscountedPrice(product.price, product.discountPercentage)}
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.500"
                    textDecoration="line-through"
                  >
                    ${product.price.toFixed(2)}
                  </Text>
                </>
              ) : (
                <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                  ${product.price.toFixed(2)}
                </Text>
              )}
              
              <Badge 
                colorScheme={product.stock > 10 ? "green" : product.stock > 0 ? "orange" : "red"}
              >
                {product.stock > 10 
                  ? "In Stock" 
                  : product.stock > 0 
                    ? `Low Stock: ${product.stock} left` 
                    : "Out of Stock"}
              </Badge>
            </HStack>
          </Box>
          
          <Text>{product.description}</Text>
          
          <Divider my={2} />
          
          {/* Quantity and Add to Cart */}
          <HStack>
            <Text fontWeight="medium">Quantity:</Text>
            <NumberInput
              size="md"
              maxW={24}
              defaultValue={1}
              min={1}
              max={product.stock}
              value={quantity}
              onChange={(valueString) => setQuantity(parseInt(valueString))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          
          <HStack spacing={4} pt={2}>
            <Button 
              leftIcon={<ShoppingCart size={18} />}
              colorScheme="blue"
              isDisabled={product.stock <= 0}
              onClick={()=>handleAddToCart(product)}
              size="md"
              flexGrow={1}
            >
              Add to Cart
            </Button>
            <Button
              leftIcon={<Heart size={18} />}
              variant="outline"
              colorScheme="red"
              size="md"
            >
              Wishlist
            </Button>
          </HStack>
          
          <Divider my={2} />
          
          {/* Key Information */}
          <SimpleGrid columns={2} spacing={4}>
            <HStack>
              <Truck size={16} />
              <Text fontSize="sm">{product.shippingInformation}</Text>
            </HStack>
            <HStack>
              <Shield size={16} />
              <Text fontSize="sm">{product.warrantyInformation}</Text>
            </HStack>
            <HStack>
              <RotateCcw size={16} />
              <Text fontSize="sm">{product.returnPolicy}</Text>
            </HStack>
            <HStack>
              <Package size={16} />
              <Text fontSize="sm">Min order: {product.minimumOrderQuantity}</Text>
            </HStack>
          </SimpleGrid>
        </Stack>
      </SimpleGrid>

      {/* Tabs Section */}
      <Box mt={8}>
        <Tabs colorScheme="blue" variant="line">
          <TabList>
            <Tab>Description</Tab>
            <Tab>Specifications</Tab>
            <Tab>Reviews ({product.reviews.length})</Tab>
          </TabList>
          
          <TabPanels>
            <TabPanel>
              <Text>{product.description}</Text>
            </TabPanel>
            
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box>
                  <Heading size="sm" mb={2}>Dimensions</Heading>
                  <Text>Width: {product.dimensions.width} cm</Text>
                  <Text>Height: {product.dimensions.height} cm</Text>
                  <Text>Depth: {product.dimensions.depth} cm</Text>
                  <Text>Weight: {product.weight} kg</Text>
                </Box>
                
                <Box>
                  <Heading size="sm" mb={2}>Additional Info</Heading>
                  <Text>Brand: {product.brand}</Text>
                  <Text>Category: {product.category}</Text>
                  <Text>Barcode: {product.meta.barcode}</Text>
                </Box>
              </SimpleGrid>
            </TabPanel>
            
            <TabPanel>
              {product.reviews.length > 0 ? (
                <Stack spacing={4} divider={<Divider />}>
                  {product.reviews.map((review, index) => (
                    <Box key={index}>
                      <HStack mb={1}>
                        <HStack spacing={1}>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={i < review.rating ? "#FFB400" : "none"}
                              color={i < review.rating ? "#FFB400" : "#CBD5E0"}
                            />
                          ))}
                        </HStack>
                        <Text fontWeight="medium" fontSize="sm">
                          {review.reviewerName}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {formatDate(review.date)}
                        </Text>
                      </HStack>
                      <Text mt={1}>{review.comment}</Text>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Text>No reviews yet</Text>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default ProductDetails;
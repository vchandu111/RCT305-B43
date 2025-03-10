import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  Button,
  VStack,
  Badge,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom"; // We'll use React Router for handling routing

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Product {
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

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>(); // This will grab the ID from the URL

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <Box p={6} textAlign="center">
        Loading...
      </Box>
    );
  if (error)
    return (
      <Box p={6} textAlign="center" color="red.500">
        Error: {error}
      </Box>
    );
  if (!product)
    return (
      <Box p={6} textAlign="center">
        Product not found
      </Box>
    );

  return (
    <Box p={6} minH="100vh">
      <VStack gap={4} align="stretch">
        <Image src={product.thumbnail} alt={product.title} borderRadius="lg" />

        <VStack align="stretch">
          <Text fontSize="2xl" fontWeight="bold">
            {product.title}
          </Text>
          <Text color="gray.500">{product.description}</Text>

          <Flex justifyContent="space-between" alignItems="center">
            <Badge colorScheme="green">{product.category}</Badge>
            <Text fontSize="lg" color="green.500">
              ${product.price.toFixed(2)}
            </Text>
          </Flex>

          <Button colorScheme="blue">Add to Cart</Button>


          <VStack align="start">
            <Text fontSize="md" fontWeight="bold">
              Product Details:
            </Text>
            <Text>Brand: {product.brand}</Text>
            <Text>SKU: {product.sku}</Text>
            <Text>Weight: {product.weight}kg</Text>
            <Text>
              Dimensions: {product.dimensions.width} x{" "}
              {product.dimensions.height} x {product.dimensions.depth} cm
            </Text>
            <Text>
              Stock:{" "}
              {product.stock > 0
                ? `In stock (${product.stock})`
                : "Out of stock"}
            </Text>
            <Text>Warranty: {product.warrantyInformation}</Text>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ProductDetail;

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
        createdAt: string; // This could be Date type if you plan to convert string to Date object
        updatedAt: string; // This could be Date type if you plan to convert string to Date object
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
  }
  
  interface Review {
    rating: number;
    comment: string;
    date: string; // This could be Date type if you plan to convert string to Date object
    reviewerName: string;
    reviewerEmail: string;
  }
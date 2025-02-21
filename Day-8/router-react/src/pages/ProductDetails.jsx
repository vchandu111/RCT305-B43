import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  //urlSearchParams - JS
  // useParams() -> hook
  console.log(useParams());
  const { productID } = useParams();
  const navigate = useNavigate();
  const fetchProduct = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productID}`
    );
    console.log(res.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {/* <Link to="/products">
        <button>Go Back</button>
      </Link> */}

      {/* <button onClick={() => navigate("/products")}>Go Back</button> */}
      <button onClick={() => navigate(-2)}>Go Back</button>

      <div className="center">
        <h2>ProductDetails</h2>
      </div>
    </>
  );
};

export default ProductDetails;

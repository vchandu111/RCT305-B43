import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/product.css";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h4 className="product-title">{product.title}</h4>
              <p className="product-price">${product.price}</p>
              <Link to={`/products/${product.id}`} className="buy-btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;




// //js
// <button onClick="redirect("3")" > ViewDetails</button >


// function redirect(id) {
//     window.location.href = `productDetails.html/${id}`
// }

// //product.html/3

// const params = new URLSearchParams()
// const id = params.get("id")
// fetch("https://fakestoreapi.com/products/${id}")
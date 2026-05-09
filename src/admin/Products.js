import React, { useState } from "react";
import "./Products.css";

function Products() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price
    };

    console.log(newProduct);

    alert("Product Added (Temporary)");

    // clear form
    setName("");
    setPrice("");
  };

  return (


      <div className="product-container">

        <h2>Add Product</h2>

        <form onSubmit={handleSubmit} className="product-form">

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <button type="submit">Add Product</button>

        </form>

      </div>


  );
}

export default Products;
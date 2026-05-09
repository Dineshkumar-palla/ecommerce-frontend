import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import heroBg from "../assets/login-bg.jpg";

function Home() {

  // 🛒 Add to Cart Function
  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      cart[index].qty += 1;   // increase quantity
    } else {
      cart.push({ ...product, qty: 1 }); // new item
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart 🛒");
  };

  // 🛒 Product Data
  const products = [
    { id: 1, name: "Laptop", price: 50000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 2, name: "Phone", price: 20000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
    { id: 3, name: "Headphones", price: 3000, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb" },
    { id: 4, name: "Watch", price: 5000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49" },
    { id: 5, name: "Camera", price: 45000, image: "https://images.unsplash.com/photo-1467244757843-7d30a709703e" },

    { id: 6, name: "Shoes", price: 2500, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
    { id: 7, name: "Backpack", price: 1500, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { id: 8, name: "Sunglasses", price: 1200, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f" },
    { id: 9, name: "Keyboard", price: 2000, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3" },
    { id: 10, name: "Mouse", price: 800, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46" },

    { id: 11, name: "Gaming Chair", price: 12000, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91" },
    { id: 12, name: "Monitor", price: 15000, image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2" },
    { id: 13, name: "Tablet", price: 18000, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20" },
    { id: 14, name: "Speaker", price: 4000, image: "https://images.unsplash.com/photo-1531104985437-603d6490e6d4" },
    { id: 15, name: "Microphone", price: 3500, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" },

    { id: 16, name: "Gaming Console", price: 40000, image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8" },
    { id: 17, name: "Router", price: 2500, image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2" },
    { id: 18, name: "Power Bank", price: 1500, image: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b" },
    { id: 19, name: "Printer", price: 9000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6" },
    { id: 20, name: "Hard Disk", price: 5000, image: "https://images.unsplash.com/photo-1601737487795-dab272f52420" },

    { id: 21, name: "VR Headset", price: 30000, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" },
    { id: 22, name: "Drone", price: 60000, image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f" },
    { id: 23, name: "Tripod", price: 1200, image: "https://images.unsplash.com/photo-1576299090369-9067e4adca28" },
    { id: 24, name: "USB Cable", price: 300, image: "https://images.unsplash.com/photo-1572721546624-05bf65ad7679" },
    { id: 25, name: "Smart TV", price: 55000, image: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb" }
  ];

  return (
    <div>

      <Navbar />

      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <h1>Welcome to EzMart 🛒</h1>
        <p>Best products at best prices</p>
        <button>Shop Now</button>
      </div>

      {/* Products */}
      <div className="products">
        <h2>Featured Products</h2>

        <div className="product-grid">

          {products.map((item) => (
            <div className="card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              {/* 🔥 WORKING BUTTON */}
              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Home;
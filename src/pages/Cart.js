import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Cart.css";

function Cart() {

  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // Quantity
  const increaseQty = (i) => {
    let updated = [...cart];
    updated[i].qty += 1;
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQty = (i) => {
    let updated = [...cart];
    if (updated[i].qty > 1) {
      updated[i].qty -= 1;
    } else {
      updated.splice(i, 1);
    }
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove
  const removeItem = (i) => {
    let updated = [...cart];
    updated.splice(i, 1);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Pricing
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const tax = Math.floor(subtotal * 0.1); // 10%
  const shipping = subtotal > 0 ? 50 : 0;

  const total = subtotal + tax + shipping - discount;

  // Coupon logic
  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(100);
    } else {
      setDiscount(0);
      alert("Invalid Coupon ❌");
    }
  };

  return (
    <div>

      <Navbar />

      <div className="cart-container">

        {/* LEFT */}
        <div className="cart-left">

          <h2>My Shopping Bag</h2>

          {cart.map((item, i) => (
            <div className="cart-item" key={i}>

              <img src={item.image} alt={item.name} />

              <div className="details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <button onClick={() => removeItem(i)}>Remove</button>
              </div>

              {/* 🔥 Quantity moved to right */}
              <div className="qty-section">

                <p className="qty-label">Quantity</p>

                <div className="qty-pill">
                  <button onClick={() => decreaseQty(i)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(i)}>+</button>
                </div>


                <button className="buy-btn">Buy it now</button>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT */}
        <div className="cart-right">

          <h3>Summary</h3>

          <div className="summary-box">

            {/* Coupon */}
            <div className="coupon">
              <input
                placeholder="Enter coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button onClick={applyCoupon}>Apply</button>
            </div>

            <div className="row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="row">
              <span>Tax (10%)</span>
              <span>₹{tax}</span>
            </div>

            <div className="row">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            {discount > 0 && (
              <div className="row discount">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div className="row total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="checkout-btn">
              Checkout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;
import React from "react";
import "./Topbar.css";
import { FaUserCircle } from "react-icons/fa";

function Topbar({ setPage, onProfileClick }) {

  return (
    <div className="topbar">

      {/* LEFT SECTION */}
      <div className="top-left">

        <h2>
          <span style={{ color: "#ff7a00" }}>Ez</span>Mart
        </h2>

        <div className="menu">
          <span onClick={() => setPage("dashboard")}>Dashboard</span>
          <span onClick={() => setPage("orders")}>Orders</span>
          <span onClick={() => setPage("products")}>Products</span>
          <span onClick={() => setPage("customers")}>Customers</span>
          <span onClick={() => setPage("reports")}>Reports</span>
          <span onClick={() => setPage("discounts")}>Discounts</span>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="top-right" onClick={onProfileClick}>
        <FaUserCircle size={28} />

      </div>

    </div>
  );
}

export default Topbar;
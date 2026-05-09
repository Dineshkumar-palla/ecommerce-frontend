import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");

    alert("Logged out successfully 👋");
    navigate("/login");
  };

  return (
    <div style={styles.nav}>
      {/* Logo */}
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        🛒 EzMart
      </h2>

      {/* Right Side */}
      <div style={styles.right}>
        {/* Home */}
        <button style={styles.linkBtn} onClick={() => navigate("/")}>
          Home
        </button>

        {/* Cart */}
        <button style={styles.iconBtn} onClick={() => navigate("/cart")}>
          <FaCartArrowDown size={20} />
        </button>

        {/* User Section */}
        {user ? (
          <div style={{ position: "relative" }}>
            {/* User Button */}
            <button
              style={styles.iconBtn}
              onClick={() => setShowMenu(!showMenu)}
            >
              <CiUser size={22} />
            </button>

            {/* Dropdown */}
            {showMenu && (
              <div style={styles.dropdown}>
                <p
                  style={styles.dropdownItem}
                  onClick={() => navigate("/account")}
                >
                  My Account
                </p>

                <hr style={{ margin: "5px 0" }} />

                <p style={styles.dropdownItem} onClick={handleLogout}>
                  Log Out
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            style={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#111",
    color: "white",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  linkBtn: {
    background: "transparent",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },

  iconBtn: {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#222",
    color: "#ff7a00",
  },

  loginBtn: {
    background: "#ff7a00",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  dropdown: {
    position: "absolute",
    top: "45px",
    right: "0",
    background: "white",
    color: "black",
    width: "150px",
    borderRadius: "6px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    padding: "5px 0",
    zIndex: 999
  },

  dropdownItem: {
    padding: "10px 15px",
    margin: 0,
    cursor: "pointer",
  },
};

export default Navbar;
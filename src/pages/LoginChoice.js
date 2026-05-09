import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginChoice.css";
import bgImage from "../assets/login-bg.jpg";

function LoginChoice() {
    const navigate = useNavigate();

    return (
        <div
          className="container"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize:  "100%",
            backgroundPosition: "center"
          }}
        >
        <div className="card" style={{ background: "#1a1a1a" , width: "300px" ,maxWidth: "90%"}}>
                <h1>EzMart 🛒</h1>
                <p>Select your role</p>

                <button onClick={() => navigate("/login/user")} className="userBtn">
                    👤 User Login
                </button>

                <button onClick={() => navigate("/login/admin")} className="adminBtn">
                    🛠 Admin Login
                </button>
            </div>
        </div>
    );
}

export default LoginChoice;
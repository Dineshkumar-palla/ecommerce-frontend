import React, { useState } from "react";
import "./LoginForm.css";
import adminBg from "../assets/admin-bg.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {

    const navigate = useNavigate();   // 🔥 navigation
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post(
          "http://localhost:5000/admin/login",
          {
            email,
            password
          }
        );

        alert(res.data.message);

        navigate("/admin/dashboard");

      } catch (err) {
        alert(err.response?.data?.message || "Login failed ❌");
      }
    };

    return (
        <div
          className="container"
          style={{
            backgroundImage: `url(${adminBg})`,
            backgroundSize:  "100%"
          }}
        >
            <div className="card" style={{ background: "#1a1a1a" , width: "300px" }}>

                <h2>Admin Login</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Admin Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="passwordBox">
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={() => setShow(!show)}>
                          {show ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button type="submit">Login</button>

                </form>

            </div>
        </div>
    );
}

export default AdminLogin;
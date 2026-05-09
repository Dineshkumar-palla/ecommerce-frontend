import React, { useState } from "react";
import "./LoginForm.css";
import userBg from "../assets/user-bg.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UserLogin() {

      const [email, setEmail] = useState("");
      const navigate = useNavigate();
      const [password, setPassword] = useState("");   // ✅ add this
      const [show, setShow] = useState(false);        // ✅ add this
      const handleLogin = (e) => {
        e.preventDefault();

        // temporary login success
        localStorage.setItem("user", JSON.stringify({ email }));

        alert("Login Success ✅");

        navigate("/");   // go to home page
      };

    return (
        <div
          className="container"
          style={{
            backgroundImage: `url(${userBg})`,
            backgroundSize:  "100%"
          }}
        >
            <div className="card"style={{ background: "#1a1a1a" , width: "300px" ,maxWidth: "90%" }}>

                <h2>User Login</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="passwordBox">
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Enter Password"
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

export default UserLogin;
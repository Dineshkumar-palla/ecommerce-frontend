import React, { useState } from "react";
import axios from "axios";

function AdminRegister() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/admin/register", {
      email,
      password
    });

    alert(res.data.message);
  };

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button>Create Admin</button>
    </form>
  );
}

export default AdminRegister;
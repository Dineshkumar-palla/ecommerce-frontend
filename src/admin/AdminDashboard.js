import React, { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import "./AdminDashboard.css";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

function AdminDashboard() {

  // 🔥 Page control
  const [page, setPage] = useState("dashboard");

  // 🔥 Profile toggle (YOU MISSED THIS)
  const [showProfile, setShowProfile] = useState(false);

  // 🔥 Profile states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email] = useState("admin@gmail.com");
  const [profilePic, setProfilePic] = useState("");

  // 📊 Chart Data
  const pieData = [
    { name: "Electronics", value: 1200 },
    { name: "Fashion", value: 950 },
    { name: "Home", value: 750 }
  ];

  const COLORS = ["#ff7a00", "#ffb347", "#ffd6a5"];

  const data = [
    { day: "Mon", sales: 4000 },
    { day: "Tue", sales: 3000 },
    { day: "Wed", sales: 5000 },
    { day: "Thu", sales: 4000 },
    { day: "Fri", sales: 6000 },
    { day: "Sat", sales: 7000 },
    { day: "Sun", sales: 6500 }
  ];

  // 🔥 Fetch Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/admin/profile/${email}`
        );

        setName(res.data.name || "");
        setPhone(res.data.phone || "");
        setProfilePic(res.data.profilePic || "");
      } catch {
        console.log("Profile fetch error");
      }
    };

    fetchProfile();
  }, [email]);

  // 🔥 Update Profile
  const updateProfile = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/admin/update-profile",
        {
          email,
          name,
          phone,
          profilePic
        }
      );

      alert(res.data.message);
    } catch {
      alert("Update failed ❌");
    }
  };

  return (
    <div className="dashboard">

      {/* Topbar */}
      <Topbar
        page={page}
        setPage={setPage}
        onProfileClick={() => setShowProfile(!showProfile)}
      />

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="profile-dropdown">

          <h3>My Profile</h3>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input value={email} disabled />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="Profile Image URL"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />

          <button onClick={updateProfile}>Save</button>
        </div>
      )}

      {/* ================= DASHBOARD ================= */}
      {page === "dashboard" && (
        <div className="main">

          <h2>Dashboard</h2>


          <div className="admin-cards">

            <div className="admin-card">
              <h4>Total Sales</h4>
              <h2>$983,410</h2>
            </div>

            <div className="admin-card">
              <h4>Total Orders</h4>
              <h2>58,375</h2>
            </div>

            <div className="admin-card">
              <h4>Total Visitors</h4>
              <h2>237,782</h2>
            </div>

          </div>

          <div className="charts">

            <div className="chart-box">
              <h3>Revenue Analytics</h3>

              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#ff7a00"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-box">
              <h3>Top Categories</h3>

              <PieChart width={250} height={250}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

          </div>
        </div>
      )}

      {/* ================= OTHER PAGES ================= */}
      {page === "orders" && <h2 className="main">Orders Page</h2>}
      {page === "products" && <h2 className="main">Products Page</h2>}
      {page === "customers" && <h2 className="main">Customers Page</h2>}
      {page === "reports" && <h2 className="main">Reports Page</h2>}
      {page === "discounts" && <h2 className="main">Discounts Page</h2>}

    </div>
  );
}

export default AdminDashboard;
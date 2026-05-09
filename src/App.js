import {BrowserRouter,Routes,Route} from "react-router-dom";

import LoginChoice from "./pages/LoginChoice";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Products from "./admin/Products";
import Cart from "./pages/Cart";


import AdminDashboard from "./admin/AdminDashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App(){

  return(

      <BrowserRouter>

        <Routes>
        {/* Default page */}
         <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />

          {/* Login pages */}
          <Route path="/login" element={<LoginChoice/>}/>
          <Route path="/login/user" element={<UserLogin/>}/>
          <Route path="/login/admin" element={<AdminLogin/>}/>

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<h2>Products Page</h2>} />
          <Route path="/admin/orders" element={<h2>Orders Page</h2>} />
          <Route path="/admin/customers" element={<h2>Customers Page</h2>} />
          <Route path="/admin/reports" element={<h2>Reports Page</h2>} />
          <Route path="/admin/discounts" element={<h2>Discounts Page</h2>} />
          <Route path="/admin/profile" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<Profile />} />

        </Routes>

      </BrowserRouter>

  );

}

export default App;
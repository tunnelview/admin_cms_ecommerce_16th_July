import "./App.css";
import Login from "./pages/login-registration/Login";
import Registration from "./pages/login-registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EmailVerification from "./pages/login-registration/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import PaymentMethods from "./pages/payment-method/PaymentMethods";
import Users from "./pages/Users/Users";
import Orders from "./pages/orders/Orders";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import Settings from "./pages/settings/Settings";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin-verification" element={<EmailVerification />} />

          {/* private routes TODO */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/payment-method" element={<PaymentMethods />} />
          <Route path="/users" element={<Users />} />
          <Route path="/ordes" element={<Orders />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;

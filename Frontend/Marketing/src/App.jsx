import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestHome from "./pages/GuestHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

import AdminDashBoard from "./components/Admin/AdminDashBoard";
import AdminHome from "./components/Admin/AdminHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin/adminDashBoard" element={<AdminDashBoard />} />
          <Route path="/admin/adminHome" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

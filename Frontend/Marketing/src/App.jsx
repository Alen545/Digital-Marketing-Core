import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestHome from "./pages/GuestHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

import AdminDashBoard from "./components/Admin/AdminDashBoard";
import AdminNotifications from "./components/Admin/AdminNotifications";
import AdminSettings from "./components/Admin/AdminSettings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin/adminDashBoard" element={<AdminDashBoard />} />
          <Route
            path="/admin/adminNotifications"
            element={<AdminNotifications />}
          />
          <Route path="/admin/adminSettings" element={<AdminSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

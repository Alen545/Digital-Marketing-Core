import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestHome from "./pages/GuestHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashBoard from "./components/Admin/AdminDashBoard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/adminDashBoard" element={<AdminDashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router";

import { AuthProvider } from "./AuthContext";

//  Layouts
import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

// Forms
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import AddLink from "./pages/AddLink";

// Pages
import Home from "./pages/Home";
import Links from "./pages/Links";
import Broke from "./pages/404";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/links" element={<Links />} />
          <Route path="/addLink" element={<AddLink />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/404" element={<Broke />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

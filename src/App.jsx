import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home'
import Links from "./pages/Links";
import AddLink from "./pages/AddLink";
import Broke from "./pages/404";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/addLink" element={<AddLink/>} />
      </Route>
      <Route path="/404" element={<Broke />} />
    </Routes>
  );
}

export default App;

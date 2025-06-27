import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home'
import Links from "./components/Link";
import AddLink from "./pages/AddLink";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/addLink" element={<AddLink/>} />
      </Route>
    </Routes>
  );
}

export default App;

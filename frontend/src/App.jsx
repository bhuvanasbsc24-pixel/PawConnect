import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Favorites from "./pages/Favorites";
import Adopt from "./pages/Adopt";
import PetDetails from "./pages/PetDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
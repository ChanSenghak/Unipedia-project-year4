import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Mainhomepage from "./assets/Mainhomepage.jsx";
import Mainabout from "./assets/partabout/Mainabout.jsx";
import Maindetails from "./partdetails/Maindetails.jsx";

// Render the Router with routes
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainhomepage />} />
        <Route path="/about" element={<Mainabout />} />
        <Route path="/details" element={<Maindetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

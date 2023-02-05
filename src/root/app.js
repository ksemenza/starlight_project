import "../assets/css/app.css";
import Home from "../paths/Home.jsx";
import Shop from "../paths/Shop.jsx";
import Bio from "../paths/Bio.jsx";
import Studio from "../paths/Studio.jsx";
import { Routes, Route } from "react-router-dom";

function app() {
  return (
    <div className="app-cta">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </div>
  );
}

export default app;

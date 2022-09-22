import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dog from "../pages/DogPages/index";
import Home from "../pages/Home/index";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogpages" element={<Dog />} />
      </Routes>
    </Router>
  );
}

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Foot-Nav/NavBar";
import Home from "./components/All-Pages/Home-Page/HomeMain";
import Product from "./components/All-Pages/Product";
import Cart from "./components/All-Pages/Cart";
import Footer from "./components/Foot-Nav/Footer";
import About from "./components/All-Pages/About";
import Contact from "./components/All-Pages/Contact";
import ErorPage from "./components/All-Pages/ErorPage";
import Login from "./components/AuthForm/login";
import Signup from "./components/AuthForm/signup";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/erorpage" element={<ErorPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;

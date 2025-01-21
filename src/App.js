import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/commen/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingalProduct from "./pages/SingalProduct";
import ErorPage from "./pages/ErorPage";
import Login from "./AuthForm/login";
import Signup from "./AuthForm/signup";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singalproduct" element={<SingalProduct />} />
        <Route path="/erorpage" element={<ErorPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;

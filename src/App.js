import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/Foot-Nav/NavBar";
import Home from "./components/All-Pages/Home-Page/HomeMain";
import Footer from "./components/Foot-Nav/Footer";
import About from "./components/All-Pages/About";
import Contact from "./components/All-Pages/Contact";
import Login from "./components/AuthForm/login";
import Signup from "./components/AuthForm/signup";
import UserProfile from "./components/Nav Righte Section/UserProfile";
import FavoriteItems from "./components/Nav Righte Section/FavoriteItems";
import AddToCart from "./components/Nav Righte Section/AddToCart";
import MyProfile from "./components/Nav Righte Section/MyProfile";
import Cookies from "js-cookie";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");

  // Move navigation logic inside useEffect
  useEffect(() => {
    if (!token && location.pathname !== "/signup") {
      navigate("/login");
    }
  }, [token, navigate, location.pathname]);

  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/FavoriteItems" element={<FavoriteItems />} />
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;

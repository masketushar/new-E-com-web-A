import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import DressStyle from "./DressStyle";
import BestSellingProdct from "./BestSelingProdct";
import BrawseByCategry from "./BrawseByCategry";
import PopularThisWik from "./PopularThisWik";
import NewArival from "./NewArival";
import MyProfile from "../../Nav Righte Section/MyProfile";

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
  { id: 3, name: "Product C", price: 300 },
];

const Home = () => {
  return (
    <>
      <div>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/product/{product.id}`}></Link>
            </div>
          ))}
        </div>

        <Hero />
        <MyProfile />
        <DressStyle />
        <BestSellingProdct />
        <BrawseByCategry />
        <PopularThisWik />
        <NewArival />
      </div>
    </>
  );
};

export default Home;


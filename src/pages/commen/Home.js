import React from "react";
import { Link } from "react-router-dom";
import PageA from "./pageA";
import PageB from "./pageB";
import PageC from "./pageC";
import PageD from "./pageD";
import PageE from "./pageE";
import PageF from "./pageF";

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
        <PageA />
        <PageB />
        <PageC />
        <PageD />
        <PageE />
        <PageF />
        
       
      </div>
    </>
  );
};

export default Home;

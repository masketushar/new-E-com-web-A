import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const product = { id, name: `Product ${id}`, price: id * 100 };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};
export default Product;

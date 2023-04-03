import React from 'react';
import ProductsList from '../ProductsList';
import AddProduct from '../AddProduct';

export default function ProductsContainer() {
  return (
    <div>
      <AddProduct />
      <ProductsList />
    </div>
  )
}

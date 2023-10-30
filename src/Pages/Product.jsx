import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

const Product = () => {
  //Get all product data using context (from ShopContext)
  const {all_product} = useContext(ShopContext);

  // Using params to get product id
  const {productId} = useParams();

  // variable to find a product by id from all_product
  const product = all_product.find((e) => e.id === productId);

  return (
    <div></div>
  )
}

export default Product
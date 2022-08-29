import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  // Get the state from redux store
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios("https://fakestoreapi.com/products").catch(
  //     (err) => console.log("Error", err)
  //   );
  //   // Use dispatch to set state with action
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

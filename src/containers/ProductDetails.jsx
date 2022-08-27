import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios(
      `https://fakestoreapi.com/products/${productId}`
    ).catch((err) => console.log("Error", err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return <div>ProductDetails</div>;
};

export default ProductDetails;

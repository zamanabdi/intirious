import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/productCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
const dispatch = useDispatch();
const cartItem = useSelector((state) => state.cart);

console.log(cartItem);


const addCart = () => {
  dispatch(addToCart("shirt"));

}

const deleteCart = () => {
  dispatch(deleteFromCart("shirt"));
}





  return (
    <Layout>
    <div className="flex gap-5 justify-center">
    {/*
    <button className="bg-gray-300 p-5"  onClick={() => addCart()}>add</button>
    <button className="bg-gray-300 p-5" onClick={() => deleteCart()}>Delete</button>
  */}
  
    </div>
      <HeroSection />
      <Filter/>
      <ProductCard message={"Popular Products"}/>
      <div className="flex justify-center -mt-10 mb-4">
      <Link to={'/allproducts'}>
      <button className="bg-gray-300 px-5 py-2 rounded-xl">See More</button>
      </Link>
      </div>
      <Track/>
      <Testimonial/>
    </Layout>
  );
};

export default Home;

import React from "react";
import { useGetProductsQuery } from "../redux/apiSlice";
import ProductCard from "./ProductCard";


const Catalog = () => {
const {data:products,isLoading} = useGetProductsQuery()
console.log(products)
  
  return (<div>
    { isLoading ? <h2>please wait </h2> :
  <div className="products"> 
  {products?.map((item) => {
      console.log(item);
      return <ProductCard key={item.id} {...item}/>})} 
  </div>}
   </div>)
};

export default Catalog;

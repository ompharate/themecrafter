import React from "react";
import Card from "./Card";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../utils/constants";

const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  
  async function fetchProducts() {
    const response = await fetch(`${BASE_URL}/api/v1/product`);
    console.log(response)
    const data = await response.json();
    return data.products;
  }
  return (  
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
      {!isLoading
        ? data.map((product, index) => (
            <Card
              key={index}
              id={product._id}
              thumbnail={product.imageUrl} 
              themeName={product.name}
              themePrice={product.price}
            />
          ))
        : null}
    </div>
  );
};

export default Products;

import React from "react";
import Card from "./Card";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: "products",
    queryFn: fetchProducts,
  });

  async function fetchProducts() {
    const response = await fetch("http://localhost:8080/api/v1/product");
    const data = await response.json();
    return data.products;
  }
  // console.log(data)
  return (  
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
      {!isLoading
        ? data.map((product, index) => (
            <Card
              key={index}
              id={product._id}
              thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTod9w7JP139QPFhNsPO9tP02XBnzbhGKIw&s"
              themeName={product.name}
              themePrice={product.price}
            />
          ))
        : null}
    </div>
  );
};

export default Products;

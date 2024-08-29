import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const { data, isLoading } = useQuery({
    queryKey: "productByKey",
    queryFn: fetchProducts,
  });

  async function fetchProducts() {
    const response = await fetch(
      `http://localhost:8080/api/v1/product/search?q=${query}`
    );
    const data = await response.json();
    return data.product;
  }

  useEffect(() => {
    queryClient.invalidateQueries("productByKey");
  }, [query]);

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

export default Search;

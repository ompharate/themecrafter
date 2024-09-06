import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import Card from "../components/Card";
import { BASE_URL } from "../utils/constants";

function SearchNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-5">
      <h1 className="text-3xl font-bold">No themes found matching your search</h1>
      <Link to="/shop" className="text-blue-700">Try adjusting your search or explore our popular themes!</Link>
    </div>
  );
}

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
      `${BASE_URL}/api/v1/product/search?q=${query}`
    );
    const data = await response.json();
    return data.product;
  }

  useEffect(() => {
    queryClient.invalidateQueries("productByKey");
  }, [query]);



  return (
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
      {!isLoading && data.length > 0
        ? data.map((product, index) => (
            <Card
              key={index}
              id={product._id}
              thumbnail={product.imageUrl}
              themeName={product.name}
              themePrice={product.price}
            />
          ))
        : <SearchNotFound/>}
    </div>
  );
};

export default Search;

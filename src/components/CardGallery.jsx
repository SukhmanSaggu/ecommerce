import { useEffect, useState } from "react";
import Card from "./Card";
import productsApi from "../config/productApiConfig";

const CardGallery = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const displayLimit = 10;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await productsApi.get("/");
        console.log(response);
        if (response.status == 200) {
          const data = response.data;
          setProducts(data);
        }
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, displayLimit);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <>
          <h1 className="text-3xl text-center underline">
            List of All Products
          </h1>
          <div className="px-12 py-4 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6">
            
            {displayedProducts.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
          {!showAll && products.length > displayLimit && (
            <div className="text-center my-4">
              <button
                onClick={() => setShowAll(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Show More ({products.length - displayLimit} more)
              </button>
            </div>
          )}
          {showAll && products.length > displayLimit && (
            <div className="text-center my-4">
              <button
                onClick={() => setShowAll(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Show Less
              </button>
            </div>
          )}
        </>
      ) : (
        <h1 className="text-3xl text-center">No Products to display</h1>
      )}
    </div>
  );
};

export default CardGallery;

const Spinner = () => {
  return <h1 className="text-center my-12">Loading....</h1>;
};

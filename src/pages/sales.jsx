import { useState, useEffect, useMemo } from "react";
import Card from "../components/Card";

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const displayLimit = 5;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        setProducts(data.slice(0, 20));
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, displayLimit);

  // Pre-calculate discounts using useMemo
  const productPrices = useMemo(() => {
    const prices = {};
    products.forEach(product => {
      const discount = 30 + (product.id % 31); // 30-60% based on product id
      prices[product.id] = {
        original: product.price * 1.5,
        discounted: product.price,
        discount: discount
      };
    });
    return prices;
  }, [products]);

  const getDiscountPrice = (productId) => {
    return productPrices[productId] || { original: 0, discounted: 0, discount: 0 };
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50">
      {/* Big Sale Banner */}
      <div className="bg-linear-to-r from-red-600 via-orange-500 to-red-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-3">
            <span className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold">
              🔥 MEGA SALE 🔥
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-3">
            BIGGEST SALE EVER
          </h1>
          <p className="text-xl mb-2">
            Up to <span className="font-bold text-2xl">60% OFF</span>!
          </p>
          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">
              🚚 Free delivery
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">
              💳 10% extra with card
            </span>
          </div>
        </div>
      </div>

      {/* Products - Only 5 cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🔥 Hot Deals - Limited Time!
        </h2>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="text-2xl">Loading sale items...</div>
          </div>
        ) : products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {displayedProducts.map((product) => {
                const pricing = getDiscountPrice(product.id);
                return (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold z-10">
                      {pricing.discount}% OFF
                    </div>
                    <Card product={{...product, price: pricing.discounted}} />
                    <div className="px-3 pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-red-600">
                          ${pricing.discounted.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          ${pricing.original.toFixed(2)}
                        </span>
                      </div>
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              {!showAll && products.length > displayLimit ? (
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Show More ({products.length - displayLimit} more) →
                </button>
              ) : showAll && products.length > displayLimit ? (
                <button
                  onClick={() => setShowAll(false)}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg font-bold hover:bg-gray-700 transition-colors"
                >
                  ← Show Less
                </button>
              ) : null}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No sale items available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;
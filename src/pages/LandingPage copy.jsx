import React from "react";
import CardGallery from "../components/CardGallery";
import HeroSlider from "../components/HeroSlider";

const LandingPage = () => {
  return (
    <>
      <HeroSlider />
      
      {/* Payment & Delivery Info Banner */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Cash on Delivery */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">💵</div>
              <h3 className="text-xl font-bold mb-2">Cash on Delivery</h3>
              <p className="text-blue-100">
                Pay when you receive your order. No advance payment required!
              </p>
            </div>

            {/* Credit Card Offers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl font-bold mb-2">Credit Card Offers</h3>
              <p className="text-blue-100">
                Get up to 10% instant discount with select credit cards
              </p>
            </div>

            {/* Free Delivery */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
              <p className="text-blue-100">
                Free shipping on orders above $50. Fast delivery to your door!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-semibold text-gray-800">Secure Shopping</h3>
              <p className="text-gray-600 text-sm">100% secure payment</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">↩️</div>
              <h3 className="font-semibold text-gray-800">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎧</div>
              <h3 className="font-semibold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always here to help</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-semibold text-gray-800">Verified Products</h3>
              <p className="text-gray-600 text-sm">Quality guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-8">
        <CardGallery />
      </div>
    </>
  );
};

export default LandingPage;

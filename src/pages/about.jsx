import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg text-gray-600">
            Your one-stop destination for quality products at amazing prices
          </p>
        </div>

        {/* Store Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">🏪</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Products
            </h3>
            <p className="text-gray-600">
              We source only the best products from trusted suppliers
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable shipping to your doorstep
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">💯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Best Prices
            </h3>
            <p className="text-gray-600">
              Competitive pricing with regular discounts and offers
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About Our Store
          </h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, we have been committed to providing customers with
            an exceptional shopping experience. Our curated collection features
            a wide range of products to meet your everyday needs.
          </p>
          <p className="text-gray-600 mb-4">
            We believe in quality over quantity. Every product in our store is
            carefully selected to ensure it meets our high standards of
            excellence.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-gray-600">
                <strong>Secure Payments</strong> - Safe and encrypted transactions
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-gray-600">
                <strong>24/7 Customer Support</strong> - We're here to help anytime
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-gray-600">
                <strong>Easy Returns</strong> - 30-day return policy
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-gray-600">
                <strong>Regular Discounts</strong> - Special offers for loyal customers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="text-gray-600">
                <strong>Verified Reviews</strong> - Real feedback from real customers
              </span>
            </li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm">Products</div>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm">Brands</div>
          </div>
          <div className="bg-orange-500 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold">4.8</div>
            <div className="text-sm">Star Rating</div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="space-y-3">
            <p className="text-gray-600">
              <strong>📍 Address:</strong> 123 Market Street, City, State 12345
            </p>
            <p className="text-gray-600">
              <strong>📧 Email:</strong> support@ourstore.com
            </p>
            <p className="text-gray-600">
              <strong>📞 Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-gray-600">
              <strong>🕐 Hours:</strong> Mon - Sat: 9AM - 8PM, Sun: 10AM - 6PM
            </p>
          </div>
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showMore ? "Show Less" : "Show More Information"}
          </button>
        </div>

        {/* Additional Content - Show More */}
        {showMore && (
          <div className="mt-8 space-y-8">
            {/* Testimonials */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-3">
                    "Great shopping experience! The products are of excellent
                    quality and delivery was super fast."
                  </p>
                  <p className="text-gray-800 font-semibold">- John D.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-3">
                    "Best online store I've shopped at. Customer service is
                    outstanding and prices are competitive."
                  </p>
                  <p className="text-gray-800 font-semibold">- Sarah M.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-3">
                    "Love the variety of products available. Will definitely
                    shop here again!"
                  </p>
                  <p className="text-gray-800 font-semibold">- Mike R.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-3">
                    "Easy to navigate website and secure checkout process.
                    Very satisfied with my purchase."
                  </p>
                  <p className="text-gray-800 font-semibold">- Emily W.</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🎁</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Gift Wrapping
                    </h3>
                    <p className="text-gray-600">
                      Perfectly wrapped gifts for any occasion
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🏷️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Loyalty Program
                    </h3>
                    <p className="text-gray-600">
                      Earn points on every purchase
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📦</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Express Shipping
                    </h3>
                    <p className="text-gray-600">
                      Get your order in 1-2 business days
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">💬</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Live Chat Support
                    </h3>
                    <p className="text-gray-600">
                      Instant help whenever you need it
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Q: How do I track my order?
                  </h3>
                  <p className="text-gray-600">
                    A: Once your order ships, you'll receive an email with a
                    tracking number. You can also track it in your account.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Q: What is your return policy?
                  </h3>
                  <p className="text-gray-600">
                    A: We offer a 30-day return policy for most items. Just
                    contact our support team to initiate a return.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Q: Do you ship internationally?
                  </h3>
                  <p className="text-gray-600">
                    A: Yes! We ship to over 100 countries worldwide. Shipping
                    costs and delivery times vary by location.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Q: How can I contact customer support?
                  </h3>
                  <p className="text-gray-600">
                    A: You can reach us via email, phone, or live chat. We're
                    available 24/7 to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
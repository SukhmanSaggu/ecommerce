import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addProductIntoCart } from "../redux/slices/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  // Helper to render stars based on rating
  const renderStars = () => {
    const rating = Math.round(product?.rating?.rate ?? 0);
    return [1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ));
  };

  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      title={product?.title}
    >
      <Link to={`/product/${product?.id}`} className="flex justify-center p-4">
        <img
          className="rounded-t-lg h-52 object-contain"
          src={product?.image ?? "https://v3.flowbite.com/images/products/apple-watch.png"}
          alt={product?.title ?? "product image"}
        />
      </Link>

      <div className="px-5 pb-5">
        <Link to={`/product/${product?.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {product?.title ?? "Unnamed Product"}
          </h5>
        </Link>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {renderStars()}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product?.rating?.rate ?? "0.0"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹{Math.floor((product?.price ?? 0) * 85)} 
          </span>
          <button
            onClick={() => dispatch(addProductIntoCart(product))}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
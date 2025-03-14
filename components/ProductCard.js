import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden">
      
      {/* PRODUCT IMAGE */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {product.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
          {product.description.substring(0, 80)}...
        </p>
        <p className="text-lg font-bold text-gray-900 dark:text-white mt-3">
          ${product.price.toFixed(2)}
        </p>

        {/* BUTTON */}
        <Link
          href={`/products/${product.id}`}
          className="block mt-4 bg-blue-600 text-white font-medium text-center py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
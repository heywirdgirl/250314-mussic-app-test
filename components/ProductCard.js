import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
      
      {/* PRODUCT IMAGE */}
      <figure className="h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </figure>

      {/* CONTENT */}
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold truncate">
          {product.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
          {product.description.substring(0, 80)}...
        </p>
        <p className="text-lg font-bold text-primary mt-3">
          ${product.price.toFixed(2)}
        </p>

        {/* BUTTON */}
        <div className="card-actions justify-end">
          <Link
            href={`/products/${product.id}`}
            className="btn btn-primary w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{product.description.substring(0, 80)}...</p>
      <p className="text-gray-800 font-semibold mt-2">${product.price.toFixed(2)}</p>
      <Link href={`/products/${product.id}`} className="block mt-3 bg-blue-500 text-white py-2 text-center rounded-md hover:bg-blue-600 transition">
        View Details
      </Link>
    </div>
  );
}
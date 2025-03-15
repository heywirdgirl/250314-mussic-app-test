import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      
      {/* PRODUCT IMAGE */}
      <div className="h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm">
          {product.description.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </p>
        <p className="text-lg font-bold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
      </div>

      {/* BUTTON */}
      <div className="p-4">
        <button 
          onClick={() => setIsOpen(true)} 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>

      {/* MODAL (Tailwind Only) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full transform transition-all scale-95 opacity-0 animate-fade-in">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-md mt-3" 
            />
            <p className="text-gray-600 mt-3">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
            
            <div className="flex justify-between mt-4">
              <button 
                onClick={() => setIsOpen(false)} 
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
              >
                Close
              </button>
              <Link href={`/products/${product.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
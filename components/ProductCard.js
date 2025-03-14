import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function ProductCard({ product }) {
  return (
    <Transition
      appear
      show={true}
      enter="transform transition duration-500 ease-in-out"
      enterFrom="opacity-0 translate-y-5"
      enterTo="opacity-100 translate-y-0"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
        <Link href={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <span className="block mt-2 text-lg font-bold text-green-600">${product.price}</span>
          </div>
        </Link>
      </div>
    </Transition>
  );
}
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import products from "../data/products.json";

export default function Home() {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-900 text-white text-center py-5">
        <h1 className="text-3xl font-bold">Welcome to Our Shop</h1>
      </header>

      <main className="container mx-auto py-10 px-4">
        <Transition
          show={isShowing}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md"/>
                <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <span className="block mt-2 font-bold text-green-600">${product.price}</span>
              </Link>
            ))}
          </div>
        </Transition>
      </main>
    </div>
  );
}
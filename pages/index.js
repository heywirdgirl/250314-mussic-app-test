import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Transition } from "@headlessui/react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  return { props: { products } };
}

export default function Home({ products }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/hat.jpg')" }}>
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* ANIMATED TEXT */}
        <Transition
          show={isVisible}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl font-bold">Welcome to Simple Shop</h1>
            <p className="text-lg mt-2">Discover the latest trends in fashion & accessories.</p>
          </div>
        </Transition>
      </div>

      {/* PRODUCT SECTION */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
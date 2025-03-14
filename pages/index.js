import fs from "fs";
import path from "path";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { Transition } from "@headlessui/react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hat.jpg')" }}
      >
        <div className="container mx-auto px-4 py-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-center text-gray-900 my-6">
            ✨ Simple Shop ✨
          </h1>

          {/* GRID WITH ANIMATION */}
          <Transition
            show={true}
            appear
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Transition.Child
                  key={product.id}
                  enter="transform transition duration-500 ease-in-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </Transition.Child>
              ))}
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
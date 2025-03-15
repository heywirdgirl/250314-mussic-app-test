import ProductCard from "../components/ProductCard";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://dd-oled-default-rtdb.asia-southeast1.firebasedatabase.app/.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    // Convert Firebase object data into an array
    const products = data ? Object.values(data) : [];

    return {
      props: { products },
      revalidate: 60, // Re-generate page every 60 seconds (ISR)
    };
  } catch (error) {
    return {
      props: { products: [] }, // Return empty array on failure
    };
  }
}

export default function Home({ products }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hat.jpg')" }}
      >
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
            <p className="text-lg mt-2">
              Discover the latest trends in fashion & accessories.
            </p>
          </div>
        </Transition>
      </div>

      {/* PRODUCT SECTION */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>

        {/* Handle Empty Data */}
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
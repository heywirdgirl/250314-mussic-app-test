import ProductCard from "../components/ProductCard";
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
    };
  } catch (error) {
    return {
      props: { products: [] },
    };
  }
}

export default function Home({ products }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hat.jpg')" }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* TEXT WITH TAILWIND ANIMATION */}
        <div
          className={`relative text-center text-white px-4 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl font-extrabold">Welcome to Simple Shop</h1>
          <p className="text-lg mt-3">
            Discover the latest trends in fashion & accessories.
          </p>
          <button className="mt-5 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>

        {products.length === 0 ? (
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold">No Products Available</h3>
            <p className="text-gray-500">Check back later for new arrivals.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
import { useRouter } from "next/router";
import Head from "next/head";

// Fetch all product IDs from Firebase for SSG
export async function getStaticPaths() {
  try {
    const response = await fetch(
      "https://dd-oled-default-rtdb.asia-southeast1.firebasedatabase.app/.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    const products = data ? Object.values(data) : [];
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return { paths, fallback: true }; // Enable fallback for new products
  } catch (error) {
    return { paths: [], fallback: true }; // In case of an error, enable fallback
  }
}

// Fetch individual product details from Firebase
export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `https://dd-oled-default-rtdb.asia-southeast1.firebasedatabase.app/${params.id}.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const product = await response.json();

    if (!product) return { notFound: true };

    return {
      props: { product },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function ProductPage({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} - Simple Shop</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Product Image with Tailwind Animation */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-md opacity-0 scale-95 animate-fade-in"
          />

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            
            <button className="mt-6 w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
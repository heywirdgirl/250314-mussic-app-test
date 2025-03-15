import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Head from "next/head";
import { Transition } from "@headlessui/react";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return { notFound: true };

  return { props: { product } };
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
          
          {/* Product Image */}
          <Transition
            appear
            show={true}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </Transition>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
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
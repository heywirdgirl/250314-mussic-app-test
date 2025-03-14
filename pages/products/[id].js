import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";

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

  if (router.isFallback) return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <>
      <Head>
        <title>{product.name} - Simple Shop</title>
        <meta name="description" content={product.description} />
      </Head>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/2 h-72 md:h-96">
            <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-800 font-semibold mt-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-md mt-4">{product.description}</p>
            <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
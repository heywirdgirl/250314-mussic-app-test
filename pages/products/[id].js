import fs from "fs";
import path from "path";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true }; // Enable fallback mode
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return { notFound: true }; // Redirect to 404 if product is missing
  }

  return { props: { product } };
}

export default function ProductPage({ product }) {
  const router = useRouter();

  // Handle loading state for fallback pages
  if (router.isFallback) {
    return <p className="text-center mt-20 text-xl">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mt-4" />
      <p className="text-lg text-gray-600 mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
}
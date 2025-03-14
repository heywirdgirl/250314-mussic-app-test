import { useRouter } from "next/router";
import products from "../../data/products.json";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));

  const [isOpen, setIsOpen] = useState(true);

  if (!product) return <p className="text-center py-10">Product not found</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-md"/>
              <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <span className="block text-green-600 font-bold text-xl mt-3">${product.price}</span>
              <button onClick={() => router.push("/")} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                Back to Home
              </button>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
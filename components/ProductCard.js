import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      
      {/* PRODUCT IMAGE */}
      <div className="h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm">
          {product.description.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </p>
        <p className="text-lg font-bold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
      </div>

      {/* BUTTON */}
      <div className="p-4">
        <button 
          onClick={openModal} 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>

      {/* MODAL */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
                <Dialog.Title className="text-xl font-bold">{product.name}</Dialog.Title>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mt-3" />
                <p className="text-gray-600 mt-3">{product.description}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
                
                <div className="flex justify-between mt-4">
                  <button 
                    onClick={closeModal} 
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                  >
                    Close
                  </button>
                  <Link href={`/products/${product.id}`} passHref>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"><a>
                      Buy Now</a>
                    </button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
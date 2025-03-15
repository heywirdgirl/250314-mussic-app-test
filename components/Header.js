import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, MapPinIcon, PhoneIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          My Shop
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ShoppingBagIcon className="h-5 w-5" /> Facebook
          </Link>
          <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ShoppingBagIcon className="h-5 w-5" /> Shopee
          </Link>
          <span className="flex items-center gap-2 text-gray-700">
            <MapPinIcon className="h-5 w-5" /> 123 Shop St.
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <PhoneIcon className="h-5 w-5" /> 012-345-6789
          </span>
        </nav>

        {/* Mobile Menu */}
        <Menu as="div" className="lg:hidden relative">
          <Menu.Button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
            <Bars3Icon className="h-6 w-6 text-gray-900" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
              <Menu.Item>
                {({ active }) => (
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-sm flex items-center gap-2 ${active ? "bg-gray-100" : ""}`}>
                    <ShoppingBagIcon className="h-4 w-4" /> Facebook
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-sm flex items-center gap-2 ${active ? "bg-gray-100" : ""}`}>
                    <ShoppingBagIcon className="h-4 w-4" /> Shopee
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                <div className="px-4 py-2 text-sm text-gray-700 flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4" /> 123 Shop St.
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="px-4 py-2 text-sm text-gray-700 flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4" /> 012-345-6789
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
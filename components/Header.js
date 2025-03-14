import { useState } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { FaFacebook, FaShoppingBag } from "react-icons/fa"; // React Icons

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Shop</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="https://facebook.com" className="flex items-center space-x-1 hover:text-blue-400">
            <FaFacebook className="w-5 h-5" />
            <span>Facebook</span>
          </Link>
          <Link href="https://shopee.com" className="flex items-center space-x-1 hover:text-orange-400">
            <FaShoppingBag className="w-5 h-5" />
            <span>Shopee</span>
          </Link>
          <span className="text-sm">📍 123 Shop St.</span>
          <span className="text-sm">📞 012-345-6789</span>
        </nav>

        {/* Mobile Menu */}
        <Menu as="div" className="relative md:hidden">
          {({ open }) => (
            <>
              <Menu.Button className="p-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-400">
                ☰
              </Menu.Button>

              {open && (
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg p-2">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://facebook.com" className={`flex items-center space-x-2 px-4 py-2 ${active ? "bg-gray-700" : ""}`}>
                        <FaFacebook className="w-5 h-5" />
                        <span>Facebook</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://shopee.com" className={`flex items-center space-x-2 px-4 py-2 ${active ? "bg-gray-700" : ""}`}>
                        <FaShoppingBag className="w-5 h-5" />
                        <span>Shopee</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <span className="block px-4 py-2">📍 123 Shop St.</span>
                  </Menu.Item>
                  <Menu.Item>
                    <span className="block px-4 py-2">📞 012-345-6789</span>
                  </Menu.Item>
                </Menu.Items>
              )}
            </>
          )}
        </Menu>
      </div>
    </header>
  );
}
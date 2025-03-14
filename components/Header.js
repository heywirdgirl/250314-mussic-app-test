import { useState } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md fixed top-0 right-0 left-0 z-100">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Shop</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="https://facebook.com" className="hover:text-blue-400">Facebook</Link>
          <Link href="https://shopee.com" className="hover:text-orange-400">Shopee</Link>
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
                      <Link href="https://facebook.com" className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}>
                        Facebook
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="https://shopee.com" className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}>
                        Shopee
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
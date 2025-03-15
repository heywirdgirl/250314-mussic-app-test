import { useState } from "react";
import { Bars3Icon, MapPinIcon, PhoneIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          My Shop
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <ShoppingBagIcon className="h-5 w-5" /> Facebook
            </span>
          </Link>
          <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <ShoppingBagIcon className="h-5 w-5" /> Shopee
            </span>
          </Link>
          <span className="flex items-center gap-2 text-gray-700">
            <MapPinIcon className="h-5 w-5" /> 123 Shop St.
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <PhoneIcon className="h-5 w-5" /> 012-345-6789
          </span>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars3Icon className="h-6 w-6 text-gray-900" />
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute right-4 top-16 bg-white shadow-lg rounded-md w-48 overflow-hidden transition-all duration-300 transform ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="block px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100">
              <ShoppingBagIcon className="h-4 w-4" /> Facebook
            </span>
          </Link>
          <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer">
            <span className="block px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100">
              <ShoppingBagIcon className="h-4 w-4" /> Shopee
            </span>
          </Link>
          <div className="px-4 py-2 text-sm text-gray-700 flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" /> 123 Shop St.
          </div>
          <div className="px-4 py-2 text-sm text-gray-700 flex items-center gap-2">
            <PhoneIcon className="h-4 w-4" /> 012-345-6789
          </div>
        </div>
      </div>
    </header>
  );
}
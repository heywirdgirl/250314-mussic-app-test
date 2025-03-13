import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Shop</h1>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" className="hover:text-blue-400">Facebook</Link>
          <Link href="https://shopee.com" className="hover:text-orange-400">Shopee</Link>
          <span>📍 Address: 123 Shop St.</span>
          <span>📞 Phone: 012-345-6789</span>
        </div>
      </div>
    </header>
  );
}
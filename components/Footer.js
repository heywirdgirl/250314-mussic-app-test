import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Footer Title & Description */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Footer Title</h2>
          <p className="text-gray-400 text-sm">Some description about the footer.</p>
        </div>

        {/* Footer Links */}
        <nav className="flex gap-6">
          <Link href="#" className="text-gray-400 hover:text-white transition">
            Link 1
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            Link 2
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            Link 3
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Footer Title</h1>
            <p className="text-sm">Some description about the footer.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Link 1
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Link 2
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Link 3
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
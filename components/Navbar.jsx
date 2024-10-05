import React, { useState } from 'react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <header className="text-gray-600 body-font bg-custom-gray">
        <div className="container ml-2 flex flex-wrap p-4 justify-between items-center">
          {/* Mobile & Tablet: Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FaBars className="text-white text-3xl" />
            </button>
          </div>

          {/* Logo: Centered on Mobile, Left on Desktop */}
          <div className="lg:mx-0 lg:flex-shrink-0 flex items-center">
            <a className="flex title-font font-medium items-center text-gray-900 ml-3">
              <img src="/images/logo.png" className="w-24 md:w-36" alt="logo" />
            </a>
          </div>

          {/* Order Online Button Section (Hidden in Desktop) */}
          <button className="inline-flex items-center bg-custom-button-color text-white border-0 py-1 px-1 lg:py-3 lg:px-4 focus:outline-none rounded-full text-xs lg:text-base lg:hidden">
            <FaArrowRight className="mr-1 bg-white text-custom-button-color rounded-full" />
            Order Online
          </button>

          {/* Desktop Menu and Buttons */}
          <div className="hidden lg:flex lg:ml-auto items-center">
            <nav className="flex space-x-8 pr-5">
              <a className="text-white">Home</a>
              <a className="text-white">About Us</a>
              <a className="text-white">Publications</a>
            </nav>

            {/* Get a Franchise Button */}
            <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full mr-6 ml-2">
              Get a Franchise
            </button>

            {/* Order Online Button */}
            <button className="inline-flex items-center bg-custom-button-color text-white border-0 py-3 px-4 focus:outline-none rounded-full">
              Order Online
              <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1" style={{ fontSize: '25px' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Menu (Slide in from left) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
          <div className="fixed top-0 left-0 w-64 h-full bg-white text-black p-8 z-50">
            {/* Close Icon */}
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
              <FaTimes className="text-black text-2xl" />
            </button>
            <nav className="flex flex-col space-y-4 mt-10">
              <a className="text-black border-b-2 border-grey">Home</a>
              <a className="text-black border-b-2 border-grey">About Us</a>
              <a className="text-black border-b-2 border-grey">Publications</a>
              <a className="text-black border-b-2 border-grey">Get a Franchise</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-footer-background-color">
        <div className="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          
          {/* Contact Us (Left Column) */}
          <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <h2 className="title-font font-small text-white tracking-widest text-sm mb-3">Contact Us</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white font-bold">Head office Address</a>
                <p className="mt-2 text-footer-text-color">
                  Foodconsults (Pvt) Ltd, 23-Usman Block, New Garden Town, Lahore, Pakistan
                </p>
              </li>
              <li className="mt-5">
                <a className="text-white font-bold">Head office number</a>
                <p className="mt-2 text-footer-text-color">+92 42 358 509 31</p>
                <p className="mt-2 text-footer-text-color">+92 42 358 509 30</p>
              </li>
              <li className="mt-5">
                <a className="text-white font-bold">Email Address</a>
                <p className="mt-2 text-footer-text-color">snpfood@brain.net.pk</p>
              </li>
              <li className="mt-5">
                <a className="text-white font-bold">Free delivery number</a>
                <p className="mt-2 text-footer-text-color">+92 42 111 100 678</p>
                <p className="mt-2 text-footer-text-color">+92 03 111 444 610</p>
              </li>
            </nav>
          </div>

          {/* Main Content - Logo and Text */}
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            
            {/* About Section */}
            <div className="lg:w-1/2 md:w-1/2 w-full px-4 bg-footer-bg h-full bg-cover bg-bottom bg-no-repeat footer-row-1 flex flex-col items-center sm:items-start">
              <img
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Logo"
                className="mb-4 sm:mb-0"
              />
              <nav className="list-none mb-10 mt-10 text-center sm:text-left">
                <p className="text-footer-text-color">
                  The Salt’n Pepper Restaurants are an example of gracious dining, outstanding service, extraordinary classic and contemporary cuisine. The restaurants have become the ultimate dining destinations in Lahore. From family occasions to business dinner and moments of the heart, this place is where unforgettable memories are made.
                </p>
                <p className="text-footer-text-color mt-5">Terms & conditions Privacy policy</p>
              </nav>
            </div>

            {/* Site Links Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-small text-white tracking-widest text-sm mb-3">Site Links</h2>
              <nav className="list-none mb-10">
                <li className="mb-5">
                  <a className="text-footer-text-color">Home</a>
                </li>
                <li>
                  <a className="text-footer-text-color">About Us</a>
                </li>
                <li>
                  <a className="text-footer-text-color">Publications</a>
                </li>
                <li>
                  <a className="text-footer-text-color">Get a Franchise</a>
                </li>
                <li>
                  <a className="text-footer-text-color">Feedback</a>
                </li>
              </nav>
            </div>
          </div>

          {/* Social Media Section (Centered at the end) */}
          <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-center md:mt-0 mt-10 last-social-dev">
            <h2 className="title-font font-small text-white tracking-widest text-sm mb-3">Follow Us</h2>
            <div className="flex justify-center space-x-4 mb-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-500 transition duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-500 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-500 transition duration-200"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Mobile App Download Icons */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-5 space-y-5 sm:space-y-0 sm:space-x-5">
              <img
                src="/images/ios-pic.png"
                width={150}
                height={150}
                alt="iOS App"
              />
              <img
                src="/images/google-play.png"
                width={150}
                height={150}
                alt="Google Play App"
              />
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="bg-custom-gray">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© 2024 Snp Main</p>
            <span className="inline-flex sm:ml-auto text-white sm:mt-0 mt-2 justify-center sm:justify-start">
              Powered by tossdown.com
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

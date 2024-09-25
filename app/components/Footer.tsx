// app/components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-gray-300">
            We are a dynamic company committed to delivering top-notch services in various sectors, 
            helping our clients achieve their goals through innovative solutions.
          </p>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="/partners" className="text-gray-300 hover:text-white">Partners</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Information Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-gray-300">123 Business Street, Suite 100<br />City, Country</p>
          <p className="text-gray-300 mt-2">Phone: (123) 456-7890</p>
          <p className="text-gray-300">Email: info@company.com</p>
        </div>
        
        {/* Social Media Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

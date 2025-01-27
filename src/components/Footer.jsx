import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
           <Link to="/" className="text-2xl font-bold text-purple-700 mb-4 block">
                Digital Store
              </Link>
          <p className="text-sm">© 2024 Digital Store</p>
           <p className="text-sm">All Rights Reserved</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="/tiktok" className="hover:text-purple-500">Follow us on Tiktok</a></li>
             <li><a href="/newsletter" className="hover:text-purple-500">Newsletter</a></li>
             <li><Link to="/about" className="hover:text-purple-500">About us</Link></li>
            <li><Link to="/terms" className="hover:text-purple-500">Terms & License</Link></li>
             <li><a href="/privacy" className="hover:text-purple-500">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Help & Support */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Help & Support</h4>
           <ul className="space-y-2">
              <li><a href="/tutorial" className="hover:text-purple-500">Tutorials & Guides ✨</a></li>
              <li><a href="/documentation" className="hover:text-purple-500">Documentation</a></li>
                <li><a href="/faq" className="hover:text-purple-500">FAQ</a></li>
                <li><Link to="/contact" className="hover:text-purple-500">Contact Us</Link></li>
           </ul>
        </div>
          {/*  
          <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Other Products</h4>
              <ul className="space-y-2">
                 <li><a href="/free" className="hover:text-purple-500">Free templates</a></li>
                 <li><a href="/landing" className="hover:text-purple-500">Landing page inspiration</a></li>
                 <li><a href="/web" className="hover:text-purple-500">Web app inspiration</a></li>
              </ul>
          </div>
          */}
      </div>
    </footer>
  );
};

export default Footer;
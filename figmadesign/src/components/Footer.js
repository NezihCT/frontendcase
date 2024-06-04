import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGlobe } from 'react-icons/fa';
import appleStore from '../assets/images/app_store.svg';
import googlePlay from '../assets/images/google_play.svg';

function Footer() {
  return (
    <footer className="bg-dark text-white py-12" style={{ background: '#0F172A'}}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul>
            <li className="mb-2"><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
            <li className="mb-2"><a href="#overview" className="text-gray-400 hover:text-white">Overview</a></li>
            <li className="mb-2"><a href="#browse" className="text-gray-400 hover:text-white">Browse</a></li>
            <li className="mb-2"><a href="#accessibility" className="text-gray-400 hover:text-white">Accessibility</a></li>
            <li className="mb-2"><a href="#five" className="text-gray-400 hover:text-white">Five</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul>
            <li className="mb-2"><a href="#brainstorming" className="text-gray-400 hover:text-white">Brainstorming</a></li>
            <li className="mb-2"><a href="#ideation" className="text-gray-400 hover:text-white">Ideation</a></li>
            <li className="mb-2"><a href="#wireframing" className="text-gray-400 hover:text-white">Wireframing</a></li>
            <li className="mb-2"><a href="#research" className="text-gray-400 hover:text-white">Research</a></li>
            <li className="mb-2"><a href="#design" className="text-gray-400 hover:text-white">Design</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><a href="#contact-us" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li className="mb-2"><a href="#developers" className="text-gray-400 hover:text-white">Developers</a></li>
            <li className="mb-2"><a href="#documentation" className="text-gray-400 hover:text-white">Documentation</a></li>
            <li className="mb-2"><a href="#integrations" className="text-gray-400 hover:text-white">Integrations</a></li>
            <li className="mb-2"><a href="#reports" className="text-gray-400 hover:text-white">Reports</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Get the App</h3>
          <div className="mb-6">
            <a href="#app-store" className="block mb-4 text-gray-400 hover:text-white"><img src={appleStore} alt="App Store" style={{ width: '150px', height: 'auto' }}/></a>
            <a href="#google-play" className="block text-gray-400 hover:text-white"><img src={googlePlay} alt="Google Play" style={{ width: '150px', height: 'auto' }}/></a>
          </div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#youtube" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
            <a href="#facebook" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="#twitter" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#instagram" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="#linkedin" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-4">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <div className="text-gray-500">
            &copy; 2023 Collers. All rights reserved.
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#language" className="hover:text-white flex items-center">
              <FaGlobe size={16} className="mr-1" />EN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

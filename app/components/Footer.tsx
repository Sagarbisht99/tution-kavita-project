import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-10 px-4 sm:px-8 mt-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
      {/* Left: Logo and description */}
      <div className="flex-1 min-w-[200px] flex flex-col gap-3">
        <span className="text-xl font-bold text-blue-700">Academy</span>
        <p className="text-gray-500 text-sm max-w-xs">#1 E-Learning Platform For Your Child</p>
        <div className="flex gap-3 mt-2">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-700"><FaFacebook size={20} /></a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-700"><FaTwitter size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700"><FaLinkedin size={20} /></a>
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-blue-700"><FaYoutube size={20} /></a>
        </div>
      </div>
      {/* Columns */}
      <div className="flex-[2] grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold mb-2 text-gray-700">Academy</div>
          <ul className="text-sm text-gray-500 space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Tutors</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-gray-700">Social</div>
          <ul className="text-sm text-gray-500 space-y-1">
            <li><a href="#">X</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Udemy</a></li>
            <li><a href="#">Coursera</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-gray-700">Resources</div>
          <ul className="text-sm text-gray-500 space-y-1">
            <li><a href="#">Free E-Book</a></li>
            <li><a href="#">Recordings</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-gray-700">Extra Links</div>
          <ul className="text-sm text-gray-500 space-y-1">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-8">&copy; Copyright 2023 All Right Reserved To Academy</div>
  </footer>
);

export default Footer; 
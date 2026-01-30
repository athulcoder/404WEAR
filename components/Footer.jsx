"use client";

import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";import { FaStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">404Wear</h2>
            <p className="text-sm leading-relaxed mb-4">
              Premium streetwear designed for comfort, confidence, and everyday style.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white">Collections</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>123 Fashion Street, New York, USA</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 234 567 8900</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@404wear.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment + Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Payments */}
          <div className="flex gap-3 items-center text-sm">
            <div className="flex gap-2 justify-center items-center">
              <RiVisaLine size={30} className="hover:text-violet-500 duration-300"/>
              <RiMastercardFill size={30} className="hover:text-violet-500 duration-300"/>
              <FaStripe size={30} className="hover:text-violet-500 duration-300"/>
              <FaCcPaypal size={30} className="hover:text-violet-500 duration-300"/>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} 404Wear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

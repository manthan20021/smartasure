"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* TOP SECTION */}
      <div className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">

              <Image
                   alt="img" 
                   width={90} 
                   height={60} 
                   src="/logo.png" 
                   className=" w-50 h-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">


            {/* HOW IT WORKS */}
            <ul className="leading-8">
              <li className="text-lg mb-4 text-gray-500">HOW IT WORKS</li>
              <li className="font-thin text-gray-300 text-sm">Private Consultation</li>
              <li className="font-thin text-gray-300 text-sm">Intelligent Design</li>
              <li className="font-thin text-gray-300 text-sm">Precision Installation</li>
              <li className="font-thin text-gray-300 text-sm">Seamless Integration</li>
              <li className="font-thin text-gray-300 text-sm">Ongoing Support</li>
            </ul>

            {/* WHAT WE CREATE */}
            <ul className="leading-8">
              <li className="text-lg mb-4 text-gray-500">WHAT WE CREATE</li>
              <li className="font-thin text-gray-300 text-sm">Designer Smart Switches</li>
              <li className="font-thin text-gray-300 text-sm">Home Theatre Automation</li>
              <li className="font-thin text-gray-300 text-sm">Curtain & Blind Automation</li>
              <li className="font-thin text-gray-300 text-sm">Gate & Access Automation</li>
              <li className="font-thin text-gray-300 text-sm">Smart Locks & Security</li>
              <li className="font-thin text-gray-300 text-sm">Unified App & Voice Control</li>
            </ul>

            {/* SOCIAL */}
            <ul className="leading-8">
              <li className="text-lg mb-4 text-gray-500">SOCIAL MEDIA</li>
              <li className="font-thin text-gray-300 text-sm">Instagram</li>
              <li className="font-thin text-gray-300 text-sm">WhatsApp</li>
            </ul>

            {/* COMPANY */}
            <ul className="leading-8 flex flex-col">
              <li className="text-lg mb-4 text-gray-500">COMPANY</li>
              <Link href="/" className="text-lg mb-4 text-gray-500">Home</Link>
              <Link href="/web/about" className="text-lg mb-4 text-gray-500">About</Link>
              <Link href="/web/brand-philosophy" className="text-lg mb-4 text-gray-500">Brand Philosophy</Link>
              <Link href="/web/what-we-creat" className="text-lg mb-4 text-gray-500">What We Create</Link>
              <Link href="/web/how-it-works" className="text-lg mb-4 text-gray-500">Process</Link>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-gray-400">
        <p>© 2025 SmartaSure. All rights reserved.</p>
        <p>A Brand of Agryen Technologies LLP GST: 27ACMFA5083H1Z5</p>
        <p>
          Developed by{" "}
          
          <Link 
          href="https://www.linkedin.com/in/manthan-harale-04a469276/" className="border-b border-gray-500 text-blue-500"
          >
            Manthan
          </Link>
        </p>
      </div>
    </footer>
  );
}

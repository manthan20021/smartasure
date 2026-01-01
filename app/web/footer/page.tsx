"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* TOP SECTION */}
      <div className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">

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
            <ul className="leading-8">
              <li className="text-lg mb-4 text-gray-500">COMPANY</li>
              <li className="font-thin text-gray-300 text-sm">Home</li>
              <li className="font-thin text-gray-300 text-sm">About</li>
              <li className="font-thin text-gray-300 text-sm">Brand Philosophy</li>
              <li className="font-thin text-gray-300 text-sm">What We Create</li>
              <li className="font-thin text-gray-300 text-sm">Experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-gray-400">
        <p>© 2025 SmartaSure. All rights reserved.</p>
        <p>
          Developed by{" "}
          <span className="border-b border-gray-500 text-green-500">
            Manthan
          </span>
        </p>
      </div>
    </footer>
  );
}

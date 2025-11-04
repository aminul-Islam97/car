"use client"

import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [year] = useState(new Date().getFullYear())

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "LinkedIn", href: "#", icon: "💼" }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Sign In", href: "/signin" }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="flex flex-col items-start space-y-4">
          <div className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
            QuickCar Rentals
          </div>
          <p className="text-gray-400 text-sm">
            Rent your perfect car easily. Safe, fast, and reliable.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-transform duration-300 text-2xl"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          {quickLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-blue-500 hover:translate-x-1 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Contact Us</h3>
          <p className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">📧 info@quickcar.com</p>
          <p className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">📞 +1 234 567 890</p>
          <p className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">🏢 123 Main Street, City, Country</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {year} QuickCar Rentals. All rights reserved.
      </div>
    </footer>
  )
}

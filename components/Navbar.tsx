"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-15 h-10 sm:w-17 sm:h-19 lg:w-22 lg:h-25 transition-transform duration-200 group-hover:scale-110">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiM0Njg4RkYiIHN0cm9rZT0iIzM0NjZFRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xMiAxMkgyME0xMiAxNkgyME0xMiAyMEgyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="
                }}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/signin">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg">
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-gray-200 py-4 space-y-4 bg-white">
            <Link href="/features" className="block text-gray-700 hover:text-blue-600 font-medium px-4">
              Features
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-blue-600 font-medium px-4">
              Pricing
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium px-4">
              About
            </Link>
            <Link href="/signin">
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-transform duration-200 hover:scale-105 shadow-md">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

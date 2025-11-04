"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false)

  // Trigger fade-in animation on mount
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-3xl bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } hover:scale-105`}
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 transition-transform duration-500 hover:scale-105">
          About Our Car Rental Service
        </h1>
        <p className="text-gray-700 mb-4 transition-opacity duration-700 hover:opacity-90">
          Welcome to <span className="font-semibold text-blue-600">QuickCar Rentals</span>, your trusted partner for hassle-free car rentals. 
          We provide a wide range of vehicles, from economy cars to luxury SUVs, to make your trips comfortable, safe, and convenient.
        </p>
        <p className="text-gray-700 mb-4 transition-opacity duration-700 hover:opacity-90">
          Our mission is to offer flexible rental plans, transparent pricing, and excellent customer service. Whether it's a short trip around the city 
          or a long road trip, we have the perfect car for your needs.
        </p>
        <p className="text-gray-700 mb-6 transition-opacity duration-700 hover:opacity-90">
          All our cars come with insurance, GPS options, and roadside assistance to ensure you have a smooth journey. Booking is simple, fast, and fully online.
        </p>
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

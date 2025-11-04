"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function PricingPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const rentalPlans = [
    {
      name: "Economy",
      price: "$25",
      period: "day",
      description: "Affordable cars for short trips",
      features: [
        "Compact car",
        "Unlimited mileage",
        "Basic insurance",
        "Air conditioning",
        "Manual transmission"
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "$50",
      period: "day",
      description: "Comfortable and reliable cars",
      features: [
        "Sedan or Hatchback",
        "Unlimited mileage",
        "Standard insurance",
        "Air conditioning",
        "Automatic transmission",
        "GPS included"
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$120",
      period: "day",
      description: "Premium cars for special occasions",
      features: [
        "Luxury car (SUV, Sedan, Convertible)",
        "Unlimited mileage",
        "Full insurance coverage",
        "Air conditioning & GPS",
        "Automatic transmission",
        "VIP pickup & drop",
        "Extra amenities"
      ],
      popular: false,
    }
  ]

  return (
    <div className="mt-5 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 transition-transform duration-500 hover:scale-105">
            Rent Your Perfect Car
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the right car for your trip. Flexible plans and hassle-free rentals.
          </p>
        </div>

        {/* Rental Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rentalPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-700 transform ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } delay-${index * 100} ${
                plan.popular 
                  ? 'bg-white border-2 border-purple-500 shadow-2xl hover:scale-105'
                  : 'bg-white border border-gray-200 shadow-lg hover:scale-102'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-purple-600' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center text-gray-700 transition-all duration-500 transform ${
                      loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <svg className={`w-5 h-5 mr-3 ${plan.popular ? 'text-purple-500' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/signup">
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:shadow-lg hover:scale-105'
                  }`}
                >
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

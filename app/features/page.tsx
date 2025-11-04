"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function FeaturesPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const features = [
    {
      title: "Wide Range of Cars",
      description: "Choose from economy, standard, and luxury cars to suit your trip and budget.",
      icon: "🚗"
    },
    {
      title: "Flexible Rental Plans",
      description: "Hourly, daily, or weekly rental options with easy online booking.",
      icon: "🕒"
    },
    {
      title: "Insurance & Safety",
      description: "All vehicles come with insurance and roadside assistance for a safe journey.",
      icon: "🛡️"
    },
    {
      title: "Easy Online Booking",
      description: "Book your car in minutes with our simple and fast online system.",
      icon: "💻"
    },
    {
      title: "24/7 Customer Support",
      description: "Our support team is always ready to help you, anytime and anywhere.",
      icon: "📞"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 transition-transform duration-500 hover:scale-105">
          Our Features
        </h1>

        <ul className="space-y-6">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-start space-x-4 p-4 rounded-xl border border-gray-200 shadow-sm bg-white transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="text-3xl">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
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

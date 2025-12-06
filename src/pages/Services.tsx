import React from 'react'
import { Link } from 'react-router-dom'

const Services: React.FC = () => {
  const services = [
    {
      category: "Haircuts",
      items: [
        {
          name: "Classic Cut",
          description: "Traditional scissor and clipper cut with precision styling and finishing",
          price: "$25",
          duration: "30 minutes",
          popular: true
        },
        {
          name: "Executive Cut",
          description: "Premium haircut with hot towel treatment, scalp massage, and detailed styling",
          price: "$45",
          duration: "45 minutes",
          popular: false
        },
        {
          name: "Kids Cut (12 & under)",
          description: "Gentle haircut for children with patient, experienced barbers",
          price: "$20",
          duration: "25 minutes",
          popular: false
        },
        {
          name: "Senior Cut (65+)",
          description: "Discounted haircut for seniors with extra care and attention",
          price: "$18",
          duration: "30 minutes",
          popular: false
        }
      ]
    },
    {
      category: "Beard Services",
      items: [
        {
          name: "Beard Trim & Shape",
          description: "Professional beard shaping, lining, and styling with precision detail",
          price: "$15",
          duration: "20 minutes",
          popular: false
        },
        {
          name: "Royal Beard Treatment",
          description: "Beard trim with hot towel, oil treatment, and detailed styling",
          price: "$35",
          duration: "40 minutes",
          popular: true
        },
        {
          name: "Beard Design & Sculpt",
          description: "Custom beard design and sculpting for unique styles and patterns",
          price: "$25",
          duration: "30 minutes",
          popular: false
        }
      ]
    },
    {
      category: "Shaving Services",
      items: [
        {
          name: "Classic Hot Towel Shave",
          description: "Traditional straight razor shave with hot towels and premium lather",
          price: "$30",
          duration: "45 minutes",
          popular: true
        },
        {
          name: "Head Shave",
          description: "Complete head shave with hot towel treatment and moisturizing finish",
          price: "$25",
          duration: "30 minutes",
          popular: false
        },
        {
          name: "Executive Shave Package",
          description: "Full face shave with facial treatment, mask, and moisturizing",
          price: "$50",
          duration: "60 minutes",
          popular: false
        }
      ]
    },
    {
      category: "Packages & Deals",
      items: [
        {
          name: "Cut & Beard Combo",
          description: "Classic haircut with beard trim and shape - perfect combination",
          price: "$35",
          duration: "50 minutes",
          popular: true
        },
        {
          name: "Full Grooming Package",
          description: "Haircut, beard trim, hot towel shave, and scalp massage",
          price: "$65",
          duration: "90 minutes",
          popular: false
        },
        {
          name: "Father & Son Package",
          description: "Two classic cuts (one adult, one child) at a special price",
          price: "$40",
          duration: "55 minutes",
          popular: false
        },
        {
          name: "Monthly Membership",
          description: "Unlimited haircuts and 50% off all other services for 30 days",
          price: "$89",
          duration: "Monthly",
          popular: false
        }
      ]
    }
  ]

  const addOns = [
    {
      name: "Hot Towel Treatment",
      description: "Relaxing hot towel treatment for face or neck",
      price: "+$10"
    },
    {
      name: "Scalp Massage",
      description: "5-minute relaxing scalp massage with essential oils",
      price: "+$8"
    },
    {
      name: "Hair & Beard Wash",
      description: "Premium shampoo and conditioning treatment",
      price: "+$5"
    },
    {
      name: "Styling Product",
      description: "Take home your preferred styling product",
      price: "+$15-25"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Our Traditional Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Time-honored grooming services in the heart of Armagh. From classic scissor cuts 
            to traditional hot towel shaves, we deliver authentic barbering excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border-2 border-red-100 ${
                      service.popular ? 'ring-2 ring-red-500' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="text-red-600 text-3xl font-bold mb-2">{service.price}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {service.duration}
                    </div>
                    <Link
                      to="/booking"
                      className="block w-full bg-indigo-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                    >
                      Book Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhance Your Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Add these services to any treatment for the ultimate grooming experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{addOn.name}</h3>
                <p className="text-gray-600 mb-3">{addOn.description}</p>
                <div className="text-indigo-600 font-bold">{addOn.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Membership Program</h2>
            <p className="text-xl mb-8">
              Get unlimited haircuts and exclusive discounts with our monthly membership
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold mb-4">$89<span className="text-xl font-normal">/month</span></div>
              <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Unlimited classic haircuts
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  50% off all other services
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Priority booking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Free styling products monthly
                </li>
              </ul>
              <Link
                to="/booking"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Sign Up for Membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the Classic Cuts difference
          </p>
          <Link
            to="/booking"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
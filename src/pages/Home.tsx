import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const services = [
    {
      title: "Classic Haircut",
      description: "Traditional scissor and clipper cut with precision styling",
      price: "$25",
      duration: "30 min"
    },
    {
      title: "Beard Trim",
      description: "Professional beard shaping and detailing",
      price: "$15",
      duration: "20 min"
    },
    {
      title: "Hot Towel Shave",
      description: "Luxurious straight razor shave with hot towels",
      price: "$30",
      duration: "45 min"
    },
    {
      title: "Kids Cut",
      description: "Gentle haircut for children 12 and under",
      price: "$20",
      duration: "25 min"
    }
  ]

  const testimonials = [
    {
      name: "James Mitchell",
      rating: 5,
      comment: "Best barbershop in town! Always get a perfect cut and the atmosphere is amazing.",
      service: "Classic Haircut"
    },
    {
      name: "Carlos Rodriguez",
      rating: 5,
      comment: "Professional staff and excellent service. My beard has never looked better!",
      service: "Beard Trim & Style"
    },
    {
      name: "David Chen",
      rating: 5,
      comment: "The hot towel shave is incredible. Worth every penny. I won't go anywhere else.",
      service: "Hot Towel Shave"
    }
  ]

  const faqs = [
    {
      question: "Do I need to book an appointment?",
      answer: "While walk-ins are welcome, we highly recommend booking an appointment to ensure availability and minimize wait times."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, and mobile payments including Apple Pay and Google Pay."
    },
    {
      question: "Do you offer services for children?",
      answer: "Yes! We offer special pricing for children 12 and under, and our barbers are experienced in working with kids."
    },
    {
      question: "How often should I get a haircut?",
      answer: "For most styles, we recommend every 4-6 weeks to maintain your look. For very short styles, every 3-4 weeks works best."
    },
    {
      question: "Do you offer grooming products?",
      answer: "Yes, we carry a curated selection of premium grooming products including pomades, beard oils, and styling tools."
    },
    {
      question: "Can I request a specific barber?",
      answer: "Absolutely! When booking, you can request your preferred barber, and we'll do our best to accommodate your request."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-600 to-red-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,.1) 10px,
              rgba(255,255,255,.1) 20px
            )`
          }}></div>
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif">
              Armagh Barber Co.
              <span className="text-red-200 block">Since 1985</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-red-100 max-w-2xl mx-auto">
              Traditional barbering in the heart of Cathedral City. Experience timeless craftsmanship 
              and heritage grooming where every cut is a work of art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              >
                Book Your Appointment
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Traditional Craftsmanship</h3>
              <p className="text-gray-600">Four decades of heritage barbering. Timeless techniques passed down through generations.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Barbers</h3>
              <p className="text-gray-600">Our skilled barbers combine traditional methods with modern expertise for perfect results.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Heritage Experience</h3>
              <p className="text-gray-600">Classic hot towel shaves and traditional cuts in our authentic Armagh barbershop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From classic cuts to modern styling, we offer everything you need to look your best
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                <div className="text-indigo-600 text-3xl font-bold mb-2">{service.price}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {service.duration}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Best Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the difference a professional cut can make
          </p>
          <Link
            to="/booking"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            Book Your Appointment Today
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. Here are some of our most common inquiries.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const Barbers: React.FC = () => {
  const barbers = [
    {
      name: "Marcus Thompson",
      title: "Master Barber & Owner",
      experience: "15+ years",
      bio: "Marcus founded Classic Cuts with a vision to bring traditional barbering into the modern era. With over 15 years of experience, he specializes in classic cuts, straight razor shaves, and beard sculpting.",
      specialties: ["Classic Cuts", "Straight Razor Shaves", "Beard Design", "Hot Towel Treatments"],
      awards: ["Best Barber 2023", "Master Barber Certification"],
      availability: "Mon-Sat",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      title: "Senior Barber",
      experience: "10+ years",
      bio: "David brings a creative edge to classic barbering. His expertise in modern fades and textured cuts has made him a favorite among younger clients while maintaining respect for traditional techniques.",
      specialties: ["Modern Fades", "Textured Cuts", "Beard Styling", "Kids Cuts"],
      awards: ["Fade Master Certification", "Customer Choice Award 2022"],
      availability: "Tue-Sun",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Chen",
      title: "Expert Barber",
      experience: "8+ years",
      bio: "James combines precision cutting with an artistic eye. His attention to detail and ability to understand client needs has earned him a loyal following and numerous referrals.",
      specialties: ["Precision Cuts", "Asian Hair Techniques", "Styling", "Scissor Over Comb"],
      awards: ["Precision Cutting Certificate", "5-Star Rating 2023"],
      availability: "Mon-Fri",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Williams",
      title: "Barber & Stylist",
      experience: "6+ years",
      bio: "Michael is known for his friendly personality and ability to make clients feel comfortable. He excels at both traditional and contemporary styles, always staying current with the latest trends.",
      specialties: ["Contemporary Styles", "Color Consultation", "Wedding Grooming", "Executive Cuts"],
      awards: ["Trendsetter Award 2023", "Customer Service Excellence"],
      availability: "Wed-Sun",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    }
  ]

  const testimonials = [
    {
      barber: "Marcus Thompson",
      client: "Robert K.",
      text: "Marcus has been cutting my hair for 8 years. Consistently excellent service and attention to detail.",
      rating: 5
    },
    {
      barber: "David Rodriguez",
      client: "Alex M.",
      text: "David gives the best fades in town! Always knows exactly what I want even when I can't explain it well.",
      rating: 5
    },
    {
      barber: "James Chen",
      client: "Kevin L.",
      text: "James is a master with Asian hair types. Finally found someone who understands my hair texture perfectly.",
      rating: 5
    },
    {
      barber: "Michael Williams",
      client: "Thomas R.",
      text: "Michael always makes me feel welcome and gives great advice on styling. Highly recommend!",
      rating: 5
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Meet Our Expert Barbers</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to providing you with the perfect cut 
            and an exceptional grooming experience every time.
          </p>
        </div>
      </section>

      {/* Barbers Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {barbers.map((barber, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={barber.image}
                      alt={barber.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{barber.name}</h3>
                      <p className="text-indigo-600 font-semibold mb-2">{barber.title}</p>
                      <p className="text-sm text-gray-600 mb-3">{barber.experience} experience</p>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{barber.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {barber.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {barber.awards.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {barber.awards.map((award, idx) => (
                            <span
                              key={idx}
                              className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
                            >
                              🏆 {award}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Available: {barber.availability}
                      </div>
                      <Link
                        to="/booking"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                      >
                        Book with {barber.name.split(' ')[0]}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Barbers?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is committed to excellence in every aspect of barbering
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Professionals</h3>
              <p className="text-gray-600">All our barbers are fully licensed and continuously trained in the latest techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Education</h3>
              <p className="text-gray-600">Regular training and workshops to stay current with trends and techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Passionate Craftsmen</h3>
              <p className="text-gray-600">Genuine love for the art of barbering and dedication to client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Clients Say About Our Barbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.client}</div>
                    <div className="text-sm text-indigo-600">Client of {testimonial.barber}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Your Perfect Barber?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book an appointment today and experience the skill and artistry of our professional team
          </p>
          <Link
            to="/booking"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Barbers
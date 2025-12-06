import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'haircuts', name: 'Haircuts' },
    { id: 'beards', name: 'Beard Styles' },
    { id: 'shaves', name: 'Shaves' },
    { id: 'shop', name: 'Our Shop' }
  ]

  const galleryImages = [
    // Haircuts
    {
      id: 1,
      category: 'haircuts',
      title: 'Classic Executive Cut',
      description: 'Professional business cut with precision styling',
      image: 'https://images.unsplash.com/photo-1503951914875-402c5b498a4b?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      category: 'haircuts',
      title: 'Modern Fade',
      description: 'Contemporary fade with textured top',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      category: 'haircuts',
      title: 'Textured Crop',
      description: 'Modern textured crop with clean sides',
      image: 'https://images.unsplash.com/photo-1585747820729-36013e2d3c20?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      category: 'haircuts',
      title: 'Classic Scissor Cut',
      description: 'Traditional scissor over comb technique',
      image: 'https://images.unsplash.com/photo-1560069007-67cba82824d4?w=400&h=400&fit=crop'
    },
    // Beards
    {
      id: 5,
      category: 'beards',
      title: 'Professional Beard Trim',
      description: 'Precision beard shaping and detailing',
      image: 'https://images.unsplash.com/photo-1519415305473-1e431e5399c8?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      category: 'beards',
      title: 'Full Beard Style',
      description: 'Complete beard grooming and styling',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      category: 'beards',
      title: 'Designer Beard',
      description: 'Custom beard design and sculpting',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    },
    // Shaves
    {
      id: 8,
      category: 'shaves',
      title: 'Hot Towel Shave',
      description: 'Traditional straight razor shave experience',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a8295a6c3c?w=400&h=400&fit=crop'
    },
    {
      id: 9,
      category: 'shaves',
      title: 'Executive Shave',
      description: 'Premium shaving treatment with facial care',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop'
    },
    {
      id: 10,
      category: 'shaves',
      title: 'Head Shave',
      description: 'Professional head shave with hot towel treatment',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop'
    },
    // Shop
    {
      id: 11,
      category: 'shop',
      title: 'Classic Cuts Interior',
      description: 'Our comfortable and stylish barbershop',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a0294c?w=400&h=400&fit=crop'
    },
    {
      id: 12,
      category: 'shop',
      title: 'Barber Station',
      description: 'Professional barber workstation',
      image: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=400&h=400&fit=crop'
    },
    {
      id: 13,
      category: 'shop',
      title: 'Waiting Area',
      description: 'Comfortable waiting area for our clients',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop'
    },
    {
      id: 14,
      category: 'shop',
      title: 'Grooming Products',
      description: 'Premium selection of grooming products',
      image: 'https://images.unsplash.com/photo-1596462502278-27d4415e3b76?w=400&h=400&fit=crop'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our work and see the artistry that goes into every cut, shave, and style. 
            From classic looks to modern trends, we showcase our best work.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest work, behind-the-scenes content, and grooming tips
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">@classiccuts</h3>
              <p className="mb-6">Follow us for daily inspiration, grooming tips, and exclusive offers</p>
              <a
                href="https://instagram.com/classiccuts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inspired by what you see? Book an appointment and let our expert barbers create your perfect look
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

export default Gallery
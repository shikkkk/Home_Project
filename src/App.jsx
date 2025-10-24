import React, { useState } from 'react';

export default function RealtorHomePage() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: 'any',
    sortBy: 'newest',
    bedrooms: 'any',
    baths: 'any',
    minPrice: '',
    maxPrice: ''
  });

  const handleSearch = () => {
    console.log('Search params:', searchParams);
    alert('Search functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <img 
              src="images/logo.webp" 
              alt="Company Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <img 
            src="images/banner.jpg" 
            alt="Hero Banner" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-lg font-light mb-4 tracking-wide">MARCI METZGER - THE RIDGE REALTY GROUP</h1>
            <p className="text-6xl font-light tracking-wider">Pahrump Realtor</p>
          </div>
        </div>
      </section>

      {/* Realtor Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block">
            <div className="w-80 h-80 mx-auto mb-8 border-4 border-black overflow-hidden bg-gray-100">
              <img 
                src="images/rs=w_365,h_365,cg_true.webp" 
                alt="Marci J Metzger" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-light text-black mb-3 tracking-wide">Marci J Metzger</h2>
            <p className="text-sm text-gray-600 mb-6 tracking-widest uppercase">REALTOR for Nearly Three Decades</p>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
              Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 text-black tracking-wide">GET IT SOLD</h2>
          <div className="space-y-8">
            {[
              { 
                id: 1, 
                image: 'images/f1.webp',
                title: 'Top Residential Sales Last 5 Years',
                description: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.'
              },
              { 
                id: 2, 
                image: 'images/f2.webp',
                title: 'Don\'t Just List it...',
                description: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.'
              },
              { 
                id: 3, 
                image: 'images/f3.webp',
                title: 'Guide to Buyers',
                description: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!'
              }
            ].map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 overflow-hidden hover:border-black transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-80 bg-gray-100 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl font-light mb-3 text-black">{item.title}</h3>
                      <p className="text-gray-600 text-sm font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Your Dream Home Search */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0">
          <img 
            src="images/find_section.jpg" 
            alt="Find Your Dream Home Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-light text-center mb-16 text-black tracking-wide">Find Your Dream Home</h2>
          <div className="bg-white border-2 border-black p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-xs font-light text-gray-700 mb-2 tracking-wider uppercase">Location</label>
                <input
                  type="text"
                  placeholder="Enter city or zip"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-light"
                />
              </div>
              <div>
                <label className="block text-xs font-light text-gray-700 mb-2 tracking-wider uppercase">Property Type</label>
                <select
                  value={searchParams.type}
                  onChange={(e) => setSearchParams({...searchParams, type: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-light"
                >
                  <option value="any">Any</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-light text-gray-700 mb-2 tracking-wider uppercase">Sort By</label>
                <select
                  value={searchParams.sortBy}
                  onChange={(e) => setSearchParams({...searchParams, sortBy: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-light"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="beds">Most Beds</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-light text-gray-700 mb-2 tracking-wider uppercase">Bedrooms</label>
                <select
                  value={searchParams.bedrooms}
                  onChange={(e) => setSearchParams({...searchParams, bedrooms: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-light"
                >
                  <option value="any">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-light text-gray-700 mb-2 tracking-wider uppercase">Bathrooms</label>
                <select
                  value={searchParams.baths}
                  onChange={(e) => setSearchParams({...searchParams, baths: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-light"
                >
                  <option value="any">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-light text-gray-700 mb-2 tracking-wider uppercase">Min Price</label>
                <input
                  type="text"
                  placeholder="$0"
                  value={searchParams.minPrice}
                  onChange={(e) => setSearchParams({...searchParams, minPrice: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-light"
                />
              </div>
              <div>
                <label className="block text-xs font-light text-gray-700 mb-2 tracking-wider uppercase">Max Price</label>
                <input
                  type="text"
                  placeholder="No max"
                  value={searchParams.maxPrice}
                  onChange={(e) => setSearchParams({...searchParams, maxPrice: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none font-light"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-black hover:bg-gray-800 text-white font-light py-3 px-6 transition-colors tracking-wider uppercase text-sm"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 text-black tracking-wide">Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'images/l1.webp',
              'images/l2.webp',
              'images/l3.webp',
              'images/l4.webp'
            ].map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-8 bg-white border border-gray-200 hover:border-black transition-colors">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index + 1}`} 
                  className="w-full h-auto max-w-xs object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 text-black tracking-wide">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'images/p1.webp',
              'images/p2.webp',
              'images/p3.webp',
              'images/p4.webp',
              'images/p5.webp',
              'images/p6.webp'
            ].map((photo, index) => (
              <div key={index} className="aspect-square bg-gray-100 border border-gray-200 hover:border-black transition-colors cursor-pointer overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 text-black tracking-wide">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'images/S1.webp',
                title: 'Real Estate Done Right',
                description: 'Nervous about your property adventure? Don\'t be. Whether you\'re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!'
              },
              {
                image: 'images/S2.webp',
                title: 'Commercial & Residential',
                description: 'Large or small, condo or mansion, we can find it and get at the price that\'s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.'
              },
              {
                image: 'images/S3.webp',
                title: 'Rely on Expertise',
                description: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.'
              }
            ].map((service, index) => (
              <div key={index} className="text-center bg-white border border-gray-200 hover:border-black transition-colors overflow-hidden">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-light mb-4 text-black tracking-wide">{service.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-12 text-black tracking-wide">Connect With Us</h2>
          <div className="flex justify-center gap-8">
            <a href="#" className="w-14 h-14 border-2 border-gray-200 flex items-center justify-center hover:border-blue-600 transition-colors group">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 border-2 border-gray-200 flex items-center justify-center hover:border-pink-600 transition-colors group">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#FDC468', stopOpacity: 1}} />
                    <stop offset="25%" style={{stopColor: '#DF5F50', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#C43699', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#7638C4', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 border-2 border-gray-200 flex items-center justify-center hover:border-blue-700 transition-colors group">
              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 border-2 border-gray-200 flex items-center justify-center hover:border-red-600 transition-colors group">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.111 5.318l-1.023.584-1.251.714c-.931.531-2.144 2.217-2.144 3.769 0 .34.034.668.091.987l-4.394 2.509-4.395-2.509c.058-.319.091-.647.091-.987 0-1.552-1.213-3.238-2.144-3.769l-1.251-.714-1.023-.584C1.599 4.408.001 5.227.001 6.802v.182c0 1.119.573 2.16 1.519 2.757l1.022.584 1.166.666c.932.532 2.229.532 3.161 0l3.132-1.787 3.132 1.787c.466.266.987.399 1.581.399.593 0 1.114-.133 1.58-.399l1.166-.666 1.022-.584c.946-.598 1.519-1.639 1.519-2.757v-.182c0-1.575-1.598-2.394-2.667-1.484zm-9.11 12.265l-4.395-2.509c.058-.319.091-.647.091-.987 0-1.552-1.213-3.238-2.144-3.769l-1.251-.714-1.023-.584C1.599 8.658.001 9.477.001 11.052v.182c0 1.119.573 2.16 1.519 2.757l1.022.584 1.166.666c.932.532 2.229.532 3.161 0l3.132-1.787 3.132 1.787c.466.266.987.399 1.581.399.593 0 1.114-.133 1.58-.399l1.166-.666 1.022-.584c.946-.598 1.519-1.639 1.519-2.757v-.182c0-1.575-1.598-2.394-2.667-1.484l-1.023.584-1.251.714c-.931.531-2.144 2.217-2.144 3.769 0 .34.034.668.091.987l-4.394 2.509z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 text-black tracking-wide">Call or Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 p-10">
              <h3 className="text-2xl font-light mb-8 text-black tracking-wide">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-black focus:outline-none font-light bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-black focus:outline-none font-light bg-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-0 py-3 border-b border-gray-300 focus:border-black focus:outline-none font-light bg-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gray-200 hover:bg-black hover:text-white text-black font-light py-3 px-12 transition-colors tracking-wider uppercase text-sm"
                >
                  Send
                </button>
                <p className="text-xs text-gray-500 font-light mt-4">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* WhatsApp Button */}
              <div className="flex justify-start mb-8">
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-800 text-white font-light py-3 px-6 transition-colors text-sm flex items-center gap-2"
                >
                  <span>💬</span> Message us on WhatsApp
                </a>
              </div>

              {/* Realtor Info */}
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-xl font-light mb-4 text-black tracking-wide">Marci Metzger - THE RIDGE REALTY GROUP</h3>
                <p className="text-gray-700 font-light mb-2 text-sm">
                  3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                </p>
                <p className="text-gray-700 font-light text-sm">(206) 919-6886</p>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-xl font-light mb-4 text-black tracking-wide">Office Hours</h3>
                <p className="text-gray-700 font-light mb-2 text-sm">
                  Open today <span className="text-black">08:00 am – 07:00 pm</span>
                </p>
                <p className="text-gray-700 font-light text-sm border-t border-gray-100 pt-4 mt-4">
                  Open daily <span className="text-black ml-4">8:00 am - 7:00 pm</span>
                </p>
                <p className="text-gray-600 font-light text-xs mt-6 italic">
                  Appointments outside office hours available upon request. Just call!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2 font-light tracking-wider">Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p>
          <p className="text-gray-400 text-sm font-light tracking-widest">Marci Metzger - THE RIDGE REALTY GROUP</p>
        </div>
      </footer>
    </div>
  );
}
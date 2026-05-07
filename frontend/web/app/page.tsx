export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building Strong Foundations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Professional Concrete Construction Services
            </p>
            <p className="text-lg mb-10 text-gray-400">
              Quality craftsmanship, reliable service, and lasting results for residential and commercial projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Foundations
              </h3>
              <p className="text-gray-600">
                Solid concrete foundations for residential and commercial buildings. Expert installation ensuring structural integrity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Driveways & Patios
              </h3>
              <p className="text-gray-600">
                Beautiful and durable concrete driveways, patios, and walkways. Custom designs to enhance your property.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Commercial Projects
              </h3>
              <p className="text-gray-600">
                Large-scale commercial concrete work including parking lots, warehouses, and industrial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed and insured for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Quality Work
              </h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Competitive rates with transparent quotes
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                Projects completed on schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Ready to start your concrete project? Contact us for a free, no-obligation quote.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Concrete Construction Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

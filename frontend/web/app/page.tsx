export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complex Construction - Midland, TX
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Professional Construction Services by Eliseo
            </p>
            <p className="text-lg mb-10 text-gray-400">
              Serving Midland, Odessa, and the Permian Basin with quality concrete, remodeling, and commercial construction services. Licensed, insured, and trusted in West Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-2xl">📞</span>
                Call Now - Free Estimate
              </a>
              <a
                href="#contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Construction Services in Midland, TX
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Complex Construction offers comprehensive construction services throughout Midland, Odessa, and West Texas. From residential to commercial projects, we deliver quality results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Concrete & Foundations
              </h3>
              <p className="text-gray-600">
                Expert concrete foundation installation for homes and businesses in Midland. Driveways, patios, slabs, and structural concrete work with guaranteed quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Home Remodeling
              </h3>
              <p className="text-gray-600">
                Complete home renovation services in Midland, TX. Kitchen remodels, bathroom upgrades, room additions, and full home transformations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Commercial Construction
              </h3>
              <p className="text-gray-600">
                Large-scale commercial projects in the Permian Basin. Office buildings, retail spaces, warehouses, and industrial construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Examples Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Work
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Examples of quality projects completed by Eliseo
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🏠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Residential Foundation
                </h3>
                <p className="text-gray-600">
                  Complete foundation work for a 3,500 sq ft home. Precision concrete pour with reinforced steel.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-600 to-orange-500 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🏢</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Commercial Office Build
                </h3>
                <p className="text-gray-600">
                  Full construction of a 5,000 sq ft office space including framing, electrical, and finishing.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🚗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Driveway & Patio
                </h3>
                <p className="text-gray-600">
                  Custom stamped concrete driveway and backyard patio with decorative borders.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-600 to-green-500 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🔨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Kitchen Remodel
                </h3>
                <p className="text-gray-600">
                  Complete kitchen renovation with custom cabinetry, countertops, and modern fixtures.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-600 to-purple-500 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🏗️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Warehouse Expansion
                </h3>
                <p className="text-gray-600">
                  10,000 sq ft warehouse addition with concrete slab and steel structure.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-red-600 to-red-500 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🏡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Home Addition
                </h3>
                <p className="text-gray-600">
                  Two-story home addition including foundation, framing, and complete finishing work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose Complex Construction in Midland?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Eliseo and the Complex Construction team bring years of experience serving Midland, Odessa, and West Texas communities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-white p-6 rounded-lg shadow">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed and insured contractor serving Midland, TX
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Quality Workmanship
              </h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship on every project
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Competitive rates with transparent, honest quotes
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Local to Midland
              </h3>
              <p className="text-gray-600">
                Proudly serving the Permian Basin community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
              Contact Complex Construction - Midland, TX
            </h2>
            <p className="text-xl text-gray-600 mb-10 text-center">
              Ready to start your construction project in Midland or the surrounding area? Contact Eliseo for a free consultation and quote.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+1234567890" className="text-orange-600 hover:text-orange-700">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:eliseo@complex.construction" className="text-orange-600 hover:text-orange-700">
                        eliseo@complex.construction
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-600">Local and surrounding areas</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="tel:+1234567890"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center text-lg"
                  >
                    📞 Call Now for Free Quote
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
                <form className="space-y-4">
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
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Complex Construction</h3>
            <p className="text-gray-400 mb-6">
              Professional construction services by Eliseo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+1234567890" className="text-orange-400 hover:text-orange-300">
                📞 (123) 456-7890
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a href="mailto:eliseo@complex.construction" className="text-orange-400 hover:text-orange-300">
                ✉️ eliseo@complex.construction
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Complex Construction. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

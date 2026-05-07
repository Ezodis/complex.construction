export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span>📍 Serving Midland, Odessa & Permian Basin</span>
            </div>
            <div className="flex items-center gap-4">
              <span>✉️ eliseo@complex.construction</span>
              <span className="hidden sm:inline">|</span>
              <a href="tel:8178415269" className="font-bold hover:underline">
                📞 (817) 841-5269
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-orange-400 font-semibold mb-4 text-lg uppercase tracking-wide">
              Professional Construction Services
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Complex Construction
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-light">
              Midland's Trusted Concrete & Construction Experts
            </p>
            <p className="text-lg mb-10 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Led by Eliseo, we deliver exceptional concrete, remodeling, and commercial construction services throughout Midland, Odessa, and the Permian Basin. Licensed, insured, and committed to quality craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8178415269"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📞</span>
                Call (817) 841-5269
              </a>
              <a
                href="#contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </a>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              ⭐ Licensed & Insured • Free Estimates • 100% Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-2 uppercase tracking-wide">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Construction Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Complex Construction offers comprehensive construction services throughout Midland, Odessa, and West Texas. From residential to commercial projects, we deliver quality results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-orange-600">
              <div className="text-orange-600 text-5xl mb-6">🏗️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Concrete & Foundations
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Expert concrete foundation installation for homes and businesses in Midland. We specialize in driveways, patios, slabs, and structural concrete work with guaranteed quality.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Residential Foundations</li>
                <li>✓ Concrete Driveways</li>
                <li>✓ Patios & Walkways</li>
                <li>✓ Commercial Slabs</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-orange-600">
              <div className="text-orange-600 text-5xl mb-6">🔨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Home Remodeling
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Complete home renovation services in Midland, TX. Transform your space with our expert kitchen remodels, bathroom upgrades, room additions, and full home transformations.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Kitchen Remodeling</li>
                <li>✓ Bathroom Renovations</li>
                <li>✓ Room Additions</li>
                <li>✓ Full Home Renovations</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-orange-600">
              <div className="text-orange-600 text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Commercial Construction
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Large-scale commercial projects in the Permian Basin. We handle office buildings, retail spaces, warehouses, and industrial construction with precision and professionalism.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Office Buildings</li>
                <li>✓ Retail Spaces</li>
                <li>✓ Warehouses</li>
                <li>✓ Industrial Facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Examples Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-2 uppercase tracking-wide">Our Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Recent Projects in Midland
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Take a look at some of the quality construction projects completed by Eliseo and the Complex Construction team throughout the Midland area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 h-64 flex items-center justify-center">
                <span className="text-white text-7xl">🏠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Residential Foundation
                </h3>
                <p className="text-gray-600 mb-3">
                  Complete foundation work for a 3,500 sq ft home in Midland. Precision concrete pour with reinforced steel for maximum durability.
                </p>
                <span className="text-orange-600 font-semibold text-sm">Midland, TX</span>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-orange-600 to-orange-500 h-64 flex items-center justify-center">
                <span className="text-white text-7xl">🏢</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Commercial Office Build
                </h3>
                <p className="text-gray-600 mb-3">
                  Full construction of a 5,000 sq ft office space including concrete work, framing, electrical, and professional finishing.
                </p>
                <span className="text-orange-600 font-semibold text-sm">Odessa, TX</span>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 h-64 flex items-center justify-center">
                <span className="text-white text-7xl">🚗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Concrete Driveway & Patio
                </h3>
                <p className="text-gray-600 mb-3">
                  Custom stamped concrete driveway and expansive backyard patio with decorative borders and professional finish.
                </p>
                <span className="text-orange-600 font-semibold text-sm">Midland, TX</span>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-green-600 to-green-500 h-64 flex items-center justify-center">
                <span className="text-white text-7xl">🔨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Kitchen Remodel
                </h3>
                <p className="text-gray-600 mb-3">
                  Complete kitchen renovation with custom cabinetry, granite countertops, modern fixtures, and updated flooring.
                </p>
                <span className="text-orange-600 font-semibold text-sm">Midland, TX</span>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-purple-600 to-purple-500 h-64 flex items-center justify-center">
                <span className="text-white text-7xl">🏗️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Warehouse Expansion
                </h3>
                <p className="text-gray-600 mb-3">
                  10,000 sq ft warehouse addition with reinforced concrete slab and steel structure for industrial use.
                </p>
                <span className="text-orange-600 font-semibold text-sm">Permian Basin</span>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-red-600 to-red-500 h-64 flex items-center justify-center">
                <span className="text-white text-7xl">🏡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Home Addition
                </h3>
                <p className="text-gray-600 mb-3">
                  Two-story home addition including foundation, framing, complete finishing work, and seamless integration.
                </p>
                <span className="text-orange-600 font-semibold text-sm">Midland, TX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold mb-2 uppercase tracking-wide">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Complex Construction Difference
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Eliseo and the Complex Construction team bring years of experience and dedication to every project in Midland, Odessa, and throughout West Texas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-600 transition-all">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-400">
                Fully licensed and insured contractor serving Midland, TX with complete protection for your project
              </p>
            </div>
            <div className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-600 transition-all">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">
                Quality Workmanship
              </h3>
              <p className="text-gray-400">
                Premium materials and expert craftsmanship on every project, backed by our satisfaction guarantee
              </p>
            </div>
            <div className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-600 transition-all">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">
                Fair Pricing
              </h3>
              <p className="text-gray-400">
                Competitive rates with transparent, honest quotes - no hidden fees or surprises
              </p>
            </div>
            <div className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-600 transition-all">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">
                Local to Midland
              </h3>
              <p className="text-gray-400">
                Proudly serving the Permian Basin community with reliable, professional service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-2 uppercase tracking-wide">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied customers throughout Midland and the surrounding areas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-orange-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Eliseo and his team did an outstanding job on our concrete driveway. Professional, on time, and the quality is exceptional. Highly recommend Complex Construction!"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">Michael R.</p>
                <p className="text-sm text-gray-600">Midland, TX</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-orange-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "We hired Complex Construction for a complete kitchen remodel. The attention to detail and craftsmanship exceeded our expectations. Our kitchen looks amazing!"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">Sarah & Tom L.</p>
                <p className="text-sm text-gray-600">Odessa, TX</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-orange-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Excellent commercial construction work. Eliseo handled our warehouse expansion professionally and completed it on schedule. Great communication throughout the project."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">David K.</p>
                <p className="text-sm text-gray-600">Midland, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-orange-600 font-semibold mb-2 uppercase tracking-wide">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Request Your Free Quote
              </h2>
              <p className="text-gray-600 text-lg">
                Ready to start your construction project in Midland or the surrounding area? Contact Eliseo today for a free, no-obligation consultation and quote.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-300 mb-1">Phone</p>
                      <a href="tel:8178415269" className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
                        (817) 841-5269
                      </a>
                      <p className="text-sm text-gray-400 mt-1">Call for immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-300 mb-1">Email</p>
                      <a href="mailto:eliseo@complex.construction" className="text-white hover:text-orange-400 transition-colors break-all">
                        eliseo@complex.construction
                      </a>
                      <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-300 mb-1">Service Area</p>
                      <p className="text-white">Midland, Odessa & Permian Basin</p>
                      <p className="text-sm text-gray-400 mt-1">Serving all of West Texas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <span className="text-2xl">🕐</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-300 mb-1">Business Hours</p>
                      <p className="text-white">Mon-Fri: 7:00 AM - 6:00 PM</p>
                      <p className="text-white">Sat: 8:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-slate-700">
                  <a
                    href="tel:8178415269"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-6 py-5 rounded-lg transition-all transform hover:scale-105 text-center shadow-lg"
                  >
                    📞 Call Now: (817) 841-5269
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-10 rounded-xl shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="(817) 555-0123"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                    <textarea
                      placeholder="Tell us about your construction project..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-6 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Get Free Quote
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    * We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t-4 border-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Complex Construction</h3>
                <p className="text-gray-400 mb-4">
                  Professional construction services by Eliseo, serving Midland, Odessa, and the Permian Basin with quality craftsmanship and reliable service.
                </p>
                <p className="text-sm text-gray-500">
                  Licensed & Insured Contractor
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Our Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Concrete Foundations</li>
                  <li>• Driveways & Patios</li>
                  <li>• Home Remodeling</li>
                  <li>• Kitchen & Bath Renovations</li>
                  <li>• Commercial Construction</li>
                  <li>• Warehouse & Industrial</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <div className="space-y-3 text-gray-400">
                  <p>
                    <a href="tel:8178415269" className="hover:text-orange-400 transition-colors font-semibold">
                      📞 (817) 841-5269
                    </a>
                  </p>
                  <p>
                    <a href="mailto:eliseo@complex.construction" className="hover:text-orange-400 transition-colors break-all">
                      ✉️ eliseo@complex.construction
                    </a>
                  </p>
                  <p>📍 Serving Midland, Odessa & West Texas</p>
                  <p className="text-sm pt-2">
                    Mon-Fri: 7:00 AM - 6:00 PM<br/>
                    Sat: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2026 Complex Construction. All rights reserved. | Midland, TX
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

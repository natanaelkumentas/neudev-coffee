import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { FiCoffee, FiMapPin, FiMail } from 'react-icons/fi';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814"
              alt="Coffee shop interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl mb-6">
              NeudevCoffee
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Authentic Indonesian Coffee Experience
            </p>
            <Link
              href="/coffee"
              className="inline-block bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full transition-colors"
            >
              Explore Our Coffee
            </Link>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Coffee */}
              <Link href="/coffee" className="group">
                <div className="bg-amber-50 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <FiCoffee
                    size={48}
                    className="mx-auto mb-4 text-amber-900 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-2xl mb-3 text-amber-900">
                    Our Coffee
                  </h3>
                  <p className="text-gray-700">
                    Discover our carefully curated selection of Indonesian
                    single-origin coffees and signature blends.
                  </p>
                </div>
              </Link>

              {/* Visit */}
              <Link href="/visit" className="group">
                <div className="bg-amber-50 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <FiMapPin
                    size={48}
                    className="mx-auto mb-4 text-amber-900 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-2xl mb-3 text-amber-900">
                    Visit Us
                  </h3>
                  <p className="text-gray-700">
                    Come experience our coffee in person at our Jakarta location.
                  </p>
                </div>
              </Link>

              {/* Contact */}
              <Link href="/contact" className="group">
                <div className="bg-amber-50 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <FiMail
                    size={48}
                    className="mx-auto mb-4 text-amber-900 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-2xl mb-3 text-amber-900">
                    Contact Us
                  </h3>
                  <p className="text-gray-700">
                    Get in touch with us for any inquiries or to place an order.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-amber-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl mb-6">
                  Indonesian Coffee Heritage
                </h2>
                <p className="text-amber-100 mb-6">
                  NeudevCoffee celebrates Indonesia's rich coffee tradition,
                  sourcing the finest beans from local farmers across the
                  archipelago.
                </p>
                <Link
                  href="/about"
                  className="inline-block border-2 border-white hover:bg-white hover:text-amber-900 text-white px-6 py-2 rounded-full transition-colors"
                >
                  Learn More
                </Link>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672570050756-4f1953bde478"
                  alt="Coffee beans roasting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

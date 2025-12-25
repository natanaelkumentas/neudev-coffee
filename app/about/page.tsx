import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden bg-amber-900">
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-4">
              Our Story
            </h1>
            <p className="text-xl">
              A passion for Indonesian coffee heritage
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                NeudevCoffee was born from a deep passion for Indonesia's rich
                coffee heritage. Indonesia is the world's fourth-largest coffee
                producer, with a history of coffee cultivation dating back to
                the 17th century.
              </p>

              <div className="my-12 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624935920936-f09b9803faf3"
                  alt="Indonesian coffee plantation"
                  className="w-full h-96 object-cover"
                />
              </div>

              <h2 className="text-3xl text-amber-900 mb-4">
                Our Philosophy
              </h2>
              <p className="text-gray-700 mb-6">
                We work directly with small-scale farmers across the Indonesian
                archipelago, from Java to Sumatra and Sulawesi, ensuring fair
                compensation and sustainable farming practices.
              </p>

              <p className="text-gray-700 mb-6">
                Every bean is carefully selected and roasted in small batches
                to highlight its unique characteristics.
              </p>

              <div className="my-12 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672570050756-4f1953bde478"
                  alt="Coffee roasting process"
                  className="w-full h-96 object-cover"
                />
              </div>

              <h2 className="text-3xl text-amber-900 mb-4">
                Our Commitment
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Sourcing only the finest Indonesian coffee beans</li>
                <li>Supporting sustainable farming practices</li>
                <li>Paying fair prices to farmer partners</li>
                <li>Roasting in small batches</li>
                <li>Delivering exceptional customer experiences</li>
              </ul>

              <p className="text-gray-700">
                By choosing NeudevCoffee, you become part of a journey that
                connects farmers, artisans, and coffee lovers worldwide.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

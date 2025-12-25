import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { FiCoffee } from 'react-icons/fi';

const menuItems = [
  {
    category: 'Espresso Based',
    items: [
      { name: 'Espresso', description: 'Rich and bold Indonesian espresso shot', price: 'Rp 25,000' },
      { name: 'Americano', description: 'Espresso with hot water', price: 'Rp 30,000' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 'Rp 35,000' },
      { name: 'Latte', description: 'Smooth espresso with steamed milk', price: 'Rp 35,000' },
      { name: 'Flat White', description: 'Velvety microfoam with espresso', price: 'Rp 38,000' },
      { name: 'Macchiato', description: 'Espresso marked with milk foam', price: 'Rp 28,000' },
    ],
  },
  {
    category: 'Indonesian Specialties',
    items: [
      { name: 'Kopi Tubruk', description: 'Traditional Indonesian ground coffee', price: 'Rp 20,000' },
      { name: 'Kopi Susu', description: 'Sweet coffee with condensed milk', price: 'Rp 28,000' },
      { name: 'Es Kopi Susu', description: 'Iced coffee with sweet milk', price: 'Rp 30,000' },
      { name: 'Kopi Jahe', description: 'Coffee infused with fresh ginger', price: 'Rp 32,000' },
      { name: 'Kopi Tarik', description: 'Pulled coffee with condensed milk', price: 'Rp 32,000' },
      { name: 'Vietnamese Drip', description: 'Slow-drip coffee over condensed milk', price: 'Rp 35,000' },
    ],
  },
  {
    category: 'Single Origin Pour Over',
    items: [
      { name: 'Sumatra Mandheling', description: 'Full-bodied with earthy notes and low acidity', price: 'Rp 40,000' },
      { name: 'Java Arabica', description: 'Smooth with chocolate undertones', price: 'Rp 40,000' },
      { name: 'Bali Kintamani', description: 'Fruity and bright acidity, citrus notes', price: 'Rp 42,000' },
      { name: 'Toraja Sulawesi', description: 'Complex with spicy notes and full body', price: 'Rp 45,000' },
      { name: 'Flores Bajawa', description: 'Balanced with chocolate and caramel notes', price: 'Rp 43,000' },
      { name: 'Aceh Gayo', description: 'Clean cup with herbal and earthy tones', price: 'Rp 42,000' },
    ],
  },
  {
    category: 'Cold Brew & Iced',
    items: [
      { name: 'Cold Brew', description: 'Smooth, low-acid cold-steeped coffee', price: 'Rp 38,000' },
      { name: 'Iced Latte', description: 'Espresso with cold milk over ice', price: 'Rp 38,000' },
      { name: 'Iced Americano', description: 'Espresso with cold water and ice', price: 'Rp 32,000' },
      { name: 'Affogato', description: 'Espresso poured over vanilla ice cream', price: 'Rp 42,000' },
    ],
  },
];

export default function CoffeePage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1645445644664-8f44112f334c"
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-4">
              Our Coffee Menu
            </h1>
            <p className="text-xl">
              Crafted with passion, served with pride
            </p>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-amber-50 rounded-lg p-8 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-900">
                    <FiCoffee size={28} className="text-amber-900" />
                    <h2 className="text-3xl text-amber-900">
                      {section.category}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="pb-4 border-b border-amber-200 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-gray-900">
                            {item.name}
                          </h3>
                          <span className="text-amber-900 ml-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-amber-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl mb-6">
              Coffee Preparation
            </h2>
            <p className="text-amber-100 mb-4">
              All our espresso-based drinks are made with our signature
              house blend, while our single-origin pour overs are prepared
              using the V60 method.
            </p>
            <p className="text-amber-100">
              Not sure what to order? Our baristas are happy to help.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

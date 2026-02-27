import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
    FiMapPin,
    FiClock,
    FiPhone,
    FiMail,
    FiInstagram,
} from 'react-icons/fi';

export default function VisitPage() {
    return (
        <>
            <Navbar />

            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative h-96 flex items-center justify-center overflow-hidden bg-amber-900">
                    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl mb-4">
                            Visit Our Café
                        </h1>
                        <p className="text-xl">
                            Experience Indonesian coffee culture in Jakarta
                        </p>
                    </div>
                </section>

                {/* Location Info */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Images */}
                            <div className="space-y-6">
                                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814"
                                        alt="Coffee shop interior"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9"
                                        alt="Barista making coffee"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div>
                                <h2 className="text-4xl text-amber-900 mb-8">
                                    Find Us
                                </h2>

                                <div className="space-y-6">
                                    <InfoCard icon={<FiMapPin size={24} />} title="Address">
                                        Jl. Neudev No. 123<br />
                                        Jakarta<br />
                                        Indonesia 12190
                                    </InfoCard>

                                    <InfoCard icon={<FiClock size={24} />} title="Hours">
                                        Monday – Friday: 7:00 AM – 9:00 PM<br />
                                        Saturday: 8:00 AM – 10:00 PM<br />
                                        Sunday: 8:00 AM – 8:00 PM
                                    </InfoCard>

                                    <InfoCard icon={<FiPhone size={24} />} title="Phone">
                                        +62 21 1234 5678
                                    </InfoCard>

                                    <InfoCard icon={<FiMail size={24} />} title="Email">
                                        contact.neudev@gmail.com
                                    </InfoCard>

                                    <InfoCard icon={<FiInstagram size={24} />} title="Social Media">
                                        @neudev_
                                    </InfoCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl text-amber-900 mb-8 text-center">
                            Location Map
                        </h2>

                        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                title="NeudevCoffee Jakarta"
                                src="https://www.google.com/maps?q=Jakarta%20City,%20Indonesia&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>
                </section>

                {/* Additional Info */}
                <section className="py-16 bg-amber-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl mb-6">
                            What to Expect
                        </h2>
                        <p className="text-amber-100 mb-4">
                            Our café offers a warm and welcoming atmosphere with expertly
                            crafted coffee, free Wi-Fi, and comfortable seating.
                        </p>
                        <p className="text-amber-100">
                            We also host coffee tastings, brewing workshops, and origin talks.
                            Follow us on social media to stay updated.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

/* Helper Component */
function InfoCard({
    icon,
    title,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-lg">
            <div className="text-amber-900 mt-1">{icon}</div>
            <div>
                <h3 className="text-xl mb-2 text-amber-900">
                    {title}
                </h3>
                <p className="text-gray-700">{children}</p>
            </div>
        </div>
    );
}

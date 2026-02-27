'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center bg-amber-900">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-4">
              Get In Touch
            </h1>
            <p className="text-xl">
              We'd love to hear from you
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl text-amber-900 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-900"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="wholesale">Wholesale / Business</option>
                      <option value="events">Events & Catering</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-900 hover:bg-amber-950 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <FiSend size={20} />
                    Send Message
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Thank you! Your message has been sent.
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl text-amber-900 mb-6">
                  Contact Information
                </h2>

                 <a href="https://neudev.web.id"
                   target="_blank">
                <Info
                  icon={<FiMapPin size={24} />}
                  title="Visit Us"
                >
                  Jakarta City, Indonesia
                </Info>
                 </a>

                 <a href="https://neudev.web.id"
                   target="_blank">
                <Info
                  icon={<FiPhone size={24} />}
                  title="Call Us"
                >
                  +62 21 1234 5678
                </Info>
                 </a>

                <a href="https://neudev.web.id"
                   target="_blank">
                <Info
                  icon={<FiMail size={24} />}
                  title="Email Us"
                >
                  contact.neudev@gmail.com
                </Info>
                </a>

                <div className="mt-8 bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl text-amber-900 mb-3">
                    Business Hours
                  </h3>
                  <p className="text-gray-700">
                    Mon–Fri: 7:00 AM – 9:00 PM<br />
                    Sat: 8:00 AM – 10:00 PM<br />
                    Sun: 8:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-amber-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
            <InfoBlock title="Wholesale">
              Partner with us for wholesale coffee supply.
            </InfoBlock>
            <InfoBlock title="Events">
              Coffee catering for corporate & private events.
            </InfoBlock>
            <InfoBlock title="Careers">
              careers@neudevcoffee.com
            </InfoBlock>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* Helper Components */

function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
}: any) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">
        {label} *
      </label>
      <input
        type={type}
        name={name}
        value={value}
        required
        onChange={onChange}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-900"
      />
    </div>
  );
}

function Info({ icon, title, children }: any) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-amber-100 p-3 rounded-lg text-amber-900">
        {icon}
      </div>
      <div>
        <h3 className="text-xl text-amber-900 mb-1">
          {title}
        </h3>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );
}

function InfoBlock({ title, children }: any) {
  return (
    <div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-amber-100">{children}</p>
    </div>
  );
}

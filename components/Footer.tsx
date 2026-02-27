import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 font-semibold">
              NeudevCoffee
            </h3>
            <p className="text-amber-200">
              Bringing you the finest Indonesian coffee experience, one cup at a time.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl mb-4 font-semibold">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/neudev_"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-amber-300 transition-colors"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://neudev.web.id"
                target="_blank"
                aria-label="Facebook"
                className="hover:text-amber-300 transition-colors"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://neudev.web.id"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-amber-300 transition-colors"
              >
                <FiTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-900 pt-8 text-center text-amber-200 text-sm">
          <p>&copy; {new Date().getFullYear()} <a href="https://www.instagram.com/neudev_/">Neudev</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

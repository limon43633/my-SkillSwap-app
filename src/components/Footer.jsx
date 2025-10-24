import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">SkillSwap</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connect with local experts, learn new skills, and share your knowledge. 
              Building a community of lifelong learners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Browse Skills
                </Link>
              </li>
              <li>
                <Link to="/my-profile" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 contact@skillswap.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Learning St, Education City</li>
              <li>🕐 Mon - Fri: 9AM - 6PM</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-gray-100 transition-colors transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
            <div className="mt-4">
              <Link 
                to="/privacy" 
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SkillSwap. All rights reserved. Made with ❤️ for learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom'
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  MessageSquare,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

const Footer = () => {

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'Browse Games', path: '/browse' },
      { name: 'Community', path: '/community' },
      { name: 'Tournaments', path: '/tournaments' },
    ],
    'Support': [
      { name: 'Help Center', path: '/help' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Bug Reports', path: '/bugs' },
      { name: 'Feature Requests', path: '/features' },
    ],
    'Legal': [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'DMCA', path: '/dmca' },
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Discord', icon: MessageSquare, url: 'https://discord.com', color: 'hover:text-indigo-400' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:text-red-400' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-400' },
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img 
                  src="/images/Favicon.png" 
                  alt="Gaming Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8">
              India's ultimate gaming community where legends connect, compete, and conquer together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-gaming-purple transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gaming-purple" />
                <span>support@creativegaming.in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gaming-purple" />
                <span>+91 98765-43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gaming-purple" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-dark-800 border border-dark-600 rounded-l-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gaming-purple focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gaming-gradient text-white text-sm font-medium rounded-r-lg hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Creative Gaming India | Sonu Rao™ Development | All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for Indian gamers</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gaming-purple to-transparent opacity-30"></div>
    </footer>
  )
}

export default Footer
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Search, 
  User, 
  Menu, 
  X, 
  Gamepad2,
  LogIn,
  UserPlus
} from 'lucide-react'
import { useAuthStore } from '@/store/authStore'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { user, isAuthenticated, logout, openAuthModal } = useAuthStore()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Browse', path: '/browse' },
    { name: 'Community', path: '/community' },
    { name: 'Tournaments', path: '/tournaments' },
    { name: 'Streams', path: '/streams' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Clean Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group"
          >
            <div className="w-16 h-16 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img 
                src="/assets/images/Favicon.png" 
                alt="Gaming Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Clean & Minimal */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/profile"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                >
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.username}
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium text-white hidden lg:block">
                    {user?.username}
                  </span>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => openAuthModal('login')}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="text-sm font-medium">Login</span>
                </button>
                <button 
                  onClick={() => openAuthModal('register')}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300"
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="text-sm font-medium">Sign Up</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile - No hamburger menu needed */}
          <div className="md:hidden">
            {/* Empty div for spacing */}
          </div>
        </div>

          {/* Mobile menu removed - using bottom navigation instead */}
      </div>
    </nav>
  )
}

export default Navbar
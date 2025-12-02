import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User, Phone, Eye, EyeOff, CheckCircle } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import toast from 'react-hot-toast'

const AuthModal = () => {
  const { isAuthModalOpen, authModalType, closeAuthModal, login, register } = useAuthStore()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    phone: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phone)
  }

  const validatePassword = (password: string) => {
    return password.length >= 6
  }

  const validateForm = (isSignUp = false) => {
    const newErrors: any = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (isSignUp) {
      // Username validation
      if (!formData.username) {
        newErrors.username = 'Username is required'
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters'
      }

      // Phone validation
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required'
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Phone number must be exactly 10 digits'
      }

      // Confirm password validation
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if ((errors as any)[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const isSignUp = authModalType === 'register'
    
    if (!validateForm(isSignUp)) {
      toast.error('Please fix the errors below')
      return
    }

    setIsLoading(true)

    try {
      if (isSignUp) {
        // Sign up logic - always succeeds with validation
        const userData = {
          email: formData.email,
          password: formData.password,
          username: "Sonu Rao", // Always use static name
          phone: formData.phone,
          avatar: `/assets/images/profile-header.jpg`,
          joinDate: new Date().toISOString().split('T')[0],
          // Static profile data
          bio: "Gaming enthusiast and competitive player",
          location: "Pune, Maharashtra",
          level: 15,
          xp: 2450,
          achievements: [
            { id: 1, name: "First Victory", description: "Won your first match", icon: "🏆", unlocked: true },
            { id: 2, name: "Level 10", description: "Reached level 10", icon: "🎯", unlocked: true },
            { id: 3, name: "Social Butterfly", description: "Made 10 friends", icon: "👥", unlocked: true }
          ],
          stats: {
            gamesPlayed: 89,
            wins: 56,
            winRate: 63,
            hoursPlayed: 127,
            rank: "Diamond",
            favoriteGame: "Cyber Strike 2077"
          },
          friends: [
            { name: "ProGamer", status: "online", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50" },
            { name: "GameMaster", status: "away", avatar: "https://images.unsplash.com/photo-1494790108755-2616b5d03192?w=50" },
            { name: "SkillShot", status: "offline", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50" }
          ],
          recentGames: [
            { name: "Cyber Strike 2077", result: "Win", score: "24/8/12", date: "Today" },
            { name: "Battle Royale", result: "Loss", score: "15/12/6", date: "Yesterday" },
            { name: "Fantasy Realm", result: "Win", score: "18/5/9", date: "2 days ago" }
          ]
        }
        
        await register(userData)
        toast.success('🎉 Account created successfully!')
        closeAuthModal()
      } else {
        // Login logic - accepts any email/password
        const userData = {
          email: formData.email,
          username: "Sonu Rao", // Static username
          avatar: `/assets/images/profile-header.jpg`,
          // Same static data as signup
          bio: "Gaming enthusiast and competitive player",
          location: "Pune, Maharashtra", 
          level: 15,
          xp: 2450,
          phone: "9876543210",
          joinDate: "2023-01-15",
          achievements: [
            { id: 1, name: "First Victory", description: "Won your first match", icon: "🏆", unlocked: true },
            { id: 2, name: "Level 10", description: "Reached level 10", icon: "🎯", unlocked: true },
            { id: 3, name: "Social Butterfly", description: "Made 10 friends", icon: "👥", unlocked: true }
          ],
          stats: {
            gamesPlayed: 89,
            wins: 56, 
            winRate: 63,
            hoursPlayed: 127,
            rank: "Diamond",
            favoriteGame: "Cyber Strike 2077"
          },
          friends: [
            { name: "ProGamer", status: "online", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50" },
            { name: "GameMaster", status: "away", avatar: "https://images.unsplash.com/photo-1494790108755-2616b5d03192?w=50" },
            { name: "SkillShot", status: "offline", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50" }
          ],
          recentGames: [
            { name: "Cyber Strike 2077", result: "Win", score: "24/8/12", date: "Today" },
            { name: "Battle Royale", result: "Loss", score: "15/12/6", date: "Yesterday" },
            { name: "Fantasy Realm", result: "Win", score: "18/5/9", date: "2 days ago" }
          ]
        }
        
        await login(userData)
        toast.success('🎮 Welcome back!')
        closeAuthModal()
      }

      // Clear form
      setFormData({
        email: '',
        password: '',
        username: '',
        phone: '',
        confirmPassword: ''
      })
      setErrors({})
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      username: '',
      phone: '',
      confirmPassword: ''
    })
    setErrors({})
    setShowPassword(false)
    setShowConfirmPassword(false)
  }

  const handleClose = () => {
    resetForm()
    closeAuthModal()
  }

  if (!isAuthModalOpen) return null

  const isSignUp = authModalType === 'register'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-slate-900 rounded-2xl p-8 w-full max-w-md border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-400">
                {isSignUp ? 'Join the gaming community' : 'Sign in to your account'}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      errors.username ? 'border-red-500' : 'border-white/10'
                    }`}
                    placeholder="Enter username"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-400 text-sm mt-1">{errors.username}</p>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, ''))}
                    className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    }`}
                    placeholder="10 digit phone number"
                    maxLength="10"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                    errors.password ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      errors.confirmPassword ? 'border-red-500' : 'border-white/10'
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  {isSignUp ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Create Account
                    </>
                  ) : (
                    'Sign In'
                  )}
                </>
              )}
            </button>

            {/* Switch Mode */}
            <div className="text-center">
              <span className="text-gray-400">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </span>
              <button
                type="button"
                onClick={() => {
                  resetForm()
                  // Toggle modal type - will be implemented in auth store
                }}
                className="ml-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AuthModal
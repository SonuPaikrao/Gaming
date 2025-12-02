import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Gamepad2, User } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'

const BottomNavigation = () => {
  const location = useLocation()
  const { isAuthenticated, openAuthModal } = useAuthStore()

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      path: '/',
      requireAuth: false
    },
    {
      id: 'games',
      label: 'Games',
      icon: Gamepad2,
      path: '/browse',
      requireAuth: false
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      path: '/profile',
      requireAuth: true
    }
  ]

  const handleNavClick = (item: any) => {
    if (item.requireAuth && !isAuthenticated) {
      openAuthModal('login')
      return
    }
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 md:hidden w-full"
    >
      <div className="flex items-center justify-around py-1 px-2">
        {navItems.map((item) => {
          const isItemActive = item.path ? isActive(item.path) : false
          
          return (
            <div key={item.id} className="flex-1">
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={() => {
                    handleNavClick(item)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all duration-300 ${
                    isItemActive
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="relative">
                    <item.icon className={`w-5 h-5 mb-0.5 ${
                      isItemActive ? 'text-purple-400' : 'text-gray-400'
                    }`} />
                    {isItemActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -inset-0.5 bg-purple-500/30 rounded-lg -z-10"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                  <span className={`text-xs font-medium ${
                    isItemActive ? 'text-purple-400' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="w-full flex flex-col items-center justify-center py-2 px-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 mb-0.5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              )}
            </div>
          )
        })}
      </div>

      {/* Safe area for phones with home indicator */}
      <div className="h-1 bg-slate-900/95"></div>
    </motion.div>
  )
}

export default BottomNavigation
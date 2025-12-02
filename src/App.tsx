import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

// Layout components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BottomNavigation from './components/layout/BottomNavigation'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Browse from './pages/Browse'
import Community from './pages/Community'
import Streams from './pages/Streams'
import Tournaments from './pages/Tournaments'
import Profile from './pages/Profile'
import GameDetails from './pages/GameDetails'

// Auth Modal
import AuthModal from './components/auth/AuthModal'

// Store
import { useAuthStore } from './store/authStore'

const App = () => {
  const { initializeAuth } = useAuthStore()

  useEffect(() => {
    initializeAuth()
  }, [initializeAuth])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-950 text-white">
        <Navbar />
        
        <main className="relative main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/community" element={<Community />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <BottomNavigation />
        <AuthModal />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a2e',
              color: '#ffffff',
              border: '1px solid #16213e',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
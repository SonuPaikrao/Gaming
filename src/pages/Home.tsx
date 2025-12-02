import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Play, 
  Trophy, 
  Users, 
  Star,
  ArrowRight,
  Globe,
  Shield,
  Headphones,
  Download
} from 'lucide-react'
import { useGameStore } from '@/store/gameStore'
import { useAuthStore } from '@/store/authStore'

const Home = () => {
  const { featuredGames, fetchFeaturedGames, fetchPopularGames } = useGameStore()
  const { isAuthenticated, user } = useAuthStore()

  useEffect(() => {
    fetchFeaturedGames()
    fetchPopularGames()
  }, [fetchFeaturedGames, fetchPopularGames])

  return (
    <div className="min-h-screen">
      {/* Clean Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        <div className="container-clean relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              <span className="block text-white mb-2">CREATIVE</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GAMING
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              The ultimate gaming platform where legends connect, compete, and conquer.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Link to="/browse" className="btn-minimal text-lg">
                <Play className="w-5 h-5" />
                Explore Games
              </Link>
              <Link to="/community" 
                className="bg-transparent border-2 border-white/20 hover:border-purple-400 text-white px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Join Community
              </Link>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">2.3M+</div>
                <div className="text-gray-400">Players</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15K+</div>
                <div className="text-gray-400">Games</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-400">Tournaments</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clean Features Section */}
      <section className="section-clean bg-slate-900/50">
        <div className="container-clean">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Why Choose <span className="text-purple-400">Creative Gaming</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience gaming like never before with our cutting-edge platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Community',
                description: 'Connect with gamers worldwide'
              },
              {
                icon: Trophy,
                title: 'Tournaments',
                description: 'Compete in epic events'
              },
              {
                icon: Shield,
                title: 'Secure Platform',
                description: 'Safe gaming environment'
              },
              {
                icon: Headphones,
                title: 'Live Support',
                description: '24/7 assistance available'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-minimal text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Featured Games */}
      <section className="section-clean">
        <div className="container-clean">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Featured <span className="text-purple-400">Games</span>
            </h2>
            <p className="text-xl text-gray-400">Discover trending games in our community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredGames.slice(0, 3).map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-minimal group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={game.images.thumbnail}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{game.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">{game.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">{(game.downloads / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="text-lg font-semibold text-purple-400">
                    {game.isFree ? 'Free' : `$${game.price}`}
                  </div>
                </div>

                <Link
                  to={`/game/${game.id}`}
                  className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/browse" className="btn-minimal">
              View All Games
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="section-clean bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container-clean text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-purple-400">Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join millions of players in the most advanced gaming community
            </p>
            {!isAuthenticated ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-minimal text-lg">
                  <Play className="w-5 h-5" />
                  Get Started Free
                </button>
                <Link to="/browse" className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Explore Platform
                </Link>
              </div>
            ) : (
              <p className="text-purple-400 text-xl">Welcome back, {user?.username}! 🎮</p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
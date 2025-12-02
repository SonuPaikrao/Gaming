import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Play, 
  Star, 
  Download, 
  Share2, 
  Heart,
  Calendar,
  Trophy,
  Users,
  Monitor,
  Smartphone,
  ArrowLeft
} from 'lucide-react'
import { useGameStore } from '@/store/gameStore'

const GameDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { getGameById } = useGameStore()
  const game = getGameById(id!)

  if (!game) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Game not found</h2>
          <Link to="/browse" className="btn-primary">
            Back to Browse
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={game.images.banner}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
        
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/browse" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Link>
            <h1 className="text-4xl md:text-6xl font-gaming font-bold text-white mb-4">
              {game.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">{game.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Info */}
            <div className="card">
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="text-xl font-bold">{game.rating}</span>
                  <span className="text-gray-400 ml-2">(2,847 reviews)</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Download className="w-5 h-5 mr-2" />
                  <span>{(game.downloads / 1000000).toFixed(1)}M downloads</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Released {new Date(game.releaseDate).getFullYear()}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {game.genre.map(genre => (
                  <span key={genre} className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Developer</h3>
                  <p className="text-gray-400">{game.developer}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Publisher</h3>
                  <p className="text-gray-400">{game.publisher}</p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {game.images.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  >
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">System Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Minimum</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">OS: </span>
                      <span className="text-white">{game.systemRequirements.minimum.os}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Processor: </span>
                      <span className="text-white">{game.systemRequirements.minimum.processor}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Memory: </span>
                      <span className="text-white">{game.systemRequirements.minimum.memory}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Graphics: </span>
                      <span className="text-white">{game.systemRequirements.minimum.graphics}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Storage: </span>
                      <span className="text-white">{game.systemRequirements.minimum.storage}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Recommended</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">OS: </span>
                      <span className="text-white">{game.systemRequirements.recommended.os}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Processor: </span>
                      <span className="text-white">{game.systemRequirements.recommended.processor}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Memory: </span>
                      <span className="text-white">{game.systemRequirements.recommended.memory}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Graphics: </span>
                      <span className="text-white">{game.systemRequirements.recommended.graphics}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Storage: </span>
                      <span className="text-white">{game.systemRequirements.recommended.storage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Purchase/Play Card */}
              <div className="card">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gaming-green mb-2">
                    {game.isFree ? 'FREE' : `$${game.price}`}
                  </div>
                  {!game.isFree && (
                    <p className="text-gray-400 text-sm line-through">$79.99</p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <button className="btn-primary w-full text-lg py-4">
                    <Play className="w-5 h-5 mr-2" />
                    {game.isFree ? 'Play Now' : 'Buy & Play'}
                  </button>
                  <button className="btn-secondary w-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </button>
                  <button className="btn-secondary w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>

              {/* Platforms */}
              <div className="card">
                <h3 className="text-lg font-bold text-white mb-4">Available on</h3>
                <div className="space-y-2">
                  {game.platform.map(platform => (
                    <div key={platform} className="flex items-center text-gray-300">
                      {platform === 'PC' && <Monitor className="w-4 h-4 mr-3" />}
                      {platform === 'Mobile' && <Smartphone className="w-4 h-4 mr-3" />}
                      {platform.includes('PlayStation') && <div className="w-4 h-4 mr-3 bg-blue-600 rounded"></div>}
                      {platform.includes('Xbox') && <div className="w-4 h-4 mr-3 bg-green-600 rounded"></div>}
                      <span>{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="card">
                <h3 className="text-lg font-bold text-white mb-4">Features</h3>
                <div className="space-y-2">
                  {game.features.map(feature => (
                    <div key={feature} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gaming-purple rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Stats */}
              <div className="card">
                <h3 className="text-lg font-bold text-white mb-4">Community</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      Players Online
                    </div>
                    <span className="text-gaming-green font-bold">15,432</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Trophy className="w-4 h-4 mr-2" />
                      Tournaments
                    </div>
                    <span className="text-white">23 Active</span>
                  </div>
                </div>
              </div>

              {/* Similar Games */}
              <div className="card">
                <h3 className="text-lg font-bold text-white mb-4">You might also like</h3>
                <div className="space-y-3">
                  {game.similarGames.slice(0, 2).map(gameId => (
                    <div key={gameId} className="flex space-x-3 p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors cursor-pointer">
                      <div className="w-16 h-16 bg-dark-700 rounded"></div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">Similar Game</p>
                        <p className="text-gray-400 text-xs">Action, RPG</p>
                        <p className="text-gaming-green text-xs font-bold">FREE</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails
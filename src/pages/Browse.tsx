import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Star, 
  Download, 
  Grid,
  List,
  ChevronDown,
  ArrowRight
} from 'lucide-react'
import { useGameStore } from '@/store/gameStore'

const Browse = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const { 
    games, 
    searchTerm, 
    selectedGenre, 
    selectedPlatform,
    isLoading,
    setSearchTerm,
    setSelectedGenre,
    setSelectedPlatform,
    fetchGames,
    getFilteredGames
  } = useGameStore()

  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  const filteredGames = getFilteredGames()

  const genres = ['Action', 'RPG', 'Sci-Fi', 'Battle Royale', 'Shooter', 'MMORPG', 'Fantasy', 'Adventure']
  const platforms = ['PC', 'PlayStation', 'Xbox', 'Mobile']

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Browse </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Games</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Discover amazing games from our extensive collection
          </p>
        </motion.div>

        {/* Mobile-Responsive Search & Filters */}
        <div className="mb-12 space-y-4">
          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Filter Controls - Mobile Stack */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Genre Filter */}
            <div className="relative flex-1">
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="appearance-none w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10 text-sm"
              >
                <option value="">All Genres</option>
                {genres.map(genre => (
                  <option key={genre} value={genre} className="bg-slate-800">{genre}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Platform Filter */}
            <div className="relative flex-1">
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="appearance-none w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10 text-sm"
              >
                <option value="">All Platforms</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform} className="bg-slate-800">{platform}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* View Mode */}
            <div className="flex bg-white/5 rounded-xl p-1 w-fit mx-auto sm:mx-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-purple-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-purple-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing <span className="text-white font-medium">{filteredGames.length}</span> games
          </p>
        </div>

        {/* Clean Games Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`grid gap-4 md:gap-6 lg:gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-minimal group cursor-pointer ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0' : ''
                }`}
              >
                <div className={`relative overflow-hidden rounded-xl ${
                  viewMode === 'list' ? 'w-48 h-28 flex-shrink-0' : 'mb-6'
                }`}>
                  <img
                    src={game.images.thumbnail}
                    alt={game.title}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                    }`}
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{game.rating}</span>
                  </div>
                  {game.isFree && (
                    <div className="absolute top-3 left-3 bg-green-500/90 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-xs font-medium text-white">FREE</span>
                    </div>
                  )}
                </div>
                
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">{(game.downloads / 1000000).toFixed(1)}M downloads</span>
                    </div>
                    <div className="text-lg font-semibold text-purple-400">
                      {game.isFree ? 'Free' : `$${game.price}`}
                    </div>
                  </div>

                  {/* Genre Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.genre.slice(0, 3).map(genre => (
                      <span
                        key={genre}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                    View Game
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {filteredGames.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No games found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Browse
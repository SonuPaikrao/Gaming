import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Users, 
  Eye,
  Heart,
  Share2,
  Search,
  Grid,
  List,
  Radio,
  Star
} from 'lucide-react'

const Streams = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filterBy, setFilterBy] = useState('all')

  const categories = [
    { id: 'all', name: 'All Streams', count: 156 },
    { id: 'fps', name: 'FPS Games', count: 45 },
    { id: 'moba', name: 'MOBA', count: 32 },
    { id: 'rpg', name: 'RPG', count: 28 },
    { id: 'battle-royale', name: 'Battle Royale', count: 25 },
    { id: 'indie', name: 'Indie Games', count: 26 }
  ]

  const featuredStream = {
    id: 'featured',
    streamer: 'Aditya_Gaming',
    title: 'PUBG Mobile Championship Finals - Epic Showdown!',
    game: 'PUBG Mobile',
    viewers: 12456,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450',
    isLive: true,
    category: 'Tournament',
    duration: '2:34:15'
  }

  const streams = [
    {
      id: 1,
      streamer: 'Rohit_Pro',
      title: 'Road to Conqueror Rank - PUBG Mobile',
      game: 'PUBG Mobile',
      viewers: 3245,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225',
      isLive: true,
      category: 'Ranked',
      duration: '1:45:30'
    },
    {
      id: 2,
      streamer: 'Priya_Master',
      title: 'Valorant Agent Guide & Tips',
      game: 'Valorant',
      viewers: 1876,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b5d03192?w=100',
      thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=225',
      isLive: true,
      category: 'Tutorial',
      duration: '45:12'
    },
    {
      id: 3,
      streamer: 'Kavya_Stream',
      title: 'Chill Minecraft Building Stream!',
      game: 'Minecraft',
      viewers: 892,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225',
      isLive: true,
      category: 'Casual',
      duration: '3:15:45'
    },
    {
      id: 4,
      streamer: 'Arjun_Tech',
      title: 'Gaming Setup Review & Tips',
      game: 'Tech Talk',
      viewers: 567,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225',
      isLive: true,
      category: 'Review',
      duration: '30:22'
    },
    {
      id: 5,
      streamer: 'Aman_Speed',
      title: 'GTA V Speedrun - World Record Attempt',
      game: 'GTA V',
      viewers: 2134,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=225',
      isLive: true,
      category: 'Speedrun',
      duration: '1:12:33'
    },
    {
      id: 6,
      streamer: 'Neha_Coop',
      title: 'Among Us with Squad - Fun Time!',
      game: 'Among Us',
      viewers: 1453,
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225',
      isLive: true,
      category: 'Co-op',
      duration: '2:08:17'
    }
  ]

  const filteredStreams = filterBy === 'all' ? streams : streams.filter(stream => 
    stream.category.toLowerCase().includes(filterBy.toLowerCase())
  )

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
            <span className="text-white">Live </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Streams</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Watch the best gamers live and learn from the pros
          </p>
        </motion.div>

        {/* Stream Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          <div className="card-minimal text-center">
            <Radio className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">156</div>
            <div className="text-gray-400">Live Streams</div>
          </div>
          <div className="card-minimal text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">45K+</div>
            <div className="text-gray-400">Viewers</div>
          </div>
          <div className="card-minimal text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400">Content</div>
          </div>
        </div>

        {/* Featured Stream */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-400" />
            Featured Stream
          </h2>
          
          <div className="card-minimal p-0 overflow-hidden">
            <div className="relative">
              <img
                src={featuredStream.thumbnail}
                alt={featuredStream.title}
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Live Badge */}
              <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-lg font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
              
              {/* Viewer Count */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span className="font-medium">{featuredStream.viewers.toLocaleString()}</span>
              </div>
              
              {/* Stream Info - Mobile Responsive */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                  <img
                    src={featuredStream.avatar}
                    alt={featuredStream.streamer}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white mx-auto sm:mx-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{featuredStream.title}</h3>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-gray-200">
                      <span>{featuredStream.streamer}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{featuredStream.game}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{featuredStream.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-4">
                    <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                      Follow
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm">
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Share
                    </button>
                  </div>
                  
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    Watch Now
                  </button>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter & Search */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilterBy(category.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                  filterBy === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">{category.name} ({category.count})</span>
                <span className="sm:hidden">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Search & View Toggle */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search streams..."
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="flex bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Streams Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`grid gap-4 md:gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredStreams.map((stream, index) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-minimal p-0 overflow-hidden group cursor-pointer ${
                viewMode === 'list' ? 'flex items-center' : ''
              }`}
            >
              <div className={`relative ${
                viewMode === 'list' ? 'w-64 h-36 flex-shrink-0' : 'w-full'
              }`}>
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                
                {/* Live Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                  {stream.duration}
                </div>
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
              </div>
              
              <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start space-x-3">
                  <img
                    src={stream.avatar}
                    alt={stream.streamer}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2 group-hover:text-purple-400 transition-colors">
                      {stream.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{stream.streamer}</p>
                    <p className="text-gray-500 text-xs mb-2">{stream.game}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{stream.viewers.toLocaleString()}</span>
                        </div>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                          {stream.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// Crown component (add this at the top with other imports)
const Crown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6L9 9l3-8 3 8-3-3zM6 9l3 8h6l3-8-6 1-6-1z"/>
  </svg>
)

export default Streams
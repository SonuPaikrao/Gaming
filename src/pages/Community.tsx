import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  Trophy,
  Heart,
  Share2,
  Calendar,
  Clock,
  Plus,
  Search,
  ArrowRight
} from 'lucide-react'

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions')

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
  ]

  const discussions = [
    {
      id: 1,
      title: "Best drop locations in PUBG Mobile Erangel",
      author: "Arjun_Gaming",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
      replies: 24,
      likes: 89,
      time: "2 hours ago",
      category: "Strategy"
    },
    {
      id: 2,
      title: "Looking for squad for Call of Duty tournament",
      author: "Priya_Captain",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      replies: 15,
      likes: 45,
      time: "4 hours ago",
      category: "Team"
    },
    {
      id: 3,
      title: "Free Fire weapon tier list - What do you think?",
      author: "Rohit_Pro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b5d03192?w=100",
      replies: 67,
      likes: 156,
      time: "1 day ago",
      category: "Discussion"
    }
  ]

  const events = [
    {
      id: 1,
      title: "Weekly Gaming Night",
      description: "Join us for casual gaming and fun",
      date: "2024-01-20",
      time: "8:00 PM",
      participants: 45,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400"
    },
    {
      id: 2,
      title: "Esports Tournament",
      description: "Compete for $10,000 prize pool",
      date: "2024-01-25",
      time: "2:00 PM",
      participants: 128,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400"
    }
  ]

  const leaderboard = [
    { rank: 1, name: "Vikash_Elite", score: 15420, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" },
    { rank: 2, name: "Ananya_Pro", score: 14890, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" },
    { rank: 3, name: "Karan_Master", score: 14560, avatar: "https://images.unsplash.com/photo-1494790108755-2616b5d03192?w=100" },
    { rank: 4, name: "Shreya_Skill", score: 13980, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" },
    { rank: 5, name: "Aman_Legend", score: 13750, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" }
  ]

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
            <span className="text-white">Gaming </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Connect, share, and grow with fellow gamers worldwide
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          <div className="card-minimal text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">2.3M+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="card-minimal text-center">
            <MessageSquare className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">450K+</div>
            <div className="text-gray-400">Discussions</div>
          </div>
          <div className="card-minimal text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">1.2K+</div>
            <div className="text-gray-400">Events Hosted</div>
          </div>
        </div>

        {/* Clean Tabs - Mobile Responsive */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 sm:space-x-1 sm:gap-0 bg-white/5 rounded-xl p-1 w-full sm:w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 flex-1 sm:flex-initial justify-center sm:justify-start ${
                  activeTab === tab.id
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {/* Search and New Post */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button className="btn-minimal">
                <Plus className="w-5 h-5" />
                New Discussion
              </button>
            </div>

            {/* Discussions List */}
            <div className="space-y-6">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-minimal hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full mx-auto sm:mx-0"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <div className="mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1 hover:text-purple-400 cursor-pointer transition-colors">
                            {discussion.title}
                          </h3>
                          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-gray-400">
                            <span>by {discussion.author}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{discussion.time}</span>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                              {discussion.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm">{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{discussion.likes} likes</span>
                        </div>
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-minimal"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1 text-white">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Join Event
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {leaderboard.map((player, index) => (
                <motion.div
                  key={player.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`card-minimal flex items-center justify-between ${
                    player.rank <= 3 ? 'border-yellow-400/30' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      player.rank === 1 ? 'bg-yellow-500 text-black' :
                      player.rank === 2 ? 'bg-gray-400 text-black' :
                      player.rank === 3 ? 'bg-orange-500 text-black' :
                      'bg-white/10 text-gray-400'
                    }`}>
                      {player.rank}
                    </div>
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="text-white font-semibold">{player.name}</div>
                      <div className="text-gray-400 text-sm">Rank #{player.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">{player.score.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">points</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community
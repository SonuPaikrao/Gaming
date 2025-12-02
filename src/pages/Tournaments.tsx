import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Calendar, 
  Users, 
  Play,
  Search,
  Medal,
  Crown,
  ArrowRight
} from 'lucide-react'

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState('live')

  const tabs = [
    { id: 'live', label: 'Live Now', icon: Play },
    { id: 'upcoming', label: 'Upcoming', icon: Calendar },
    { id: 'past', label: 'Results', icon: Trophy }
  ]

  const liveTournaments = [
    {
      id: 1,
      title: "PUBG Mobile Championship",
      game: "PUBG Mobile",
      prize: 4200000,
      participants: 64,
      currentRound: "Semi-Finals",
      timeLeft: "2:34:15",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      status: "live"
    },
    {
      id: 2,
      title: "Call of Duty Mobile Masters",
      game: "Call of Duty Mobile",
      prize: 2100000,
      participants: 100,
      currentRound: "Quarter-Finals",
      timeLeft: "1:15:30",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
      status: "live"
    }
  ]

  const upcomingTournaments = [
    {
      id: 3,
      title: "FIFA 24 World Cup",
      game: "FIFA 24",
      prize: 6300000,
      participants: 128,
      startDate: "Jan 25, 2024",
      startTime: "2:00 PM IST",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
      registrationOpen: true
    },
    {
      id: 4,
      title: "Free Fire Rookie League",
      game: "Free Fire",
      prize: 840000,
      participants: 32,
      startDate: "Jan 30, 2024",
      startTime: "6:00 PM IST",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
      registrationOpen: true
    }
  ]

  const pastTournaments = [
    {
      id: 5,
      title: "New Year Valorant Championship",
      game: "Valorant",
      winner: "Aditya_Elite",
      prize: 2520000,
      participants: 64,
      date: "Jan 1, 2024",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400"
    },
    {
      id: 6,
      title: "Winter GTA V Cup",
      game: "GTA V Online",
      winner: "Simran_Pro",
      prize: 1680000,
      participants: 48,
      date: "Dec 20, 2023",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400"
    }
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
            <span className="text-white">Epic </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tournaments</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Compete with the best players and win amazing prizes
          </p>
        </motion.div>

        {/* Tournament Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="card-minimal text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">₹20.8Cr+</div>
            <div className="text-gray-400">Total Prizes</div>
          </div>
          <div className="card-minimal text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">150K+</div>
            <div className="text-gray-400">Players</div>
          </div>
          <div className="card-minimal text-center">
            <Medal className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-gray-400">Tournaments</div>
          </div>
          <div className="card-minimal text-center">
            <Crown className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400">Live Events</div>
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

        {/* Live Tournaments */}
        {activeTab === 'live' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Live Tournaments</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-medium">LIVE</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {liveTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-minimal border-red-500/30"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-bold">{tournament.currentRound}</div>
                      <div className="text-sm opacity-90">{tournament.timeLeft} remaining</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
                  <p className="text-gray-400 mb-4">{tournament.game}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">₹{(tournament.prize / 10000).toFixed(0)}L</div>
                      <div className="text-xs text-gray-400">Prize Pool</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-pink-400">{tournament.participants}</div>
                      <div className="text-xs text-gray-400">Players</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-400">Live</div>
                      <div className="text-xs text-gray-400">Status</div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-4 rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Watch Live
                    <Play className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Tournaments */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Upcoming Tournaments</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tournaments..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-minimal"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      Registration Open
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-bold">{tournament.startDate}</div>
                      <div className="text-sm opacity-90">{tournament.startTime}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
                  <p className="text-gray-400 mb-4">{tournament.game}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">₹{(tournament.prize / 100000).toFixed(0)}L</div>
                      <div className="text-xs text-gray-400">Prize Pool</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-pink-400">{tournament.participants}</div>
                      <div className="text-xs text-gray-400">Max Players</div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Past Tournaments */}
        {activeTab === 'past' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Tournament Results</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pastTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-minimal"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-full h-48 object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      Completed
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-bold">Winner: {tournament.winner}</div>
                      <div className="text-sm opacity-90">{tournament.date}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
                  <p className="text-gray-400 mb-4">{tournament.game}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-400">${tournament.prize.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">Prize Won</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">{tournament.participants}</div>
                      <div className="text-xs text-gray-400">Players</div>
                    </div>
                    <div className="text-center">
                      <Crown className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Champion</div>
                    </div>
                  </div>

                  <button className="w-full bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                    View Results
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tournaments
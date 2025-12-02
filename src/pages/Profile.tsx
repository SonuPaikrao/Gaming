import { motion } from 'framer-motion'
import { 
  User, 
  MapPin, 
  Calendar, 
  Trophy,
  Users,
  Clock,
  Target,
  Award,
  Edit,
  Settings,
  Share2,
  Phone,
  Mail,
  Gamepad2,
  Crown
} from 'lucide-react'
import { useAuthStore } from '@/store/authStore'

const Profile = () => {
  const { user, isAuthenticated } = useAuthStore()

  // Static profile data for "Sonu Rao"
  const profileData = {
    username: "Sonu Rao",
    email: user?.email || "sonurao@gmail.com",
    phone: user?.phone || "+91 98765-43210",
    bio: "Professional gamer and content creator from India. Passionate about competitive gaming and building communities.",
    location: "Pune, Maharashtra, India",
    joinDate: "January 2023",
    level: 24,
    xp: 15750,
    maxXp: 20000,
    rank: "Diamond Elite",
    avatar: "/images/profile-header.jpg",
    
    stats: {
      gamesPlayed: 247,
      wins: 189,
      winRate: 77,
      hoursPlayed: 342,
      favoriteGame: "PUBG Mobile",
      totalScore: 125430
    },
    
    achievements: [
      { 
        id: 1, 
        name: "First Victory", 
        description: "Won your first competitive match",
        icon: "🏆", 
        unlocked: true,
        date: "Jan 15, 2023"
      },
      { 
        id: 2, 
        name: "Level Master", 
        description: "Reached level 20",
        icon: "🎯", 
        unlocked: true,
        date: "Mar 20, 2023"
      },
      { 
        id: 3, 
        name: "Social Butterfly", 
        description: "Made 50+ gaming friends",
        icon: "👥", 
        unlocked: true,
        date: "Apr 10, 2023"
      },
      { 
        id: 4, 
        name: "Tournament Champion", 
        description: "Won 10 tournaments",
        icon: "👑", 
        unlocked: true,
        date: "Jun 5, 2023"
      },
      { 
        id: 5, 
        name: "Marathon Gamer", 
        description: "Played for 500+ hours",
        icon: "⏰", 
        unlocked: false,
        date: null
      },
      { 
        id: 6, 
        name: "Perfect Score", 
        description: "Achieve 100% win rate in 10 matches",
        icon: "⭐", 
        unlocked: false,
        date: null
      }
    ],
    
    recentGames: [
      { name: "PUBG Mobile", result: "Victory", score: "K/D: 24/8", time: "2 hours ago", rank: "+25 MMR", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400" },
      { name: "Call of Duty Mobile", result: "Victory", score: "Rank #3", time: "5 hours ago", rank: "+18 MMR", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400" },
      { name: "FIFA 24", result: "Defeat", score: "Score: 2-3", time: "1 day ago", rank: "-12 MMR", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" },
      { name: "Free Fire", result: "Victory", score: "K/D: 18/6", time: "2 days ago", rank: "+22 MMR", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400" },
      { name: "Asphalt 9", result: "Victory", score: "Position: 2nd", time: "3 days ago", rank: "+15 MMR", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400" }
    ],
    
    friends: [
      { name: "Rahul_Gaming", status: "online", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" },
      { name: "Priya_Pro", status: "away", avatar: "https://images.unsplash.com/photo-1494790108755-2616b5d03192?w=50&h=50&fit=crop&crop=face" },
      { name: "Arjun_Skill", status: "offline", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" },
      { name: "Neha_Tech", status: "online", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face" },
      { name: "Kavya_Stream", status: "away", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" }
    ]
  }

  if (!isAuthenticated) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Please Login</h2>
          <p className="text-gray-400 mb-6">You need to login to view your profile</p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            Login Now
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-minimal mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar */}
            <div className="relative mx-auto md:mx-0">
              <img
                src={profileData.avatar}
                alt={profileData.username}
                className="w-32 h-32 rounded-full border-4 border-purple-500"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {profileData.level}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{profileData.username}</h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {profileData.joinDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Crown className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400">{profileData.rank}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 justify-center md:justify-end">
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Edit className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Settings className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <p className="text-gray-300 mb-4 max-w-2xl">{profileData.bio}</p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 justify-center md:justify-start">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{profileData.phone}</span>
                </div>
              </div>

              {/* XP Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Level {profileData.level}</span>
                  <span className="text-gray-400">{profileData.xp}/{profileData.maxXp} XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(profileData.xp / profileData.maxXp) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-minimal text-center"
          >
            <Gamepad2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{profileData.stats.gamesPlayed}</div>
            <div className="text-gray-400 text-sm">Games Played</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-minimal text-center"
          >
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{profileData.stats.wins}</div>
            <div className="text-gray-400 text-sm">Wins</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-minimal text-center"
          >
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{profileData.stats.winRate}%</div>
            <div className="text-gray-400 text-sm">Win Rate</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-minimal text-center"
          >
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{profileData.stats.hoursPlayed}h</div>
            <div className="text-gray-400 text-sm">Hours Played</div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="card-minimal">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Achievements
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {profileData.achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30' 
                        : 'bg-white/5 border-white/10 opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-sm mb-1">{achievement.name}</h3>
                        <p className="text-gray-400 text-xs mb-2">{achievement.description}</p>
                        {achievement.unlocked && achievement.date && (
                          <p className="text-purple-400 text-xs">Unlocked: {achievement.date}</p>
                        )}
                        {!achievement.unlocked && (
                          <p className="text-gray-500 text-xs">Locked</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Activity & Friends */}
          <div className="space-y-6">
            {/* Recent Games */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="card-minimal"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-purple-400" />
                Recent Games
              </h3>
              <div className="space-y-3">
                {profileData.recentGames.slice(0, 4).map((game, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">{game.name}</div>
                      <div className="text-gray-400 text-xs">{game.score}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-medium ${
                        game.result === 'Victory' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {game.result}
                      </div>
                      <div className="text-gray-500 text-xs">{game.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Friends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="card-minimal"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Gaming Friends
              </h3>
              <div className="space-y-2">
                {profileData.friends.map((friend, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <div className="relative">
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900 ${
                        friend.status === 'online' ? 'bg-green-400' : 
                        friend.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">{friend.name}</div>
                      <div className={`text-xs capitalize ${
                        friend.status === 'online' ? 'text-green-400' : 
                        friend.status === 'away' ? 'text-yellow-400' : 'text-gray-400'
                      }`}>
                        {friend.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
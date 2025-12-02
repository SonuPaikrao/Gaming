// User Types
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  level: number
  xp: number
  reputation: number
  rank: string
  isOnline: boolean
  lastSeen: string
  games: Game[]
  achievements: Achievement[]
  stats: UserStats
  social: SocialLinks
}

export interface UserStats {
  gamesPlayed: number
  hoursPlayed: number
  tournamentsWon: number
  friendsCount: number
  postsCount: number
  likesReceived: number
}

export interface SocialLinks {
  twitch?: string
  youtube?: string
  discord?: string
  steam?: string
  twitter?: string
}

// Game Types
export interface Game {
  id: string
  title: string
  description: string
  genre: string[]
  platform: string[]
  rating: number
  downloads: number
  releaseDate: string
  developer: string
  publisher: string
  images: GameImages
  videos?: string[]
  price: number
  isFree: boolean
  features: string[]
  systemRequirements: SystemRequirements
  reviews: Review[]
  similarGames: string[]
}

export interface GameImages {
  thumbnail: string
  banner: string
  screenshots: string[]
  logo?: string
}

export interface SystemRequirements {
  minimum: {
    os: string
    processor: string
    memory: string
    graphics: string
    storage: string
  }
  recommended: {
    os: string
    processor: string
    memory: string
    graphics: string
    storage: string
  }
}

// Community Types
export interface Post {
  id: string
  authorId: string
  author: User
  title: string
  content: string
  images?: string[]
  videos?: string[]
  gameId?: string
  game?: Game
  tags: string[]
  likes: number
  comments: Comment[]
  createdAt: string
  updatedAt: string
  isPinned: boolean
  category: PostCategory
}

export interface Comment {
  id: string
  authorId: string
  author: User
  content: string
  likes: number
  replies: Comment[]
  createdAt: string
  parentId?: string
}

export type PostCategory = 'general' | 'game-discussion' | 'tournament' | 'meme' | 'help' | 'news'

// Tournament Types
export interface Tournament {
  id: string
  title: string
  description: string
  gameId: string
  game: Game
  organizer: User
  startDate: string
  endDate: string
  registrationDeadline: string
  maxParticipants: number
  currentParticipants: number
  prizePool: number
  currency: string
  status: TournamentStatus
  format: TournamentFormat
  rules: string
  participants: TournamentParticipant[]
  matches: Match[]
  brackets: Bracket[]
  streams: Stream[]
}

export type TournamentStatus = 'upcoming' | 'registration' | 'ongoing' | 'completed' | 'cancelled'
export type TournamentFormat = 'single-elimination' | 'double-elimination' | 'round-robin' | 'swiss'

export interface TournamentParticipant {
  id: string
  user: User
  team?: Team
  registrationDate: string
  status: 'registered' | 'checked-in' | 'disqualified'
}

export interface Match {
  id: string
  tournamentId: string
  round: number
  participant1: TournamentParticipant
  participant2: TournamentParticipant
  winner?: TournamentParticipant
  score: string
  status: 'scheduled' | 'ongoing' | 'completed'
  scheduledTime: string
  streamUrl?: string
}

export interface Bracket {
  id: string
  tournamentId: string
  type: 'winner' | 'loser'
  matches: Match[]
}

// Team Types
export interface Team {
  id: string
  name: string
  tag: string
  logo?: string
  description: string
  captain: User
  members: User[]
  games: string[]
  achievements: Achievement[]
  stats: TeamStats
  createdAt: string
}

export interface TeamStats {
  tournamentsPlayed: number
  tournamentsWon: number
  winRate: number
  totalEarnings: number
}

// Stream Types
export interface Stream {
  id: string
  title: string
  description: string
  streamerId: string
  streamer: User
  gameId?: string
  game?: Game
  platform: StreamPlatform
  streamUrl: string
  thumbnailUrl: string
  isLive: boolean
  viewerCount: number
  startTime: string
  endTime?: string
  category: StreamCategory
  tags: string[]
}

export type StreamPlatform = 'twitch' | 'youtube' | 'facebook' | 'discord'
export type StreamCategory = 'gameplay' | 'tournament' | 'tutorial' | 'chatting' | 'speedrun'

// Achievement Types
export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  rarity: AchievementRarity
  points: number
  unlockedAt?: string
  progress?: number
  maxProgress?: number
}

export type AchievementRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'

// Review Types
export interface Review {
  id: string
  userId: string
  user: User
  gameId: string
  rating: number
  title: string
  content: string
  helpful: number
  notHelpful: number
  createdAt: string
  verified: boolean
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  isRead: boolean
  createdAt: string
  actionUrl?: string
  metadata?: Record<string, any>
}

export type NotificationType = 
  | 'friend-request' 
  | 'tournament-invite' 
  | 'team-invite' 
  | 'match-result' 
  | 'achievement' 
  | 'system' 
  | 'post-like' 
  | 'comment-reply'
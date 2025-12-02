import { create } from 'zustand'
import { Game } from '@/types'

interface GameState {
  games: Game[]
  featuredGames: Game[]
  popularGames: Game[]
  searchTerm: string
  selectedGenre: string
  selectedPlatform: string
  isLoading: boolean
  setGames: (games: Game[]) => void
  setSearchTerm: (term: string) => void
  setSelectedGenre: (genre: string) => void
  setSelectedPlatform: (platform: string) => void
  fetchGames: () => Promise<void>
  fetchFeaturedGames: () => Promise<void>
  fetchPopularGames: () => Promise<void>
  getGameById: (id: string) => Game | undefined
  getFilteredGames: () => Game[]
}

// Mock game data
const mockGames: Game[] = [
  {
    id: '1',
    title: 'Cyber Strike 2077',
    description: 'Experience the ultimate cyberpunk gaming adventure in a dystopian future.',
    genre: ['Action', 'RPG', 'Sci-Fi'],
    platform: ['PC', 'PlayStation', 'Xbox'],
    rating: 4.8,
    downloads: 2300000,
    releaseDate: '2023-11-15',
    developer: 'CyberDev Studios',
    publisher: 'Future Games',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
      screenshots: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600'
      ]
    },
    price: 59.99,
    isFree: false,
    features: ['Single Player', 'Multiplayer', 'Co-op', 'Steam Achievements'],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel i5-8400 / AMD Ryzen 5 2600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 / AMD RX 580',
        storage: '70 GB available space'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel i7-10700K / AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3070 / AMD RX 6700 XT',
        storage: '70 GB SSD space'
      }
    },
    reviews: [],
    similarGames: ['2', '3']
  },
  {
    id: '2',
    title: 'Battle Royale Arena',
    description: 'Drop into the ultimate battle royale experience with 100 players.',
    genre: ['Battle Royale', 'Shooter', 'Action'],
    platform: ['PC', 'PlayStation', 'Xbox', 'Mobile'],
    rating: 4.6,
    downloads: 5200000,
    releaseDate: '2023-08-20',
    developer: 'Arena Games',
    publisher: 'Epic Studios',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
      banner: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800',
      screenshots: [
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600'
      ]
    },
    price: 0,
    isFree: true,
    features: ['Multiplayer', 'Cross-platform', 'Ranked Matches'],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel i3-8100 / AMD Ryzen 3 2200G',
        memory: '6 GB RAM',
        graphics: 'NVIDIA GTX 1050 / AMD RX 560',
        storage: '25 GB available space'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel i5-9600K / AMD Ryzen 5 3600',
        memory: '12 GB RAM',
        graphics: 'NVIDIA RTX 2060 / AMD RX 5600 XT',
        storage: '25 GB SSD space'
      }
    },
    reviews: [],
    similarGames: ['1', '3']
  },
  {
    id: '3',
    title: 'Fantasy Realm Online',
    description: 'Embark on epic quests in a massive fantasy MMORPG world.',
    genre: ['MMORPG', 'Fantasy', 'Adventure'],
    platform: ['PC'],
    rating: 4.7,
    downloads: 1800000,
    releaseDate: '2023-06-10',
    developer: 'Fantasy Works',
    publisher: 'Medieval Games',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      banner: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      screenshots: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600'
      ]
    },
    price: 39.99,
    isFree: false,
    features: ['MMORPG', 'Guild System', 'PvP', 'Crafting'],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel i5-6600K / AMD Ryzen 5 1600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 970 / AMD RX 470',
        storage: '50 GB available space'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel i7-8700K / AMD Ryzen 7 2700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2070 / AMD RX 6600 XT',
        storage: '50 GB SSD space'
      }
    },
    reviews: [],
    similarGames: ['1', '2']
  }
]

export const useGameStore = create<GameState>((set, get) => ({
  games: [],
  featuredGames: [],
  popularGames: [],
  searchTerm: '',
  selectedGenre: '',
  selectedPlatform: '',
  isLoading: false,

  setGames: (games) => set({ games }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
  setSelectedPlatform: (platform) => set({ selectedPlatform: platform }),

  fetchGames: async () => {
    set({ isLoading: true })
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    set({ games: mockGames, isLoading: false })
  },

  fetchFeaturedGames: async () => {
    set({ isLoading: true })
    await new Promise(resolve => setTimeout(resolve, 500))
    set({ featuredGames: mockGames.slice(0, 2), isLoading: false })
  },

  fetchPopularGames: async () => {
    set({ isLoading: true })
    await new Promise(resolve => setTimeout(resolve, 500))
    set({ popularGames: mockGames, isLoading: false })
  },

  getGameById: (id: string) => {
    return get().games.find(game => game.id === id)
  },

  getFilteredGames: () => {
    const { games, searchTerm, selectedGenre, selectedPlatform } = get()
    
    return games.filter(game => {
      const matchesSearch = !searchTerm || 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesGenre = !selectedGenre || game.genre.includes(selectedGenre)
      const matchesPlatform = !selectedPlatform || game.platform.includes(selectedPlatform)
      
      return matchesSearch && matchesGenre && matchesPlatform
    })
  }
}))
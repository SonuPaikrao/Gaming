import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  isAuthModalOpen: boolean
  authModalType: 'login' | 'register'
  login: (userData: any) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  updateProfile: (data: Partial<User>) => void
  initializeAuth: () => void
  openAuthModal: (type: 'login' | 'register') => void
  closeAuthModal: () => void
}

interface RegisterData {
  username: string
  email: string
  password: string
}

// Mock user data for development
const mockUser: User = {
  id: '1',
  username: 'GamerPro',
  email: 'gamer@example.com',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
  level: 42,
  xp: 8750,
  reputation: 1250,
  rank: 'Elite Gamer',
  isOnline: true,
  lastSeen: new Date().toISOString(),
  games: [],
  achievements: [],
  stats: {
    gamesPlayed: 156,
    hoursPlayed: 2340,
    tournamentsWon: 23,
    friendsCount: 89,
    postsCount: 45,
    likesReceived: 342
  },
  social: {
    twitch: 'gamerpro',
    discord: 'GamerPro#1234',
    steam: 'gamerpro_steam'
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      isAuthModalOpen: false,
      authModalType: 'login',

      login: async (userData: any) => {
        set({ isLoading: true })
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Accept any email/password combination
        set({
          user: userData,
          isAuthenticated: true,
          isLoading: false
        })
      },

      register: async (userData: any) => {
        set({ isLoading: true })
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock registration - always succeeds with provided data
        set({
          user: userData,
          isAuthenticated: true,
          isLoading: false
        })
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false
        })
      },

      updateProfile: (data: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: { ...currentUser, ...data }
          })
        }
      },

      initializeAuth: () => {
        // Check if user is logged in (this would normally check tokens, etc.)
        const state = get()
        if (state.user) {
          set({ isAuthenticated: true, isLoading: false })
        } else {
          set({ isLoading: false })
        }
      },

      openAuthModal: (type: 'login' | 'register') => {
        set({
          isAuthModalOpen: true,
          authModalType: type
        })
      },

      closeAuthModal: () => {
        set({
          isAuthModalOpen: false
        })
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)
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

// Auth store implementation

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
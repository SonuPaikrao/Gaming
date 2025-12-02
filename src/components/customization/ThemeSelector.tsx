import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Check, Eye } from 'lucide-react'

interface Theme {
  id: string
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
  }
  preview: string
}

const themes: Theme[] = [
  {
    id: 'default',
    name: 'Cyberpunk Purple',
    description: 'Default gaming theme with purple gradients',
    colors: {
      primary: '#667eea',
      secondary: '#f093fb',
      accent: '#4facfe'
    },
    preview: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'neon',
    name: 'Neon Glow',
    description: 'Bright neon colors for maximum impact',
    colors: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#00ff00'
    },
    preview: 'bg-gradient-to-r from-cyan-400 to-green-400'
  },
  {
    id: 'retro',
    name: 'Retro Gaming',
    description: 'Classic 80s arcade vibes',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#8b5a2b'
    },
    preview: 'bg-gradient-to-r from-orange-500 to-yellow-500'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    description: 'Inspired by the cyberpunk aesthetic',
    colors: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00'
    },
    preview: 'bg-gradient-to-r from-pink-500 to-cyan-400'
  },
  {
    id: 'galaxy',
    name: 'Galaxy Explorer',
    description: 'Deep space colors with cosmic feel',
    colors: {
      primary: '#8b5cf6',
      secondary: '#06b6d4',
      accent: '#f59e0b'
    },
    preview: 'bg-gradient-to-r from-purple-600 to-blue-500'
  },
  {
    id: 'matrix',
    name: 'Matrix Green',
    description: 'The classic green matrix aesthetic',
    colors: {
      primary: '#00ff41',
      secondary: '#008f11',
      accent: '#00ff41'
    },
    preview: 'bg-gradient-to-r from-green-400 to-green-600'
  }
]

interface ThemeSelectorProps {
  isOpen: boolean
  onClose: () => void
}

const ThemeSelector = ({ isOpen, onClose }: ThemeSelectorProps) => {
  const [selectedTheme, setSelectedTheme] = useState('default')
  const [previewTheme, setPreviewTheme] = useState<string | null>(null)

  const applyTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId)
    if (!theme) return

    const root = document.documentElement
    
    // Remove existing theme classes
    themes.forEach(t => root.classList.remove(`theme-${t.id}`))
    
    // Add new theme class
    if (themeId !== 'default') {
      root.classList.add(`theme-${themeId}`)
    }

    setSelectedTheme(themeId)
    
    // Store theme preference
    localStorage.setItem('gaming-theme', themeId)
  }

  const previewThemeColors = (themeId: string) => {
    setPreviewTheme(themeId)
    applyTheme(themeId)
  }

  const resetPreview = () => {
    setPreviewTheme(null)
    applyTheme(selectedTheme)
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-dark-900 border border-dark-700 rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Palette className="w-6 h-6 text-gaming-purple" />
            <h2 className="text-2xl font-gaming font-bold text-white">Customize Your Theme</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-400 mb-8">
          Choose from our pre-designed themes or create your own custom color scheme
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {themes.map((theme) => (
            <motion.div
              key={theme.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-6 rounded-xl border-2 transition-all cursor-pointer ${
                selectedTheme === theme.id
                  ? 'border-gaming-purple bg-dark-800'
                  : 'border-dark-700 bg-dark-800/50 hover:border-dark-600'
              }`}
              onClick={() => applyTheme(theme.id)}
              onMouseEnter={() => previewThemeColors(theme.id)}
              onMouseLeave={resetPreview}
            >
              {selectedTheme === theme.id && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-gaming-purple rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}

              <div className={`w-full h-20 rounded-lg mb-4 ${theme.preview}`}></div>
              
              <h3 className="text-white font-bold mb-2">{theme.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{theme.description}</p>
              
              <div className="flex items-center space-x-2">
                <div 
                  className="w-4 h-4 rounded-full border border-gray-600"
                  style={{ backgroundColor: theme.colors.primary }}
                />
                <div 
                  className="w-4 h-4 rounded-full border border-gray-600"
                  style={{ backgroundColor: theme.colors.secondary }}
                />
                <div 
                  className="w-4 h-4 rounded-full border border-gray-600"
                  style={{ backgroundColor: theme.colors.accent }}
                />
              </div>
              
              {previewTheme === theme.id && (
                <div className="absolute inset-0 bg-gaming-purple/10 rounded-xl flex items-center justify-center">
                  <div className="bg-gaming-purple text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Previewing
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="border-t border-dark-700 pt-6">
          <h3 className="text-white font-bold mb-4">Theme Preview</h3>
          <div className="bg-dark-800 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gaming-gradient rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Sample Gaming Card</h4>
                <p className="text-gray-400 text-sm">This is how your theme will look</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-gray-400">
            Theme will be saved automatically
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="btn-secondary"
            >
              Done
            </button>
            <button
              onClick={() => applyTheme('default')}
              className="btn-ghost"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ThemeSelector
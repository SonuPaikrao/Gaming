import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Settings, 
  Palette, 
  Type, 
  Layout, 
  Zap,
  Download,
  Upload,
  RotateCcw
} from 'lucide-react'
import ThemeSelector from './ThemeSelector'

const CustomizationPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('themes')
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false)

  const tabs = [
    { id: 'themes', name: 'Themes', icon: Palette },
    { id: 'typography', name: 'Typography', icon: Type },
    { id: 'layout', name: 'Layout', icon: Layout },
    { id: 'effects', name: 'Effects', icon: Zap }
  ]

  const fontOptions = [
    { name: 'Inter + Orbitron', value: 'default', description: 'Modern and futuristic' },
    { name: 'Roboto + Russo One', value: 'roboto', description: 'Clean and bold' },
    { name: 'Poppins + Play', value: 'poppins', description: 'Friendly and modern' },
    { name: 'Montserrat + Audiowide', value: 'montserrat', description: 'Professional gaming' }
  ]

  const layoutOptions = [
    { name: 'Compact', value: 'compact', description: 'More content, less spacing' },
    { name: 'Default', value: 'default', description: 'Balanced layout' },
    { name: 'Spacious', value: 'spacious', description: 'More breathing room' }
  ]

  const effectOptions = [
    { name: 'Animations', type: 'toggle', value: true },
    { name: 'Particle Effects', type: 'toggle', value: false },
    { name: 'Glassmorphism', type: 'toggle', value: true },
    { name: 'Glow Effects', type: 'toggle', value: true }
  ]

  return (
    <>
      {/* Floating Customization Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gaming-gradient rounded-full shadow-lg flex items-center justify-center z-40 hover:scale-110 transition-transform"
      >
        <Settings className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '8s' }} />
      </motion.button>

      {/* Customization Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex"
          >
            <div 
              className="flex-1 bg-black/50 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className="w-96 bg-dark-900 border-l border-dark-700 h-full overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-dark-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-gaming font-bold text-gradient">
                    Customize
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="p-4 border-b border-dark-700">
                <div className="grid grid-cols-2 gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 p-3 rounded-lg text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gaming-purple text-white'
                          : 'text-gray-400 hover:text-white hover:bg-dark-800'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {activeTab === 'themes' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">Color Themes</h3>
                      <button
                        onClick={() => setIsThemeSelectorOpen(true)}
                        className="w-full btn-primary text-left"
                      >
                        <Palette className="w-4 h-4 mr-2" />
                        Choose Theme
                      </button>
                      <p className="text-gray-400 text-sm mt-2">
                        Select from pre-designed themes or create your own
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">Quick Actions</h3>
                      <div className="space-y-2">
                        <button className="w-full btn-secondary text-left">
                          <Download className="w-4 h-4 mr-2" />
                          Export Theme
                        </button>
                        <button className="w-full btn-secondary text-left">
                          <Upload className="w-4 h-4 mr-2" />
                          Import Theme
                        </button>
                        <button className="w-full btn-ghost text-left">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Reset to Default
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'typography' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">Font Combinations</h3>
                      <div className="space-y-3">
                        {fontOptions.map((font) => (
                          <div
                            key={font.value}
                            className="p-3 border border-dark-700 rounded-lg hover:border-dark-600 transition-colors cursor-pointer"
                          >
                            <h4 className="text-white font-medium">{font.name}</h4>
                            <p className="text-gray-400 text-sm">{font.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">Font Size</h3>
                      <input
                        type="range"
                        min="12"
                        max="20"
                        defaultValue="16"
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Small</span>
                        <span>Large</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'layout' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">Layout Style</h3>
                      <div className="space-y-3">
                        {layoutOptions.map((layout) => (
                          <div
                            key={layout.value}
                            className="p-3 border border-dark-700 rounded-lg hover:border-dark-600 transition-colors cursor-pointer"
                          >
                            <h4 className="text-white font-medium">{layout.name}</h4>
                            <p className="text-gray-400 text-sm">{layout.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">Sidebar Position</h3>
                      <div className="flex space-x-3">
                        <button className="btn-secondary flex-1">Left</button>
                        <button className="btn-primary flex-1">Right</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'effects' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">Visual Effects</h3>
                      <div className="space-y-4">
                        {effectOptions.map((effect) => (
                          <div key={effect.name} className="flex items-center justify-between">
                            <span className="text-white">{effect.name}</span>
                            <div className="relative">
                              <input
                                type="checkbox"
                                defaultChecked={effect.value}
                                className="sr-only"
                              />
                              <div className="w-10 h-6 bg-dark-700 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gaming-purple/25 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gaming-purple"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">Animation Speed</h3>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        defaultValue="1"
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Slow</span>
                        <span>Fast</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Selector Modal */}
      <ThemeSelector
        isOpen={isThemeSelectorOpen}
        onClose={() => setIsThemeSelectorOpen(false)}
      />
    </>
  )
}

export default CustomizationPanel
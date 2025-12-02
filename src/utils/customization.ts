export interface CustomizationSettings {
  theme: string
  fontSize: number
  layout: 'compact' | 'default' | 'spacious'
  animations: boolean
  effects: {
    particles: boolean
    glassmorphism: boolean
    glow: boolean
  }
  font: string
}

const DEFAULT_SETTINGS: CustomizationSettings = {
  theme: 'default',
  fontSize: 16,
  layout: 'default',
  animations: true,
  effects: {
    particles: false,
    glassmorphism: true,
    glow: true
  },
  font: 'default'
}

export const getCustomizationSettings = (): CustomizationSettings => {
  try {
    const saved = localStorage.getItem('gaming-customization')
    if (saved) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) }
    }
  } catch (error) {
    console.error('Error loading customization settings:', error)
  }
  return DEFAULT_SETTINGS
}

export const saveCustomizationSettings = (settings: Partial<CustomizationSettings>) => {
  try {
    const current = getCustomizationSettings()
    const updated = { ...current, ...settings }
    localStorage.setItem('gaming-customization', JSON.stringify(updated))
    return updated
  } catch (error) {
    console.error('Error saving customization settings:', error)
    return getCustomizationSettings()
  }
}

export const applyCustomizationSettings = (settings: CustomizationSettings) => {
  const root = document.documentElement

  // Apply theme
  if (settings.theme !== 'default') {
    root.classList.add(`theme-${settings.theme}`)
  }

  // Apply font size
  root.style.setProperty('--base-font-size', `${settings.fontSize}px`)

  // Apply layout
  root.classList.toggle('layout-compact', settings.layout === 'compact')
  root.classList.toggle('layout-spacious', settings.layout === 'spacious')

  // Apply effects
  root.classList.toggle('animations-disabled', !settings.animations)
  root.classList.toggle('particles-enabled', settings.effects.particles)
  root.classList.toggle('glassmorphism-disabled', !settings.effects.glassmorphism)
  root.classList.toggle('glow-disabled', !settings.effects.glow)

  // Apply font
  if (settings.font !== 'default') {
    root.classList.add(`font-${settings.font}`)
  }
}

export const resetCustomizationSettings = () => {
  const root = document.documentElement
  
  // Remove all customization classes
  const classesToRemove = Array.from(root.classList).filter(className =>
    className.startsWith('theme-') ||
    className.startsWith('layout-') ||
    className.startsWith('font-') ||
    className.includes('disabled') ||
    className.includes('enabled')
  )
  
  classesToRemove.forEach(className => root.classList.remove(className))
  
  // Reset CSS properties
  root.style.removeProperty('--base-font-size')
  
  // Clear localStorage
  localStorage.removeItem('gaming-customization')
  localStorage.removeItem('gaming-theme')
  
  return DEFAULT_SETTINGS
}

export const exportCustomizationSettings = (): string => {
  const settings = getCustomizationSettings()
  return JSON.stringify(settings, null, 2)
}

export const importCustomizationSettings = (jsonString: string): boolean => {
  try {
    const settings = JSON.parse(jsonString)
    saveCustomizationSettings(settings)
    applyCustomizationSettings(settings)
    return true
  } catch (error) {
    console.error('Error importing customization settings:', error)
    return false
  }
}
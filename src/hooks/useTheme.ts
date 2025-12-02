import { useEffect, useState } from 'react'

export interface Theme {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
  }
}

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('default')

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('gaming-theme')
    if (savedTheme) {
      setCurrentTheme(savedTheme)
      applyThemeToDOM(savedTheme)
    }
  }, [])

  const applyThemeToDOM = (themeId: string) => {
    const root = document.documentElement
    
    // Remove existing theme classes
    const existingClasses = Array.from(root.classList).filter(className => 
      className.startsWith('theme-')
    )
    existingClasses.forEach(className => root.classList.remove(className))
    
    // Add new theme class
    if (themeId !== 'default') {
      root.classList.add(`theme-${themeId}`)
    }
  }

  const changeTheme = (themeId: string) => {
    setCurrentTheme(themeId)
    applyThemeToDOM(themeId)
    localStorage.setItem('gaming-theme', themeId)
  }

  return {
    currentTheme,
    changeTheme
  }
}
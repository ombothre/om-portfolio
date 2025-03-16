'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // We don't need to add transition classes here since they're in global.css
  return (
    <NextThemesProvider {...props}>
      <TransitionHandler>{children}</TransitionHandler>
    </NextThemesProvider>
  )
}

// This component ensures transitions happen smoothly after theme is actually applied
function TransitionHandler({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Only enable transitions after first render to prevent flash
  React.useEffect(() => {
    if (!mounted) return
    
    document.documentElement.classList.add('color-theme-in-transition')
    
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove('color-theme-in-transition')
    }, 300) // Match your transition duration
    
    return () => {
      clearTimeout(timeout)
      document.documentElement.classList.remove('color-theme-in-transition')
    }
  }, [theme, systemTheme, mounted])
  
  return <>{children}</>
}
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-0'}`}>
      <div
        className={`
          mx-auto
          bg-white/80 backdrop-blur-xl 
          transition-all duration-300
          ${isScrolled 
              ? 'max-w-7xl rounded-full border border-gray-200 shadow-md' 
              : 'max-w-full rounded-none border-b border-gray-200'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/home">
                <img src="/pikapp-logo.png" alt="Pi Kappa Phi Logo" className="h-8" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/home" className="text-gray-700 hover:text-black transition-colors">Home</a>
              <a href="/chapter" className="text-gray-700 hover:text-black transition-colors">Chapter</a>
              <a href="/recruitment" className="text-gray-700 hover:text-black transition-colors">Recruitment</a>
              <a href="/alumni" className="text-gray-700 hover:text-black transition-colors">Alumni</a>
              {/* <a href="#composites" className="text-gray-500 hover:text-black transition-colors">Composites</a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 
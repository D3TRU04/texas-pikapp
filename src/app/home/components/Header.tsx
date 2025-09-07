'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

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
          <div className="flex justify-center items-center h-16 gap-12">
          {/* Left side navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="/home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="/chapter" className="text-gray-600 hover:text-gray-900 transition-colors">Chapter</a>
          </div>
          
          {/* Center logo */}
          <div className="flex items-center justify-center">
            <Link href="/home">
              <img src="/pkp-letters.jpeg" alt="Pi Kappa Phi Logo" className="h-20" />
            </Link>
          </div>
          
          {/* Right side navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="/recruitment" className="text-gray-600 hover:text-gray-900 transition-colors">Recruitment</a>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none">Alumni</button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[180px] mt-2">
                <DropdownMenu.Item asChild>
                  <a href="/alumni/newsletters" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">Newsletters</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <a href="/alumni/composites" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">Composites</a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 
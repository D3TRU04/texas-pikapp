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
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Link href="/home">
                <img src="/pikapp-coatofarms.png" alt="Pi Kappa Phi Logo" className="h-16" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/home" className="text-gray-700 hover:text-black transition-colors">Home</a>
              <a href="/chapter" className="text-gray-700 hover:text-black transition-colors">Chapter</a>
              <a href="/recruitment" className="text-gray-700 hover:text-black transition-colors">Recruitment</a>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="text-gray-700 hover:text-black transition-colors focus:outline-none">Alumni ▾</button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[180px] mt-2">
                  <DropdownMenu.Item asChild>
                    <a href="/alumni/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">History</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <a href="/alumni/newsletters" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Newsletters</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <a href="/alumni/composites" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Composites</a>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              {/* <a href="#composites" className="text-gray-500 hover:text-black transition-colors">Composites</a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 
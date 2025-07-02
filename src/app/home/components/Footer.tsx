'use client'

import { Sparkles, Github, Instagram} from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
                <img src="/pikapp-logo.png" alt="Pi Kappa Phi Logo" className="h-8" />
            </div>
            <p className="text-gray-500 mb-4 max-w-md italic">
                "Nothing shall ever tear us asunder"
            </p>
            <div className="flex space-x-4">
              <a href="/https://www.instagram.com/texaspikapps/" className="text-gray-400 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Github size={20} />
              </a> */}
            </div>
          </div>
          
          <div>
            <ul className="space-y-2 text-gray-500">
              <li><a href="/home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="/chapter" className="hover:text-black transition-colors">Chapter</a></li>
              <li><a href="/alumni" className="hover:text-black transition-colors">Alumni</a></li>
              <li><a href="/recruitment" className="hover:text-black transition-colors">Recruitment</a></li>
            </ul>
          </div>
          
          {/* <div>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#alumni" className="hover:text-black transition-colors">Alumni</a></li>
              <li><a href="#composites" className="hover:text-black transition-colors">Composites</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-500 text-sm">
            © 2025 Zeta Theta Chapter of Pi Kappa Phi at the University of Texas at Austin. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  )
} 
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#e6f0fa] to-[#cce0f6] flex flex-col md:flex-row items-center justify-between min-h-[80vh] mt-12 mb-20 md:mt-24 md:mb-32 py-24 px-6 md:px-32 gap-2 md:gap-4 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute -top-8 left-0 w-full pointer-events-none z-20">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24" preserveAspectRatio="none">
          <path d="M0,80 Q360,120 720,60 Q1080,0 1440,80 L1440,0 L0,0 Z" fill="#fff" />
        </svg>
      </div>
      {/* Bottom Wave */}
      <div className="absolute -bottom-8 left-0 w-full pointer-events-none z-20">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24" preserveAspectRatio="none">
          <path d="M0,20 Q360,100 720,60 Q1080,0 1440,60 L1440,100 L0,100 Z" fill="#fff" />
        </svg>
      </div>
      {/* Gray Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='40' height='40' fill='none'/%3E%3Cpath d='M40 0H0V40' stroke='%239CA3AF' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-4xl md:text-6xl text-[#E7A614] leading-tight tracking-tight">
          Welcome to <br />Texas Pi Kapp!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-lg">
          Join a community of driven men at UT Austin. Make lifelong friends, grow as a leader, and make a difference on campus and beyond.
        </p>
        <Link
          href="/recruitment"
          className="inline-flex items-center px-8 py-4 bg-[#005596] text-white rounded-lg transition-colors hover:bg-[#003d66] text-lg shadow"
        >
          <span>Join our Brotherhood</span>
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
      {/* Right: Image takes up half the screen horizontally on desktop */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/welcome-pic.png"
          alt="Pi Kappa Phi Group"
          className="w-full h-auto max-w-full rounded-xl shadow-lg"
          draggable={false}
        />
      </div>
    </section>
  )
} 
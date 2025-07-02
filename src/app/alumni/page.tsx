import React from 'react';
import { Header } from '../home/components/Header';
import { Footer } from '../home/components/Footer';

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl text-[#E7A614] mb-4 font-normal">Alumni</h1>
          <p className="text-lg text-gray-700 font-normal">Coming Soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
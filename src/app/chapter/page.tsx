import React from 'react';
import { Header } from '../home/components/Header';
import { Footer } from '../home/components/Footer';

// Executive Board positions array
const executiveBoard = [
  {
    name: "Ryan Zahedivash",
    role: "Archon",
    classification: "Junior",
    majorMinor: "Economics",
    imageUrl: "/images/exec-board/john-smith.jpg"
  },
  {
    name: "Garrett Etter",
    role: "Vice-Archon",
    classification: "Junior",
    majorMinor: "Exercise Science / Pre-Med",
    imageUrl: "/images/exec-board/sarah-johnson.jpg"
  },
  {
    name: "Matthew Paro",
    role: "Secretary",
    classification: "Junior",
    majorMinor: "Nursing / Business",
    imageUrl: "/images/exec-board/emily-rodriguez.jpg"
  },
  {
    name: "Dylan Cochran",
    role: "Warden",
    classification: "Junior",
    majorMinor: "Nursing",
    imageUrl: "/images/exec-board/emily-rodriguez.jpg"
  },
  {
    name: "Douglas Chaiken",
    role: "Treasurer",
    classification: "Senior",
    majorMinor: "Finance",
    imageUrl: "/images/exec-board/michael-chen.jpg"
  },
  {
    name: "Edward Chen",
    role: "Chaplain",
    classification: "Senior",
    majorMinor: "Finance",
    imageUrl: "/images/exec-board/emily-rodriguez.jpg"
  },
  {
    name: "Ishan Singh",
    role: "Historian",
    classification: "Junior",
    majorMinor: "Accounting",
    imageUrl: "/images/exec-board/david-kim.jpg"
  },
  {
    name: "Joshua Rosenblum",
    role: "Philanthropy Chair",
    classification: "Sophomore",
    majorMinor: "Finance",
    imageUrl: "/images/exec-board/jessica-williams.jpg"
  },
  {
    name: "Darren Jimenez",
    role: "Risk Management Chair",
    classification: "Junior",
    majorMinor: "Economics",
    imageUrl: "/images/exec-board/alex-thompson.jpg"
  },
  {
    name: "Daniel Lei",
    role: "Standards Chair",
    classification: "Junior",
    majorMinor: "Neuroscience",
    imageUrl: "/images/exec-board/rachel-green.jpg"
  },
  {
    name: "Jon Naqvi",
    role: "Social/Brotherhood Chair",
    classification: "Junior",
    majorMinor: "Public Health",
    imageUrl: "/images/exec-board/kevin-martinez.jpg"
  },
  {
    name: "Dan Truong",
    role: "Public Relations Chair",
    classification: "Junior",
    majorMinor: "Mathematics / Computer Science",
    imageUrl: "/images/exec-board/amanda-foster.jpg"
  },
  {
    name: "Jacob Boche",
    role: "Scholarship Chair",
    classification: "Senior",
    majorMinor: "Aerospace Engineering",
    imageUrl: "/images/exec-board/amanda-foster.jpg"
  },
];

export default function ChapterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#E7A614]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#005596]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-[#E7A614]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-bl from-[#005596]/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-[#E7A614] mt-24 mb-24 font-normal text-center">2025 Executive Board + Chairmen</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {executiveBoard.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                  <div className="flex items-center mb-4">
                    <img 
                      src={member.imageUrl} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#E7A614]"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-[#005596]">{member.name}</h3>
                      <p className="text-md font-medium text-gray-800">{member.role}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">{member.classification}</p>
                    <p className="text-sm text-gray-600">{member.majorMinor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
} 
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl font-bold text-charcoal-900">20</span>
              <h1 className="text-4xl md:text-5xl font-normal text-charcoal-900 mx-8">
                EXECUTIVE BOARD
              </h1>
              <span className="text-6xl font-bold text-charcoal-900">25</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Grid */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-8" style={{maxWidth: 'calc(5 * (160px + 32px))'}}>
            {executiveBoard.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="w-40 h-48 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-3xl font-medium text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-charcoal-900">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
} 
'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const featuredAlumni = [
  {
    name: 'John Smith',
    graduationYear: '2015',
    currentPosition: 'Senior Software Engineer',
    company: 'Google',
    image: '/images/alumni/john-smith.jpg',
    quote: 'Pi Kappa Phi provided me with leadership skills that have been invaluable in my career.',
  },
  {
    name: 'Sarah Johnson',
    graduationYear: '2018',
    currentPosition: 'Investment Banker',
    company: 'Goldman Sachs',
    image: '/images/alumni/sarah-johnson.jpg',
    quote: 'The brotherhood and networking opportunities at Pi Kapp helped launch my career.',
  },
  {
    name: 'Michael Chen',
    graduationYear: '2020',
    currentPosition: 'Medical Doctor',
    company: 'Dell Medical School',
    image: '/images/alumni/michael-chen.jpg',
    quote: 'The support and mentorship I received from my brothers continues to inspire me.',
  },
];

const alumniEvents = [
  {
    date: 'April 15, 2024',
    title: 'Alumni Networking Mixer',
    description: 'Connect with fellow alumni and current brothers in a casual setting.',
    location: 'Austin, TX',
    time: '6:00 PM - 9:00 PM',
    category: 'Networking',
  },
  {
    date: 'May 20, 2024',
    title: 'Career Panel Discussion',
    description: 'Hear from successful alumni about their career paths and advice.',
    location: 'Virtual',
    time: '7:00 PM - 8:30 PM',
    category: 'Professional',
  },
  {
    date: 'June 10, 2024',
    title: 'Alumni Golf Tournament',
    description: 'Annual golf tournament to raise funds for scholarships.',
    location: 'Austin Country Club',
    time: '8:00 AM - 2:00 PM',
    category: 'Social',
  },
];

export default function AlumniPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Alumni Network
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay connected with your brothers and continue the legacy of Pi Kappa Phi.
          </p>
        </div>
      </Section>

      {/* Featured Alumni Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured Alumni
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Success stories from our distinguished alumni
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredAlumni.map((alumnus) => (
            <Card key={alumnus.name} hover>
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{alumnus.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Class of {alumnus.graduationYear}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {alumnus.currentPosition} at {alumnus.company}
                </p>
                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "{alumnus.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Alumni Events Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Upcoming Alumni Events
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Connect with your brothers at these upcoming events
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {alumniEvents.map((event) => (
            <Card key={event.title} hover>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{event.category}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <p><span className="font-medium">Location:</span> {event.location}</p>
                  <p><span className="font-medium">Time:</span> {event.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            There are many ways to stay connected and give back to the chapter.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="w-full">
              Update Your Information
            </Button>
            <Button variant="outline" className="w-full">
              Become a Mentor
            </Button>
            <Button variant="outline" className="w-full">
              Share Your Story
            </Button>
            <Button variant="outline" className="w-full">
              Make a Donation
            </Button>
          </div>
        </div>
      </Section>

      {/* Alumni Directory Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Alumni Directory
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Connect with fellow alumni through our exclusive directory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto">
              Access Directory
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Request Access
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 
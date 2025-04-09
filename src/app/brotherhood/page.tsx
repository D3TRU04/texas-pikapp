'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const brotherhoodActivities = [
  {
    category: 'Academics',
    title: 'Study Sessions',
    description: 'Weekly study sessions where brothers help each other excel academically.',
    image: '/images/brotherhood/study.jpg',
  },
  {
    category: 'Retreats',
    title: 'Annual Retreat',
    description: 'A weekend getaway to strengthen bonds and create lasting memories.',
    image: '/images/brotherhood/retreat.jpg',
  },
  {
    category: 'Intramurals',
    title: 'Sports Teams',
    description: 'Competitive and recreational sports teams representing Pi Kappa Phi.',
    image: '/images/brotherhood/sports.jpg',
  },
  {
    category: 'Social',
    title: 'Formal Events',
    description: 'Annual formal events and social gatherings with other organizations.',
    image: '/images/brotherhood/formal.jpg',
  },
];

const brotherOfTheMonth = {
  name: 'Alex Johnson',
  year: 'Senior',
  major: 'Computer Science',
  quote: 'Pi Kappa Phi has given me lifelong friendships and countless opportunities for personal growth.',
  image: '/images/brotherhood/brother-of-month.jpg',
};

export default function BrotherhoodPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Brotherhood
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Pi Kappa Phi, brotherhood is more than just a word - it's a lifelong commitment to supporting and uplifting one another.
          </p>
        </div>
      </Section>

      {/* Activities Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Brotherhood Activities
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover the many ways our brothers connect and grow together
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {brotherhoodActivities.map((activity) => (
            <Card key={activity.title} hover>
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <Badge variant="secondary" className="mb-2">
                  {activity.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Brother of the Month Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Brother of the Month
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Recognizing outstanding brothers who exemplify our values
            </p>
          </div>
          <Card>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{brotherOfTheMonth.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Year:</span> {brotherOfTheMonth.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Major:</span> {brotherOfTheMonth.major}
                  </p>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "{brotherOfTheMonth.quote}"
                </blockquote>
              </CardContent>
            </div>
          </Card>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The principles that guide our brotherhood
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We develop leaders who make a positive impact in their communities and beyond.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to serving others and making a difference in our communities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Brotherhood</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build lifelong bonds of friendship, support, and mutual respect.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
} 
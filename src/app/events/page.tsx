'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const upcomingEvents = [
  {
    date: 'March 15, 2024',
    title: 'Spring Formal',
    description: 'Join us for our annual spring formal at a beautiful venue in downtown Austin.',
    location: 'The Driskill Hotel',
    time: '7:00 PM - 11:00 PM',
    category: 'Social',
    image: '/images/events/spring-formal.jpg',
  },
  {
    date: 'March 20, 2024',
    title: 'Alumni Networking Night',
    description: 'Connect with successful Pi Kapp alumni and learn about career opportunities.',
    location: 'UT Campus - GSB 2.124',
    time: '6:00 PM - 8:00 PM',
    category: 'Professional',
    image: '/images/events/networking.jpg',
  },
  {
    date: 'March 25, 2024',
    title: 'Intramural Basketball Championship',
    description: 'Cheer on our brothers as they compete in the intramural basketball finals.',
    location: 'Gregory Gym',
    time: '7:00 PM - 9:00 PM',
    category: 'Sports',
    image: '/images/events/basketball.jpg',
  },
];

const pastHighlights = [
  {
    title: 'Fall Retreat 2023',
    description: 'A weekend of bonding and adventure in the Texas Hill Country.',
    date: 'October 2023',
    image: '/images/events/fall-retreat.jpg',
  },
  {
    title: 'Philanthropy Week',
    description: 'Raised over $5,000 for Push America through various events.',
    date: 'November 2023',
    image: '/images/events/philanthropy.jpg',
  },
  {
    title: 'Holiday Party',
    description: 'Celebrated the end of the semester with a festive gathering.',
    date: 'December 2023',
    image: '/images/events/holiday.jpg',
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Events
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay up to date with our upcoming events and see highlights from past gatherings.
          </p>
        </div>
      </Section>

      {/* Upcoming Events Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join us at our next event
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.title} hover>
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{event.category}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <p><span className="font-medium">Location:</span> {event.location}</p>
                  <p><span className="font-medium">Time:</span> {event.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Past Highlights Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Past Highlights
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Memorable moments from our recent events
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pastHighlights.map((highlight) => (
            <Card key={highlight.title} hover>
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">
                  {highlight.date}
                </span>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Calendar Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Event Calendar
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            View all our events in one place
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=example%40gmail.com&ctz=America%2FChicago"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </Section>
    </div>
  );
} 
'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const events = [
  {
    date: 'March 15, 2024',
    title: 'Push America Fundraiser',
    description: 'Annual fundraiser supporting Push America and its mission to serve people with disabilities.',
    location: 'UT Campus - Main Mall',
    time: '10:00 AM - 2:00 PM',
    image: '/images/philanthropy/push-america.jpg',
  },
  {
    date: 'April 5, 2024',
    title: 'Community Cleanup',
    description: 'Join us in cleaning up local parks and neighborhoods.',
    location: 'Pease Park',
    time: '9:00 AM - 12:00 PM',
    image: '/images/philanthropy/cleanup.jpg',
  },
  {
    date: 'May 10, 2024',
    title: 'Food Drive',
    description: 'Collecting non-perishable food items for local food banks.',
    location: 'UT Campus - West Mall',
    time: '11:00 AM - 3:00 PM',
    image: '/images/philanthropy/food-drive.jpg',
  },
];

const partners = [
  {
    name: 'Push America',
    description: 'Our national philanthropy partner, dedicated to serving people with disabilities.',
    logo: '/images/philanthropy/push-america-logo.png',
  },
  {
    name: 'Austin Food Bank',
    description: 'Local food bank providing meals to those in need.',
    logo: '/images/philanthropy/austin-food-bank-logo.png',
  },
  {
    name: 'Keep Austin Beautiful',
    description: 'Organization focused on environmental conservation and community beautification.',
    logo: '/images/philanthropy/keep-austin-beautiful-logo.png',
  },
];

export default function PhilanthropyPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Philanthropy
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Pi Kappa Phi, we are committed to making a positive impact in our community through service and philanthropy.
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
            Join us in making a difference
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <Card key={event.title} hover>
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <Badge variant="secondary" className="mb-2">
                  {event.date}
                </Badge>
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

      {/* Impact Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Making a difference in our community
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600 dark:text-gray-300">Hours of Community Service</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$10,000+</div>
              <p className="text-gray-600 dark:text-gray-300">Raised for Charity</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-300">Community Partners</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Partners Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Organizations we work with to make a difference
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <Card key={partner.name} hover>
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual logo here */}
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Want to support our philanthropic efforts? Join us at our next event or make a donation to help us continue making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View Events
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Donate
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
} 
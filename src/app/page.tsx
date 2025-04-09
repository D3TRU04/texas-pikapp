'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const features = [
  {
    title: 'Brotherhood',
    description: 'Join a lifelong brotherhood of leaders, scholars, and gentlemen.',
    image: '/images/home/brotherhood.jpg',
    link: '/brotherhood',
  },
  {
    title: 'Philanthropy',
    description: 'Make a difference through our national philanthropy and local service initiatives.',
    image: '/images/home/philanthropy.jpg',
    link: '/philanthropy',
  },
  {
    title: 'Leadership',
    description: 'Develop leadership skills through chapter positions and campus involvement.',
    image: '/images/home/leadership.jpg',
    link: '/about',
  },
  {
    title: 'Academics',
    description: 'Excel academically with our study resources and brotherhood support.',
    image: '/images/home/academics.jpg',
    link: '/about',
  },
];

const upcomingEvents = [
  {
    title: 'Rush Week',
    date: 'January 15-19, 2024',
    description: 'Join us for a week of events to learn about our brotherhood.',
    link: '/rush',
  },
  {
    title: 'Push America Fundraiser',
    date: 'February 10, 2024',
    description: 'Help us raise funds for our national philanthropy.',
    link: '/philanthropy',
  },
  {
    title: 'Spring Formal',
    date: 'March 15, 2024',
    description: 'Annual spring formal at The Driskill Hotel.',
    link: '/events',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to Pi Kappa Phi
              <span className="block text-primary">Zeta Theta Chapter</span>
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              Building exceptional leaders through lifelong brotherhood at The University of Texas at Austin.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link href="/rush">Join Our Brotherhood</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our brotherhood
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Common Loyalty',
                description: 'Building lifelong bonds through shared experiences and mutual support.',
              },
              {
                title: 'Personal Responsibility',
                description: 'Developing leaders who take ownership of their actions and impact.',
              },
              {
                title: 'Achievement',
                description: 'Striving for excellence in academics, leadership, and service.',
              },
              {
                title: 'Accountability',
                description: 'Holding ourselves and each other to the highest standards.',
              },
              {
                title: 'Campus Leadership',
                description: 'Making a positive impact in our university community.',
              },
              {
                title: 'Responsible Citizenship',
                description: 'Contributing meaningfully to society and our communities.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Active Brothers', value: '100+' },
              { label: 'Years at UT Austin', value: '35+' },
              { label: 'Service Hours', value: '1,000+' },
              { label: 'Alumni Network', value: '2,500+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="mt-2 text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-accent p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Join Our Brotherhood?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Take the first step towards a lifelong brotherhood. Learn about our rush process and upcoming events.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/rush">Rush Pi Kapp</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
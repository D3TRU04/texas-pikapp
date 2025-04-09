'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const events = [
  {
    date: 'January 15, 2024',
    title: 'Meet the Brothers',
    description: 'Come meet the brothers and learn about our fraternity.',
    location: 'UT Campus - Union Building',
    time: '6:00 PM',
  },
  {
    date: 'January 16, 2024',
    title: 'Game Night',
    description: 'Join us for a fun night of games and brotherhood.',
    location: 'UT Campus - Union Building',
    time: '7:00 PM',
  },
  {
    date: 'January 17, 2024',
    title: 'Service Event',
    description: 'Volunteer with us and make a difference in the community.',
    location: 'UT Campus - Union Building',
    time: '5:00 PM',
  },
];

const faqs = [
  {
    question: 'What is Rush?',
    answer: 'Rush is our recruitment process where potential new members can meet the brothers, learn about our fraternity, and decide if Pi Kappa Phi is the right fit for them.',
  },
  {
    question: 'How do I join?',
    answer: 'To join Pi Kappa Phi, you must attend our rush events, meet the brothers, and go through our recruitment process. The best way to start is by filling out our interest form.',
  },
  {
    question: 'What are the requirements?',
    answer: 'We look for men who demonstrate leadership, academic excellence, and a commitment to service. You must be a full-time student at UT Austin with a minimum GPA of 2.5.',
  },
  {
    question: 'What is the time commitment?',
    answer: 'The time commitment varies, but typically includes weekly chapter meetings, brotherhood events, and service opportunities. We understand the importance of academics and work with our members to balance their commitments.',
  },
];

export default function RushPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Join Our Brotherhood
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Become part of a legacy of leadership, service, and brotherhood at The University of Texas at Austin.
          </p>
        </div>
      </Section>

      {/* Events Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rush Events
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join us at our upcoming events
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <Card key={event.date} hover>
              <CardHeader>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Time:</span> {event.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Interest Form Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Express Interest
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Fill out our interest form to learn more about joining Pi Kappa Phi
            </p>
          </div>
          <Card>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <Input
                  type="text"
                  placeholder="Major"
                  required
                />
                <Input
                  type="number"
                  placeholder="Expected Graduation Year"
                  required
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about joining Pi Kappa Phi
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
} 
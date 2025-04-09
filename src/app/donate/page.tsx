'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const donationOptions = [
  {
    amount: 25,
    description: 'Help support our local community initiatives',
  },
  {
    amount: 50,
    description: 'Contribute to our national philanthropy efforts',
  },
  {
    amount: 100,
    description: 'Make a significant impact on our programs',
  },
  {
    amount: 250,
    description: 'Sponsor a major event or initiative',
  },
];

export default function DonatePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Support Our Mission
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your donation helps us continue our philanthropic efforts and make a positive impact in our community.
          </p>
        </div>
      </Section>

      {/* Donation Options Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Choose Your Donation Amount
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Every contribution makes a difference
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {donationOptions.map((option) => (
            <Card key={option.amount} hover className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  ${option.amount}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {option.description}
                </p>
                <Button className="mt-4 w-full">Donate</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Custom Donation Form */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Custom Donation</h2>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  label="First name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                />
                <Input
                  label="Last name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                />
              </div>
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                required
              />
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Donation Amount
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder="0.00"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 dark:text-gray-400 sm:text-sm">USD</span>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Add a personal message with your donation"
                />
              </div>
              <Button type="submit" className="w-full">
                Donate Now
              </Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Impact Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            See how your donations make a difference
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
    </div>
  );
} 
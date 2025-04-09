'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const executiveBoard = [
  {
    name: 'David Wilson',
    position: 'Archon',
    year: 'Senior',
    major: 'Business',
    image: '/images/members/david-wilson.jpg',
  },
  {
    name: 'Emily Chen',
    position: 'Vice Archon',
    year: 'Junior',
    major: 'Computer Science',
    image: '/images/members/emily-chen.jpg',
  },
  {
    name: 'James Rodriguez',
    position: 'Treasurer',
    year: 'Junior',
    major: 'Finance',
    image: '/images/members/james-rodriguez.jpg',
  },
  {
    name: 'Sarah Thompson',
    position: 'Secretary',
    year: 'Sophomore',
    major: 'Marketing',
    image: '/images/members/sarah-thompson.jpg',
  },
];

const committees = [
  {
    name: 'Philanthropy',
    description: 'Organizing community service events and fundraising initiatives.',
    members: 12,
    chair: 'Michael Lee',
  },
  {
    name: 'Social',
    description: 'Planning social events and brotherhood activities.',
    members: 8,
    chair: 'Jessica Martinez',
  },
  {
    name: 'Recruitment',
    description: 'Managing rush events and new member education.',
    members: 10,
    chair: 'Andrew Kim',
  },
  {
    name: 'Alumni Relations',
    description: 'Maintaining connections with alumni and organizing alumni events.',
    members: 6,
    chair: 'Rachel Brown',
  },
];

const achievements = [
  {
    title: 'Chapter Excellence Award',
    description: 'Recognized for outstanding chapter performance in 2023',
    date: 'December 2023',
    category: 'National',
  },
  {
    title: 'Community Service Award',
    description: 'Most hours of community service among UT fraternities',
    date: 'November 2023',
    category: 'University',
  },
  {
    title: 'Academic Excellence',
    description: 'Highest GPA among fraternities for Fall 2023',
    date: 'January 2024',
    category: 'University',
  },
];

export default function MembersPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Our Brothers
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make up the Zeta Theta Chapter of Pi Kappa Phi.
          </p>
        </div>
      </Section>

      {/* Executive Board Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Executive Board
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our chapter's leadership team
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {executiveBoard.map((member) => (
            <Card key={member.name} hover>
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {member.year} - {member.major}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Committees Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Committees
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get involved in our various committees
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {committees.map((committee) => (
            <Card key={committee.name} hover>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{committee.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {committee.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <p><span className="font-medium">Chair:</span> {committee.chair}</p>
                  <p><span className="font-medium">Members:</span> {committee.members}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recent Achievements
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Celebrating our chapter's successes
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.title} hover>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{achievement.category}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Join Our Brotherhood
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in becoming a part of our brotherhood? Learn more about our recruitment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto">
              Learn About Rush
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Contact Recruitment
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 
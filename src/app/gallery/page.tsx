'use client';

import React, { useState, useMemo } from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

interface Photo {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
}

interface SortOption {
  value: string;
  label: string;
}

const categories = [
  'All',
  'Brotherhood',
  'Philanthropy',
  'Social',
  'Formal',
  'Sports',
];

const sortOptions: SortOption[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'title', label: 'Title A-Z' },
  { value: 'category', label: 'Category' },
];

const photos: Photo[] = [
  {
    id: 1,
    title: 'Fall Retreat 2023',
    category: 'Brotherhood',
    date: '2023-10-15',
    image: '/images/gallery/fall-retreat.jpg',
    description: 'Annual brotherhood retreat in the Texas Hill Country',
    tags: ['retreat', 'brotherhood', 'outdoors'],
  },
  {
    id: 2,
    title: 'Push America Fundraiser',
    category: 'Philanthropy',
    date: '2023-11-20',
    image: '/images/gallery/push-america.jpg',
    description: 'Raising funds for our national philanthropy',
    tags: ['fundraiser', 'philanthropy', 'service'],
  },
  {
    id: 3,
    title: 'Spring Formal',
    category: 'Formal',
    date: '2024-03-15',
    image: '/images/gallery/spring-formal.jpg',
    description: 'Annual spring formal at The Driskill Hotel',
    tags: ['formal', 'social', 'dance'],
  },
  {
    id: 4,
    title: 'Intramural Basketball',
    category: 'Sports',
    date: '2024-02-10',
    image: '/images/gallery/basketball.jpg',
    description: 'Intramural basketball championship game',
    tags: ['sports', 'basketball', 'competition'],
  },
  {
    id: 5,
    title: 'Community Cleanup',
    category: 'Philanthropy',
    date: '2024-01-05',
    image: '/images/gallery/cleanup.jpg',
    description: 'Volunteering at local parks',
    tags: ['service', 'community', 'outdoors'],
  },
  {
    id: 6,
    title: 'Alumni Networking',
    category: 'Social',
    date: '2023-12-10',
    image: '/images/gallery/networking.jpg',
    description: 'Networking event with alumni',
    tags: ['networking', 'alumni', 'professional'],
  },
  {
    id: 7,
    title: 'Holiday Party',
    category: 'Social',
    date: '2023-12-15',
    image: '/images/gallery/holiday.jpg',
    description: 'End of semester celebration',
    tags: ['social', 'holiday', 'celebration'],
  },
  {
    id: 8,
    title: 'Study Sessions',
    category: 'Brotherhood',
    date: '2023-11-05',
    image: '/images/gallery/study.jpg',
    description: 'Brothers helping each other succeed academically',
    tags: ['academics', 'study', 'brotherhood'],
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');

  const filteredPhotos = useMemo(() => {
    let result = [...photos];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(photo => photo.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(photo => 
        photo.title.toLowerCase().includes(query) ||
        photo.description.toLowerCase().includes(query) ||
        photo.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort photos
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Photo Gallery
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Relive our chapter's most memorable moments and events.
          </p>
        </div>
      </Section>

      {/* Search and Filter Section */}
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:w-64">
            <Input
              type="text"
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="w-full sm:w-48">
            <Select
              value={sortBy}
              onChange={(value) => setSortBy(value)}
              options={sortOptions}
            />
          </div>
        </div>
      </Section>

      {/* Photo Grid */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <Card
              key={photo.id}
              hover
              className="cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                {/* Add actual image here */}
              </div>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{photo.category}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(photo.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {photo.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full p-6">
            <div className="aspect-video relative mb-4">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
              {/* Add actual image here */}
            </div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">{selectedPhoto.title}</h3>
              <Button
                variant="ghost"
                onClick={() => setSelectedPhoto(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{selectedPhoto.category}</Badge>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(selectedPhoto.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {selectedPhoto.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedPhoto.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Share Your Photos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have photos from our events? Share them with the brotherhood.
          </p>
          <Button className="w-full sm:w-auto">
            Upload Photos
          </Button>
        </div>
      </Section>
    </div>
  );
} 
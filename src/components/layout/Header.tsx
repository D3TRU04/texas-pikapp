'use client';

import React from 'react';
import Navbar from './Navbar';
import { Container } from '../ui/Container';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
} 
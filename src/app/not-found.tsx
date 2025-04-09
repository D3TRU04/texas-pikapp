import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300">
        Page Not Found
      </h2>
      <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
        Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
      >
        Return Home
      </Link>
    </Container>
  );
} 
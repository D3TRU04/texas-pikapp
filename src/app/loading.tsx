import { Container } from '@/components/ui/Container';

export default function Loading() {
  return (
    <Container className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-600" />
    </Container>
  );
} 
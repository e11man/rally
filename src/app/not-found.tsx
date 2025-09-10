import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center bg-gray-custom/10">
      <Container className="text-center py-24">
        <Typography variant="h1" className="mb-4">Page not found</Typography>
        <Typography variant="body" className="text-text-secondary mb-8 max-w-2xl mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </Typography>
        <Link href="/">
          <Button variant="primary" size="lg">Go back home</Button>
        </Link>
      </Container>
    </section>
  );
}

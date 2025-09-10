"use client";

import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { ServiceCard } from '@/modules/services/ServiceCard';
import { services } from '@/data/content';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="subtitle" className="text-accent-main mb-3">
            OUR SERVICES
          </Typography>
          <Typography variant="h1" className="mb-6">
            Comprehensive Business Solutions
          </Typography>
          <Typography variant="body" className="text-text-secondary max-w-2xl mx-auto">
            We provide end-to-end business consulting services designed to optimize your operations, 
            enhance your leadership capabilities, and drive sustainable growth.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Typography variant="h2" className="mb-6">
            Ready to Transform Your Business?
          </Typography>
          <Typography variant="body" className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business goals and drive sustainable growth.
          </Typography>
          <Button
            onClick={() => window.location.href = '/contact'}
            variant="primary"
            size="lg"
          >
            Get Started Today
          </Button>
        </div>
      </Container>
    </div>
  );
}

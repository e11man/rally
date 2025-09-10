import React from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/Card';
import { Testimonial } from '@/types/common';

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section className="py-20 bg-gray-custom/5">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="subtitle" className="text-accent-main mb-3">
            {subtitle}
          </Typography>
          <Typography variant="h1" className="mb-6">
            {title}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="elevated">
              <CardContent className="p-6">
                <Typography variant="body" className="text-text-secondary mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </Typography>
                <div className="flex items-center">
                  {testimonial.avatar && (
                    <div className="w-12 h-12 bg-accent-main/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-accent-main font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <Typography variant="small" className="font-semibold text-primary-main">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" className="text-text-secondary">
                      {testimonial.role}, {testimonial.company}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

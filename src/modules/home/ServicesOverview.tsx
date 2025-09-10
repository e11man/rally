import React from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Service } from '@/types/common';

interface ServicesOverviewProps {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  title,
  subtitle,
  description,
  services,
}) => {
  return (
    <section className="py-20 bg-gray-custom/10">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="subtitle" className="text-accent-main mb-3">
            {subtitle}
          </Typography>
          <Typography variant="h1" className="mb-6">
            {title}
          </Typography>
          <Typography variant="body" className="text-text-secondary max-w-2xl mx-auto">
            {description}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} variant="elevated" className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-main/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography variant="body" className="text-text-secondary mb-4">
                  {service.description}
                </Typography>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-small text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-accent-main rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Service } from '@/types/common';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <Card 
      variant="elevated" 
      className="h-full cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <CardHeader>
        <div className="w-16 h-16 bg-accent-main/10 rounded-lg flex items-center justify-center mb-4">
          <span className="text-3xl">{service.icon}</span>
        </div>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Typography variant="body" className="text-text-secondary mb-6">
          {service.description}
        </Typography>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-small text-text-secondary">
              <span className="w-1.5 h-1.5 bg-accent-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

interface ServiceDetailsProps {
  service: Service;
  onBack?: () => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack }) => {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-accent-main/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{service.icon}</span>
            </div>
            <Typography variant="h1" className="mb-6">
              {service.title}
            </Typography>
            <Typography variant="body" className="text-text-secondary max-w-2xl mx-auto">
              {service.description}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>What We Deliver</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-small text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-accent-main rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography variant="body" className="text-text-secondary">
                  Using our ALIGN 360 planning framework, we guide you through a proven process 
                  to focus energy on your most impactful priorities, allowing you and your business 
                  to move forward with confidence.
                </Typography>
              </CardContent>
            </Card>
          </div>

          {onBack && (
            <div className="text-center">
              <button
                onClick={onBack}
                className="text-accent-main hover:text-accent-dark transition-colors"
              >
                ← Back to Services
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

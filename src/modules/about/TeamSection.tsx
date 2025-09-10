import React from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TeamMember } from '@/types/common';

interface TeamSectionProps {
  title: string;
  subtitle: string;
  description: string;
  teamMembers: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  subtitle,
  description,
  teamMembers,
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
          {teamMembers.map((member) => (
            <Card key={member.id} variant="elevated" className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-accent-main/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {member.avatar ? (
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl text-accent-main font-semibold">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <CardTitle>{member.name}</CardTitle>
                <Typography variant="subtitle" className="text-accent-main">
                  {member.role}
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body" className="text-text-secondary">
                  {member.bio}
                </Typography>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-accent-main hover:text-accent-dark transition-colors"
                  >
                    LinkedIn →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title,
  subtitle,
  steps,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-accent-main rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">{step.icon}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent-main/30 transform translate-x-4"></div>
                )}
              </div>
              <Typography variant="h4" className="mb-3">
                {step.title}
              </Typography>
              <Typography variant="body" className="text-text-secondary">
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

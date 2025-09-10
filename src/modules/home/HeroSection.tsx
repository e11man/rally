import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

// AlignFrameworkCards component for the card carousel
const AlignFrameworkCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Framework step data with images
  const frameworkSteps = [
    {
      id: 'strategic',
      title: 'Strategic Assessment',
      description: 'We analyze your business to identify challenges and opportunities to develop targeted solutions.',
      image: '/align_360.avif',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'alignment',
      title: 'Goal Alignment',
      description: 'We align your resources, team, and objectives to create a cohesive strategy for success.',
      image: '/executive_career_coaching.avif',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'implementation',
      title: 'Implementation Plan',
      description: 'We guide execution with clear milestones and metrics to ensure accountability and results.',
      image: '/non_profit_consulting.avif',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % frameworkSteps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [frameworkSteps.length]);

  // Handle manual navigation
  const goToStep = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      {/* Card stack with perspective effect */}
      <div className="w-96 h-96 mx-auto relative perspective">
        {frameworkSteps.map((step, index) => {
          const isActive = index === activeIndex;
          const isPrevious = (index === activeIndex - 1) || (activeIndex === 0 && index === frameworkSteps.length - 1);
          const isNext = (index === activeIndex + 1) || (activeIndex === frameworkSteps.length - 1 && index === 0);
          
          // Calculate z-index and position based on card state
          let zIndex = 0;
          let transform = '';
          let opacity = 0;
          
          if (isActive) {
            zIndex = 30;
            transform = 'rotateY(0deg) translateZ(20px)';
            opacity = 1;
          } else if (isPrevious) {
            zIndex = 20;
            transform = 'rotateY(-10deg) translateZ(0) translateX(-10%)';
            opacity = 0.8;
          } else if (isNext) {
            zIndex = 10;
            transform = 'rotateY(10deg) translateZ(0) translateX(10%)';
            opacity = 0.8;
          }
          
          return (
            <div
              key={step.id}
              className="absolute inset-0 transition-all duration-500 ease-in-out"
              style={{
                zIndex,
                transform,
                opacity,
              }}
            >
              {/* Card layers */}
              <div className="w-full h-full relative">
                {/* Background layers for depth */}
                <div className="absolute inset-0 rounded-2xl transform rotate-3 shadow-lg bg-gray-custom"></div>
                <div className="absolute inset-2 rounded-2xl transform -rotate-1 shadow-md bg-accent-main"></div>
                
                {/* Main card with image background */}
                <div className="absolute inset-4 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    {/* Header with ALIGN 360 and step number */}
                    <div className="text-center mb-4">
                      <div className="text-xl font-bold text-primary-main">ALIGN 360</div>
                      <div className="text-sm text-gray-500">Planning Framework</div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg bg-primary-main">
                      {step.icon}
                    </div>
                    
                    {/* Step content */}
                    <div className="text-center flex-grow">
                      <div className="text-lg font-bold mb-3 text-primary-main">{step.title}</div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Step indicator dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                      {frameworkSteps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToStep(idx)}
                          className={`h-2 rounded-full transition-all ${idx === activeIndex ? 'w-6 bg-accent-main' : 'w-2 bg-gray-custom'}`}
                          aria-label={`Go to step ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Simple accent elements */}
      <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg shadow-md transform rotate-12" style={{backgroundColor: '#F5AF53'}}></div>
      <div className="absolute -bottom-6 -right-6 w-10 h-10 rounded-lg shadow-md transform -rotate-12" style={{backgroundColor: '#25304A'}}></div>
    </div>
  );
};

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaAction: () => void;
  backgroundImageUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaAction,
  // backgroundImageUrl - kept for future use
}) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-accent-main"></div>
        <div className="absolute top-40 left-32 w-1 h-1 rounded-full bg-primary-main"></div>
        <div className="absolute top-60 left-16 w-1.5 h-1.5 rounded-full bg-accent-main"></div>
        <div className="absolute top-32 right-40 w-2 h-2 rounded-full bg-primary-light"></div>
        <div className="absolute bottom-40 right-32 w-1 h-1 rounded-full bg-accent-dark"></div>
        <div className="absolute bottom-60 right-20 w-1.5 h-1.5 rounded-full bg-primary-main"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 rounded-full bg-accent-main"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <Typography 
                variant="subtitle" 
                className="font-semibold tracking-wider uppercase mb-4 flex items-center text-accent-main"
              >
                <span className="w-12 h-0.5 mr-4 bg-accent-main"></span>
                {subtitle}
              </Typography>
              <Typography 
                variant="hero" 
                className="mb-6 leading-tight text-primary-main md:text-7xl"
              >
                {title}
              </Typography>
            </div>
            
            <Typography 
              variant="body" 
              className="text-text-secondary mb-8 text-lg leading-relaxed"
            >
              {description}
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={ctaAction}
                className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-md text-white flex items-center justify-center bg-primary-main hover:bg-primary-dark"
              >
                {ctaText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => window.location.href = '/about'}
                className="px-8 py-4 text-lg font-semibold border-2 rounded-md transition-all duration-300 transform hover:-translate-y-1 border-accent-main text-accent-main hover:text-accent-dark hover:border-accent-dark"
              >
                Learn More
              </button>
            </div>

            {/* Stats or social proof */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1 text-accent-main">200+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1 text-accent-main">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1 text-accent-main">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <AlignFrameworkCards />
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center border-primary-main">
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-primary-main"></div>
        </div>
      </div>
    </section>
  );
};

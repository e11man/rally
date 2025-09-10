"use client";

import { HeroSection } from '@/modules/home/HeroSection';
import { ServicesOverview } from '@/modules/home/ServicesOverview';
import { TestimonialsSection } from '@/modules/home/TestimonialsSection';
import { services, testimonials } from '@/data/content';

export default function HomePage() {
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <HeroSection
        title="Your business, optimized."
        subtitle="RALLY BUSINESS ADVISORS"
        description="Leading a business can be tough. We understand the unique challenges senior leaders and entrepreneurs face. Using our ALIGN 360 planning framework, we guide you through a proven process to focus energy on your most impactful priorities, allowing you and your business to move forward with confidence."
        ctaText="Get Started Today"
        ctaAction={handleGetStarted}
      />
      
      <ServicesOverview
        title="Our Services"
        subtitle="COMPREHENSIVE BUSINESS SOLUTIONS"
        description="We provide end-to-end business consulting services designed to optimize your operations, enhance your leadership capabilities, and drive sustainable growth."
        services={services.slice(0, 6)}
      />
      
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="SUCCESS STORIES"
        testimonials={testimonials}
      />
    </>
  );
}
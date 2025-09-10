"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ContactFormData } from '@/types/common';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  isLoading?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gray-custom/10">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h1" className="mb-6">
              Get In Touch
            </Typography>
            <Typography variant="body" className="text-text-secondary max-w-2xl mx-auto">
              Ready to optimize your business? Let&apos;s discuss how Rally Business Advisors can help you achieve your goals.
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Typography variant="h2" className="mb-8">
                Contact Information
              </Typography>
              
              <div className="space-y-6">
                <Card variant="outlined">
                  <CardContent className="p-6">
                    <Typography variant="h4" className="mb-3">
                      Phone
                    </Typography>
                    <Typography variant="body" className="text-text-secondary">
                      (555) 123-4567
                    </Typography>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardContent className="p-6">
                    <Typography variant="h4" className="mb-3">
                      Email
                    </Typography>
                    <Typography variant="body" className="text-text-secondary">
                      hello@rallybusinessadvisors.com
                    </Typography>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardContent className="p-6">
                    <Typography variant="h4" className="mb-3">
                      Address
                    </Typography>
                    <Typography variant="body" className="text-text-secondary">
                      123 Business District<br />
                      Suite 100<br />
                      New York, NY 10001
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-small font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-small font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-small font-medium text-text-primary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-small font-medium text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-small font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    isLoading={isLoading}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

interface FooterProps {
  logo: React.ReactNode;
  companyName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
  quickLinks: Array<{
    label: string;
    href: string;
  }>;
  services: Array<{
    label: string;
    href: string;
  }>;
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  companyName,
  description,
  address,
  phone,
  email,
  socialLinks,
  quickLinks,
  services,
}) => {
  return (
    <footer className="bg-primary-main text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {logo}
            </div>
            <Typography variant="body" className="text-gray-300 mb-6 max-w-md">
              {description}
            </Typography>
            <div className="space-y-2">
              <Typography variant="small" className="text-gray-300">
                {address}
              </Typography>
              <Typography variant="small" className="text-gray-300">
                Phone: {phone}
              </Typography>
              <Typography variant="small" className="text-gray-300">
                Email: {email}
              </Typography>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-accent-main transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h4" className="mb-6">
              Quick Links
            </Typography>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-main transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <Typography variant="h4" className="mb-6">
              Services
            </Typography>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-accent-main transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Typography variant="small" className="text-gray-300">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </Typography>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-accent-main transition-colors text-small">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-accent-main transition-colors text-small">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

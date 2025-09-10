"use client";

import { ContactForm } from '@/modules/contact/ContactForm';
import { ContactFormData } from '@/types/common';

export default function ContactPage() {
  const handleSubmit = (data: ContactFormData) => {
    // In a real application, you would send this data to your backend
    console.log('Contact form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return <ContactForm onSubmit={handleSubmit} />;
}

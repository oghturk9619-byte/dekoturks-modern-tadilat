import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  // Fix: Imported React to resolve the React namespace for ReactNode
  icon: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}
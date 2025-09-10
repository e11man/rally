import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva(
  'font-sans',
  {
    variants: {
      variant: {
        hero: 'text-hero font-bold text-primary-main',
        h1: 'text-h1 font-bold text-primary-main',
        h2: 'text-h2 font-semibold text-primary-main',
        h3: 'text-h3 font-semibold text-primary-main',
        h4: 'text-h4 font-medium text-primary-main',
        body: 'text-body text-text-primary',
        subtitle: 'text-body text-text-secondary font-medium',
        small: 'text-small text-text-secondary',
        caption: 'text-xsmall text-text-secondary',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      variant: 'body',
      align: 'left',
    },
  }
);

export interface TypographyProps 
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, align, as, ...props }, ref) => {
    const Component = as || (variant?.includes('h') ? variant as keyof React.JSX.IntrinsicElements : 'p');
    
    return React.createElement(
      Component,
      {
        className: cn(typographyVariants({ variant, align }), className),
        ref,
        ...props,
      }
    );
  }
);

Typography.displayName = 'Typography';

# Rally Business Advisors Website

A modern, responsive business consulting website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with premium aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Modular Architecture**: Highly reusable components and modules
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Optimized for fast loading and SEO
- **Vercel Ready**: Configured for seamless deployment on Vercel

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library with CVA
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel trying to make sure its good o rvcerlc

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components
│   └── navigation/        # Navigation components
├── modules/               # Feature-specific components
├── theme/                 # Design system configuration
├── types/                 # TypeScript type definitions
├── data/                  # Static content and data
└── lib/                   # Utility functions
```

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Customization

- **Colors**: Update `src/theme/index.ts` for color scheme changes
- **Typography**: Modify font settings in `tailwind.config.ts`
- **Content**: Update `src/data/content.ts` for site content
- **Components**: All components are modular and reusable

## License

Private - Rally Business Advisors
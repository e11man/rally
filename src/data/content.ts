import { NavItem, Service, Testimonial, TeamMember } from '@/types/common';

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services: Service[] = [
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    description: 'Develop comprehensive business strategies that align with your vision and drive sustainable growth.',
    icon: '🎯',
    features: [
      'Market analysis and competitive positioning',
      'Goal setting and KPI development',
      'Resource allocation and budgeting',
      'Risk assessment and mitigation strategies',
      'Implementation roadmap creation'
    ]
  },
  {
    id: 'operations-optimization',
    title: 'Operations Optimization',
    description: 'Streamline your business processes to improve efficiency, reduce costs, and enhance productivity.',
    icon: '⚙️',
    features: [
      'Process mapping and analysis',
      'Workflow optimization',
      'Technology integration',
      'Performance metrics development',
      'Continuous improvement frameworks'
    ]
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    description: 'Build strong leadership capabilities within your organization to drive team performance and culture.',
    icon: '👥',
    features: [
      'Executive coaching and mentoring',
      'Team building and collaboration',
      'Communication skills enhancement',
      'Decision-making frameworks',
      'Change management strategies'
    ]
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description: 'Optimize your financial structure and planning to support sustainable business growth.',
    icon: '💰',
    features: [
      'Financial analysis and modeling',
      'Cash flow optimization',
      'Investment strategy development',
      'Cost reduction initiatives',
      'Financial reporting and controls'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Leverage technology to modernize your business and stay competitive in the digital age.',
    icon: '💻',
    features: [
      'Technology assessment and planning',
      'Digital strategy development',
      'System integration and migration',
      'Data analytics and insights',
      'Cybersecurity and compliance'
    ]
  },
  {
    id: 'market-expansion',
    title: 'Market Expansion',
    description: 'Identify and capitalize on new market opportunities to grow your business reach.',
    icon: '🌍',
    features: [
      'Market research and analysis',
      'Entry strategy development',
      'Partnership and alliance building',
      'Brand positioning and marketing',
      'Sales and distribution optimization'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content: 'Rally Business Advisors transformed our approach to strategic planning. Their ALIGN 360 framework helped us focus on what truly matters and achieve 40% growth in just one year.',
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    company: 'Global Manufacturing Co.',
    role: 'President',
    content: 'The team at Rally provided exceptional guidance during our digital transformation. Their expertise in operations optimization saved us millions and improved our efficiency dramatically.',
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    company: 'Financial Services Group',
    role: 'Managing Director',
    content: 'Working with Rally Business Advisors was a game-changer for our leadership development initiatives. They helped us build a stronger, more cohesive leadership team.',
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'David Thompson',
    role: 'Founder & CEO',
    bio: 'With over 20 years of experience in business consulting, David founded Rally Business Advisors to help companies achieve sustainable growth through strategic planning and operational excellence.',
    linkedin: 'https://linkedin.com/in/davidthompson'
  },
  {
    id: 'team-2',
    name: 'Lisa Park',
    role: 'Senior Partner',
    bio: 'Lisa specializes in digital transformation and technology strategy. She has helped over 100 companies modernize their operations and leverage technology for competitive advantage.',
    linkedin: 'https://linkedin.com/in/lisapark'
  },
  {
    id: 'team-3',
    name: 'Robert Martinez',
    role: 'Partner',
    bio: 'Robert brings deep expertise in financial planning and market expansion. His analytical approach and strategic thinking have guided numerous companies through complex growth challenges.',
    linkedin: 'https://linkedin.com/in/robertmartinez'
  }
];

export const processSteps = [
  {
    id: 'step-1',
    title: 'Assessment',
    description: 'We analyze your current business state, identify opportunities, and understand your unique challenges.',
    icon: '📊'
  },
  {
    id: 'step-2',
    title: 'Alignment',
    description: 'Using our ALIGN 360 framework, we align your vision, goals, and resources for maximum impact.',
    icon: '🎯'
  },
  {
    id: 'step-3',
    title: 'Implementation',
    description: 'We guide you through the execution of strategic initiatives with ongoing support and monitoring.',
    icon: '🚀'
  },
  {
    id: 'step-4',
    title: 'Optimization',
    description: 'Continuous improvement and refinement to ensure sustainable growth and long-term success.',
    icon: '📈'
  }
];

import type { SiteCopy } from './types';

export const en = {
  meta: {
    title: 'Matrix Sync Tech | Digital Products for Growing Businesses',
    description: 'Matrix Sync Tech helps ambitious teams launch clearer websites, custom applications, and user experiences built for measurable growth.',
    ogTitle: 'Digital products with momentum built in',
  },
  nav: { about: 'Approach', services: 'Services', work: 'Work', pricing: 'Pricing', faq: 'FAQ', contact: 'Talk to us' },
  hero: {
    eyebrow: '>_ DIGITAL PRODUCTS, BUILT TO MOVE',
    title: 'Technology that keeps your business moving.',
    description: 'As an affordable web development agency in Indonesia, we design websites, custom web apps, and digital systems that feel clear to customers and useful to the teams behind them.',
    primaryCta: 'Start a conversation',
    secondaryCta: 'See how we work',
    tags: ['B2B websites', 'Custom applications', 'Product design'],
  },
  problem: {
    eyebrow: '01 / THE FRICTION',
    title: 'Good ideas lose momentum when execution is scattered.',
    body: 'Slow websites, confusing user journeys, and disconnected tools quietly cost your team time, trust, and opportunities.',
    points: ['Your value is hard to understand in the first five seconds.', 'Manual handoffs keep your team busy instead of effective.', 'A one-off build becomes difficult to improve when the business evolves.'],
  },
  solution: {
    eyebrow: '02 / OUR APPROACH',
    title: 'One partner to connect strategy, design, and technology.',
    body: 'We turn business goals into focused digital experiences, then build the foundations your team can keep growing on.',
    cards: [
      { title: 'Get oriented', body: 'A focused discovery sprint to surface priorities, risks, and the opportunities worth pursuing.' },
      { title: 'Make it obvious', body: 'Product and interface design that removes friction instead of simply looking current.' },
      { title: 'Build the next step', body: 'Maintainable code, infrastructure, and documentation that can keep pace with your business.' },
    ],
  },
  proof: { eyebrow: '03 / PROOF IN PRACTICE', title: 'Trust is earned by shipping the right work well.', body: 'From first validation to deployment, we keep communication open and decisions anchored to the outcome that matters.', stat: '1,000+', statLabel: 'national & international clients' },
  services: {
    eyebrow: '04 / CORE SERVICES',
    title: 'Start wherever your business needs momentum.',
    items: [
      { title: 'Websites & platforms', body: 'Company sites, landing pages, commerce, and web platforms that load fast and stay easy to manage.', cta: 'Build a website' },
      { title: 'Custom applications', body: 'Web and mobile products that simplify internal work or create better experiences for your customers.', cta: 'Discuss an app' },
      { title: 'UI/UX & product design', body: 'Research, user flows, prototypes, and systems that make products easier to understand and use.', cta: 'Start with design' },
    ],
  },
  pricing: {
    eyebrow: '05 / INVESTMENT',
    title: 'Start with a scope that makes sense.',
    body: 'Every engagement is shaped around your goals, timeline, and complexity. These starting points give us a useful place to talk.',
    tiers: [
      { name: 'Launch', price: 'From $250', detail: 'A focused landing page or prototype to move an idea forward.' },
      { name: 'Scale', price: 'From $1,200', detail: 'A business website or application with room to grow.', featured: true },
      { name: 'Partner', price: 'Custom scope', detail: 'Product support, internal systems, and long-term technical direction.' },
    ],
  },
  faq: {
    eyebrow: '06 / QUESTIONS WE HEAR OFTEN',
    title: 'Before we begin, let us make a few things clear.',
    items: [
      { question: 'How do we start a project?', answer: 'Share a little context about your business and the outcome you want. We will reply with a few questions and a sensible next step.' },
      { question: 'Can we start with design only?', answer: 'Absolutely. We can handle research, user flows, prototypes, and a clean handoff to your development team.' },
      { question: 'How long does a project take?', answer: 'A landing page commonly takes 2-4 weeks. Larger products are split into milestones so progress and priorities stay visible.' },
      { question: 'Do you support products after launch?', answer: 'Yes. We offer maintenance, hosting, performance improvements, and continued development when it is useful.' },
      { question: 'Do you work with international clients?', answer: 'Yes. We are comfortable with English briefs, async collaboration, and working across time zones.' },
      { question: 'Why is this FAQ unusually honest?', answer: 'Because good projects benefit from clear expectations. Also, a little personality keeps the internet from becoming too serious.' },
    ],
  },
  contact: { eyebrow: '07 / THE NEXT STEP', title: 'Have a digital problem worth solving?', body: 'Tell us what is happening. We will help you find the most useful shape for the solution.', cta: 'Chat on WhatsApp' },
  footer: { description: 'A technology partner for businesses that want to move with more clarity.', rights: '© 2026 Matrix Sync Tech. All rights reserved.' },
} satisfies SiteCopy;

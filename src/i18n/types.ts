export type Locale = 'id' | 'en';

export type SiteCopy = {
  meta: { title: string; description: string; ogTitle: string };
  nav: { about: string; services: string; work: string; pricing: string; faq: string; contact: string };
  hero: { eyebrow: string; title: string; description: string; primaryCta: string; secondaryCta: string; tags: string[] };
  problem: { eyebrow: string; title: string; body: string; points: string[] };
  solution: { eyebrow: string; title: string; body: string; cards: { title: string; body: string }[] };
  proof: { eyebrow: string; title: string; body: string; stat: string; statLabel: string };
  services: { eyebrow: string; title: string; items: { title: string; body: string; cta: string }[] };
  pricing: { eyebrow: string; title: string; body: string; tiers: { name: string; price: string; detail: string; featured?: boolean }[] };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  contact: { eyebrow: string; title: string; body: string; cta: string };
  footer: { description: string; rights: string };
};

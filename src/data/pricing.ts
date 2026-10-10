export type PricingService = {
  key: string;
  name: string;
  basePrice: number;
  isAddon: boolean;
};

export type WorkOption = {
  name: string;
  days: string;
  multiplier: number;
};

export type PricingOption = {
  name: string;
  multiplier: number;
  icon: string;
};

export const pricingServices: PricingService[] = [
  { key: 'ui_ux', name: 'UI/UX Design', basePrice: 200000, isAddon: false },
  { key: 'simple_landing', name: 'Simple Landing Page', basePrice: 150000, isAddon: false },
  { key: 'web_portfolio', name: 'Web Portfolio', basePrice: 150000, isAddon: false },
  { key: 'web_company', name: 'Web Company Profile', basePrice: 700000, isAddon: false },
  { key: 'mobile_app', name: 'Mobile App', basePrice: 1000000, isAddon: false },
  { key: 'web_e_commerce', name: 'Web E-commerce', basePrice: 3000000, isAddon: false },
  { key: 'canva', name: 'Poster/Logo/Banner/Other Design', basePrice: 70000, isAddon: true },
  { key: 'content_creation', name: 'Content Creation', basePrice: 70000, isAddon: true },
  { key: 'social_media', name: 'Handle Social Media', basePrice: 120000, isAddon: true },
  { key: 'web_to_app', name: 'Web to App Conversion', basePrice: 350000, isAddon: true },
  { key: 'booster_security', name: 'Booster + Security', basePrice: 250000, isAddon: true },
  { key: 'email_marketing', name: 'Setup Email Marketing', basePrice: 180000, isAddon: true },
  { key: 'hosting_and_domain', name: 'Hosting and Domain', basePrice: 20000, isAddon: true },
  { key: 'maintenance', name: 'Website Maintenance', basePrice: 500000, isAddon: true },
  { key: 'seo_setting', name: 'SEO Setting', basePrice: 200000, isAddon: true },
  { key: 'copywriting', name: 'Copywriting', basePrice: 100000, isAddon: true },
  { key: 'joki_tugas', name: 'Informatics Task Ghostwriting', basePrice: 20000, isAddon: true },
];

export const workOptions: WorkOption[] = [
  { name: 'Chill', days: '3–7 Days', multiplier: 1.0 },
  { name: 'Rush', days: '1–2 Days', multiplier: 1.3 },
  { name: 'ASAP', days: '< 24 Hours', multiplier: 1.6 },
];

export const pricingOptions: PricingOption[] = [
  { name: 'Standard (Start From)', multiplier: 1.0, icon: 'fa-solid fa-mug-hot' },
  { name: 'Premium (+20%)', multiplier: 1.2, icon: 'fa-solid fa-seedling' },
  { name: 'VIP (+50%)', multiplier: 1.5, icon: 'fa-solid fa-crown' },
];

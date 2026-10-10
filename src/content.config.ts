import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum(['b2b', 'ecommerce', 'game', 'apps', 'ui_ux', 'saas']),
    external_url: z.string(),
    case_study_summary: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author_name: z.string(),
    author_role: z.string(),
    stars: z.number(),
    quote: z.string(),
  }),
});


export const collections = { projects, testimonials,};
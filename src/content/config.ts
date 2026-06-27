import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Optional related calculator links shown in the article
    relatedCalculators: z.array(z.object({
      name: z.string(),
      href: z.string(),
    })).optional(),
    // Optional FAQ for the article (renders + FAQPage schema)
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };

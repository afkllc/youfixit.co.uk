import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
	// Load Markdown and MDX files in the `src/content/guides/` directory.
	loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Optional hero image for the guide (stored via Astro `image` schema helper)
			heroImage: image().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional()
		}),
});

export const collections = { guides };

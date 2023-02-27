import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		author: z.string().optional(),
		authorURL: z.string().optional(),
		description: z.string().optional(),
	})
})
export const collections = {
	posts: postCollection
};

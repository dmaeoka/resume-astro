import { CollectionEntry, getCollection } from 'astro:content';
import lunr from 'lunr';
import { URL } from 'node:url';
// title: z.string(),
// publishDate: z.date().optional(),
// author: z.string().optional(),
// authorURL: z.string().optional(),
// description: z.string().optional(),

type PostId = Pick<CollectionEntry<'posts'>, 'id'>['id'];

const postPromise = getCollection('posts').then(posts => ({
	posts,
	index: lunr(function () {
		this.ref('id');
		this.field('title');
		this.field('body');

		posts.forEach((video) => {
			this.add({
				title: video.data.title,
				body: video.body,
				id: video.id,
			});
		});
	}),
}));

export async function get({ request }) {
	const postIndex = await postPromise;
	const q = new URL(request.url).searchParams.get('q')?.toLowerCase();

	const posts = postIndex.index
		.search(q ?? '')
		.map((res) => {
			const id = res.ref as PostId;
			return postIndex.posts.find((post) => post.id === id);
		})
		.filter((a) => a)
		.sort(
			(a, b) => b!.data.publishDate.getTime() - a!.data.publishDate.getTime()
		);

	return new Response(JSON.stringify(posts.slice(0, 10)), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

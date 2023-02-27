import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

const icons = [
	'lnr-home',
	'lnr-apartment',
	'lnr-pencil',
	'lnr-magic-wand',
	'lnr-drop',
	'lnr-lighter',
	'lnr-poop',
	'lnr-sun',
	'lnr-moon',
	'lnr-cloud',
	'lnr-cloud-upload',
	'lnr-cloud-download',
	'lnr-cloud-sync',
	'lnr-cloud-check',
	'lnr-database',
	'lnr-lock',
	'lnr-cog',
	'lnr-trash',
	'lnr-dice',
	'lnr-heart',
	'lnr-star',
	'lnr-star-half',
	'lnr-star-empty',
	'lnr-flag',
	'lnr-envelope',
	'lnr-paperclip',
	'lnr-inbox',
	'lnr-eye',
	'lnr-printer',
	'lnr-file-empty',
	'lnr-file-add',
	'lnr-enter',
	'lnr-exit',
	'lnr-graduation-hat',
	'lnr-license',
	'lnr-music-note',
	'lnr-film-play',
	'lnr-camera-video',
	'lnr-camera',
	'lnr-picture',
	'lnr-book',
	'lnr-bookmark',
	'lnr-user',
	'lnr-users',
	'lnr-shirt',
	'lnr-store',
	'lnr-cart',
	'lnr-tag',
	'lnr-phone-handset',
	'lnr-phone',
	'lnr-pushpin',
	'lnr-map-marker',
	'lnr-map',
	'lnr-location',
	'lnr-calendar-full',
	'lnr-keyboard',
	'lnr-spell-check',
	'lnr-screen',
	'lnr-smartphone',
	'lnr-tablet',
	'lnr-laptop',
	'lnr-laptop-phone',
	'lnr-power-switch',
	'lnr-bubble',
	'lnr-heart-pulse',
	'lnr-construction',
	'lnr-pie-chart',
	'lnr-chart-bars',
	'lnr-gift',
	'lnr-diamond',
	'lnr-linearicons',
	'lnr-dinner',
	'lnr-coffee-cup',
	'lnr-leaf',
	'lnr-paw',
	'lnr-rocket',
	'lnr-briefcase',
	'lnr-bus',
	'lnr-car',
	'lnr-train',
	'lnr-bicycle',
	'lnr-wheelchair',
	'lnr-select',
	'lnr-earth',
	'lnr-smile',
	'lnr-sad',
	'lnr-neutral',
	'lnr-mustache',
	'lnr-alarm',
	'lnr-bullhorn',
	'lnr-volume-high',
	'lnr-volume-medium',
	'lnr-volume-low',
	'lnr-volume',
	'lnr-mic',
	'lnr-hourglass',
	'lnr-undo',
	'lnr-redo',
	'lnr-sync',
	'lnr-history',
	'lnr-clock',
	'lnr-download',
	'lnr-upload',
	'lnr-enter-down',
	'lnr-exit-up',
	'lnr-bug',
	'lnr-code',
	'lnr-link',
	'lnr-unlink',
	'lnr-thumbs-up',
	'lnr-thumbs-down',
	'lnr-magnifier',
	'lnr-cross',
	'lnr-menu',
	'lnr-list',
	'lnr-chevron-up',
	'lnr-chevron-down',
	'lnr-chevron-left',
	'lnr-chevron-right',
	'lnr-arrow-up',
	'lnr-arrow-down',
	'lnr-arrow-left',
	'lnr-arrow-right',
	'lnr-move',
	'lnr-warning',
	'lnr-question-circle',
	'lnr-menu-circle',
	'lnr-checkmark-circle',
	'lnr-cross-circle',
	'lnr-plus-circle',
	'lnr-circle-minus',
	'lnr-arrow-up-circle',
	'lnr-arrow-down-circle',
	'lnr-arrow-left-circle',
	'lnr-arrow-right-circle',
	'lnr-chevron-up-circle',
	'lnr-chevron-down-circle',
	'lnr-chevron-left-circle',
	'lnr-chevron-right-circle',
	'lnr-crop',
	'lnr-frame-expand',
	'lnr-frame-contract',
	'lnr-layers',
	'lnr-funnel',
	'lnr-text-format',
	'lnr-text-format-remove',
	'lnr-text-size',
	'lnr-bold',
	'lnr-italic',
	'lnr-underline',
	'lnr-strikethrough',
	'lnr-highlight',
	'lnr-text-align-left',
	'lnr-text-align-center',
	'lnr-text-align-right',
	'lnr-text-align-justify',
	'lnr-line-spacing',
	'lnr-indent-increase',
	'lnr-indent-decrease',
	'lnr-pilcrow',
	'lnr-direction-ltr',
	'lnr-direction-rtl',
	'lnr-page-break',
	'lnr-sort-alpha-asc',
	'lnr-sort-amount-asc',
	'lnr-hand',
	'lnr-pointer-up',
	'lnr-pointer-right',
	'lnr-pointer-down',
	'lnr-pointer-left'
]

export default defineConfig({
	experimental: {
		integrations: true
	},
	markdown: {
		drafts: true,
	},
	output: 'server',
	integrations: [
		node({
			mode: 'standalone',
		}),
		// partytown(),
		mdx({
			drafts: true
		}),
		tailwind(),
		compress({
			html: true,
			css: false
		}),
		NetlifyCMS({
			config: {
				// Use Netlify’s “Git Gateway” authentication and target our default branch
				backend: {
					name: 'git-gateway',
					branch: 'latest',
				},
				// Configure where our media assets are stored & served from
				media_folder: 'public/img',
				public_folder: '/img',
				// Configure the content collections
				collections: [
					{
						name: 'posts',
						label: 'Blog Posts',
						label_singular: 'Blog Post',
						folder: 'src/content/posts',
						create: true,
						delete: true,
						slug: "{{year}}-{{month}}-{{day}}_{{slug}}",
						fields: [
							{
								name: 'title',
								widget: 'string',
								label: 'Post Title'
							},
							{
								name: 'publishDate',
								widget: 'datetime',
								// format: 'DD MMM YYYY',
								// date_format: 'DD MMM YYYY',
								date_format: true,
								time_format: false,
								label: 'Publish Date',
								required: true
							},
							{
								name: 'author',
								widget: 'string',
								label: 'Author Name',
								required: false
							},
							{
								name: 'authorURL',
								widget: 'string',
								label: 'Author URL',
								required: false
							},
							{
								name: 'description',
								widget: 'string',
								label: 'Description',
								required: false
							},
							{
								label: 'Category',
								name: 'category',
								widget: 'relation',
								collection: 'blogcategories',
								searchFields: [
									'title'
								],
								valueField: 'title',
								displayFields: [
									'title'
								],
								required: false
							},
							{
								name: 'body',
								widget: 'markdown',
								label: 'Post Body'
							}
						],
					},
					{
						label: 'Categories',
						name: 'blogcategories',
						folder: 'src/content/categories',
						create: true,
						slug: '_{{slug}}',
						format: 'json',
						fields: [
							{
								label: 'Title',
								name: 'title',
								widget: 'string'
							},
							{
								label: 'Description',
								name: 'description',
								widget: 'string',
								required: false
							}
						]
					},
					{
						label: 'Setup',
						name: 'setup',
						editor: {
							preview: false
						},
						files: [
							{
								label: 'Site Info',
								name: 'info',
								format: 'json',
								file: 'src/content/_info.json',
								fields: [
									{
										label: 'Site Name',
										name: 'sitename',
										widget: 'string'
									},
									{
										label: 'Site Description',
										name: 'sitedescription',
										widget: 'string'
									},
									{
										label: 'Site Icon',
										name: 'siteicon',
										widget: 'image'
									},
									{
										label: 'Site Background',
										name: 'background',
										widget: 'image'
									},
									{
										label: 'Menu Links',
										name: 'menu',
										widget: 'list',
										fields: [
											{
												label: 'Name',
												name: 'name',
												widget: 'string'
											},
											{
												label: 'Icons',
												name: 'icons',
												widget: 'select',
												options: icons
											},
											{
												label: 'Link',
												name: 'link',
												widget: 'string'
											}
										]
									}
								]
							},
							{
								label: 'Connect',
								name: 'connect',
								format: 'json',
								file: 'src/content/_connect.json',
								fields: [
									{
										label: 'Links',
										name: 'connectlinks',
										widget: 'list',
										fields: [
											{
												label: 'Link Name',
												name: 'name',
												widget: 'string'
											},
											{
												label: 'URL',
												name: 'url',
												widget: 'string'
											}
										]
									}
								]
							}
						]
					},
					{
						label: 'Pages',
						name: 'pages',
						files: [
							{
								label: 'About Page',
								name: 'about',
								format: 'json',
								file: 'src/content/_about.json',
								identifier_field: 'title',
								editor: {
									preview: false
								},
								fields: [
									{
										label: 'Title',
										name: 'title',
										widget: 'string'
									},
									{
										label: 'Subtitle',
										name: 'subtitle',
										widget: 'string'
									},
									{
										label: 'Intro',
										name: 'intro',
										widget: 'markdown'
									},
									{
										label: 'Image',
										name: 'thumbnail',
										widget: 'image'
									},
									{
										label: 'CV',
										name: 'cv',
										widget: 'file'
									},
									{
										label: 'Skills',
										name: 'skills',
										widget: 'list',
										fields: [
											{
												label: 'Name',
												name: 'name',
												widget: 'string'
											},
											{
												label: 'Percentage',
												name: 'percentage',
												widget: 'number',
												valueType: 'int',
												min: 1,
												max: 100,
												step: 1
											}
										]
									}
								]
							},
							{
								label: 'Services',
								name: 'services',
								format: 'json',
								file: 'src/content/_services.json',
								identifier_field: 'title',
								editor: {
									preview: false
								},
								fields: [
									{
										label: 'Title',
										name: 'title',
										widget: 'string'
									},
									{
										label: 'Description',
										name: 'description',
										widget: 'text'
									},
									{
										label: 'Service',
										name: 'service',
										widget: 'list',
										fields: [
											{
												label: 'Title',
												name: 'title',
												widget: 'string'
											},
											{
												label: 'Description',
												name: 'description',
												widget: 'text'
											},
											{
												label: 'Icons',
												name: 'icons',
												widget: 'select',
												options: icons
											}
										]
									}
								]
							},
							{
								label: 'Portfolio',
								name: 'portfolio',
								format: 'json',
								file: 'src/content/_portfolio.json',
								identifier_field: 'title',
								editor: {
									preview: false
								},
								fields: [
									{
										label: 'Title',
										name: 'title',
										widget: 'string'
									},
									{
										label: 'Description',
										name: 'description',
										widget: 'text'
									},
									{
										label: 'Projects',
										name: 'projects',
										widget: 'list',
										fields: [
											{
												label: 'Title',
												name: 'title',
												widget: 'string'
											},
											{
												label: 'Featured Image',
												name: 'thumbnail',
												widget: 'image'
											},
											{
												label: 'Description',
												name: 'description',
												widget: 'text'
											},
											{
												label: 'Job',
												name: 'job',
												widget: 'string'
											}
										]
									}
								]
							},
							{
								label: 'Reviews',
								name: 'reviews',
								format: 'json',
								file: 'src/content/_reviews.json',
								identifier_field: 'title',
								editor: {
									preview: false
								},
								fields: [
									{
										label: 'Title',
										name: 'title',
										widget: 'string'
									},
									{
										label: 'Featured Image',
										name: 'thumbnail',
										widget: 'image'
									},
									{
										label: 'Description',
										name: 'description',
										widget: 'text'
									},
									{
										label: 'Colleague',
										name: 'colleague',
										widget: 'list',
										fields: [
											{
												label: 'Author',
												name: 'author',
												widget: 'string'
											},
											{
												label: 'Avatar',
												name: 'avatar',
												widget: 'image'
											},
											{
												label: 'Position',
												name: 'position',
												widget: 'text'
											},
											{
												label: 'Review',
												name: 'review',
												widget: 'text'
											}
										]
									}
								]
							},
							{
								label: 'Contact',
								name: 'contact',
								format: 'json',
								file: 'src/content/_contact.json',
								identifier_field: 'title',
								editor: {
									preview: false
								},
								fields: [
									{
										label: 'Title',
										name: 'title',
										widget: 'string'
									},
									{
										label: 'Description',
										name: 'description',
										widget: 'text'
									},
									{
										label: 'Location',
										name: 'location',
										widget: 'map'
									}
								]
							}
						]
					}
				],
			},
			previewStyles: ['/src/styles/blog.css'],
		}),
	]
});

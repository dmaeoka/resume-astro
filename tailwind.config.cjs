/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			gray: {
				100: '#F0F1F1',
				200: '#edf2f7',
				300: '#DFDFDF',
				400: '#cbd5e0',
				500: '#a0aec0',
				600: '#718096',
				700: '#4a5568',
				800: '#2D374C',
				900: '#060039',
			},
			red: {
				'50': '#fefafb',
				'100': '#fefafb',
				'200': '#fbdfe4',
				'300': '#f6bbc5',
				'400': '#f08a9b',
				'500': '#e53955',
				'600': '#e32646',
				'700': '#d41c3a',
				'800': '#c61a37',
				'900': '#b01730'
			},
			orange: {
				'50': '#fffdfa',
				'100': '#fffcf5',
				'200': '#ffecc7',
				'300': '#ffdd99',
				'400': '#ffc95c',
				'500': '#ffaf0f',
				'600': '#eb9c00',
				'700': '#cc8800',
				'800': '#ad7400',
				'900': '#7a5200'
			},
			yellow: {
				'50': '#fffdfa',
				'100': '#fffcf5',
				'200': '#ffecc7',
				'300': '#ffdd99',
				'400': '#ffc95c',
				'500': '#ffaf0f',
				'600': '#eb9c00',
				'700': '#cc8800',
				'800': '#ad7400',
				'900': '#7a5200'
			},
			green: {
				'50': '#fbfefd',
				'100': '#f8fcfb',
				'200': '#d3eee8',
				'300': '#abded4',
				'400': '#78c9b9',
				'500': '#44ac97',
				'600': '#3e9d8a',
				'700': '#378b7a',
				'800': '#317c6d',
				'900': '#276357'
			},
			blue: {
				'50': '#fbfdfe',
				'100': '#fbfdfe',
				'200': '#d7e6ef',
				'300': '#b2cfe1',
				'400': '#7fafcc',
				'500': '#4484ac',
				'600': '#407ba1',
				'700': '#3b7396',
				'800': '#376b8b',
				'900': '#305d78'
			},
		},
		container: {
			center: true
		},
		extend: {
			screens: {
				xs: { max: '639px' },
				sm: '640px',
				md: '768px',
				lg: '1025px',
				xl: '1280px',
				xxl: '1536px',
				ptablet: {
					raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
				},
				ltablet: {
					raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
				},
			},
			colors: {
				primary: colors.indigo,
				info: colors.sky,
				success: colors.teal,
				warning: colors.amber,
				danger: colors.rose,
				muted: {
					...colors.slate,
					1000: '#0a101f',
				},
				slate: {
					1000: '#0a101f',
				},
				gray: {
					1000: '#080c14',
				},
				zinc: {
					1000: '#101012',
				},
				neutral: {
					1000: '#080808',
				},
				stone: {
					1000: '#0f0d0c',
				},
			},
			fontFamily: {
				display: ['Titillium Web', 'sans-serif'],
				body: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require('@vidstack/player/tailwind.cjs'),
		//Additional utilities
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.slimscroll::-webkit-scrollbar': {
					width: '6px',
				},
				'.slimscroll::-webkit-scrollbar-thumb': {
					borderRadius: '.75rem',
					background: 'rgba(0, 0, 0, 0.1)',
				},
				'.slimscroll-opaque::-webkit-scrollbar-thumb': {
					background: 'rgba(0, 0, 0, 0) !important',
				},
				'.mask': {
					'mask-size': 'contain',
					'mask-repeat': 'no-repeat',
					'mask-position': 'center',
				},
				'.mask-hex': {
					'mask-image': 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjQuNzg2IDE4MS40Yy05LjE5NiAwLTIwLjA2My02LjY4Ny0yNS4wNzktMTQuMjFMMy43NjIgMTA1LjMzYy01LjAxNi04LjM2LTUuMDE2LTIwLjkgMC0yOS4yNTlsMzUuOTQ1LTYxLjg2QzQ0LjcyMyA1Ljg1MSA1NS41OSAwIDY0Ljc4NiAwaDcxLjA1NWM5LjE5NiAwIDIwLjA2MyA2LjY4OCAyNS4wNzkgMTQuMjExbDM1Ljk0NSA2MS44NmM0LjE4IDguMzYgNC4xOCAyMC44OTkgMCAyOS4yNThsLTM1Ljk0NSA2MS44NmMtNC4xOCA4LjM2LTE1Ljg4MyAxNC4yMTEtMjUuMDc5IDE0LjIxMUg2NC43ODZ6Ii8+PC9zdmc+\')',
				},
				'.mask-hexed': {
					'mask-image': 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBsLTYxLjg2LTM1Ljk0NUM2LjE1MSAxNTcuNDQuMyAxNDUuNzM3LjMgMTM2LjU0VjY1LjQ4NnoiLz48L3N2Zz4=\')',
				},
				'.mask-deca': {
					'mask-image': 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOTYgMGw1OC43NzkgMTkuMDk4IDM2LjMyNyA1MHY2MS44MDRsLTM2LjMyNyA1MEw5NiAyMDBsLTU4Ljc3OS0xOS4wOTgtMzYuMzI3LTUwVjY5LjA5OGwzNi4zMjctNTB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=\')',
				},
				'.mask-blob': {
					'mask-image': 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAweiIvPjwvc3ZnPg==\')',
				},
				'.mask-diamond': {
					'mask-image': 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBsMTAwIDEwMC0xMDAgMTAwTDAgMTAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+\')',
				},
			})
		}),
		//Expose Tailwind colors
		function ({ addBase, theme }) {
			function extractColorVars(colorObj, colorGroup = '') {
				return Object.keys(colorObj).reduce((vars, colorKey) => {
					const value = colorObj[colorKey];

					const newVars =
						typeof value === 'string'
							? { [`--color${colorGroup}-${colorKey}`]: value }
							: extractColorVars(value, `-${colorKey}`);

					return { ...vars, ...newVars };
				}, {});
			}

			addBase({
				':root': extractColorVars(theme('colors')),
			});
		},
	],
};

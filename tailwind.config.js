/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
	important: true,
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	safelist: [
		{
			pattern: /(from|to)-gradient-(brand|blue|green|yellow|orange|red|purple)/,
			variants: ['dark', 'hocus', 'group-hocus/link', '[[aria-current="page"]_&]']
		},
		{
			pattern: /decoration-gradient-(brand|blue|green|yellow|orange|red|purple)/,
			variants: ['hocus']
		}
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'serif'],
				manrope: ['Manrope', 'sans-serif']
			},
			colors: {
				/** --color-tertiary-txt: var(--color-inverse) 0.65; **/
				inverse: 'rgb(var(--color-inverse) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
				'nav-background': 'rgb(var(--color-nav-background) / <alpha-value>)',
				'primary-txt': 'rgb(var(--color-primary-txt) / <alpha-value>)',
				'secondary-txt': 'rgb(var(--color-secondary-txt))',
				'tertiary-txt': 'rgba(var(--color-tertiary-txt))',
				divider: 'rgba(var(--color-divider))',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				'accent-dark': 'rgb(var(--color-accent-dark) / <alpha-value>)',
				'on-accent': 'rgba(var(--color-on-accent) / 0.925)',
				'shadow-brand': 'rgb(var(--color-shadow-brand) / <alpha-value>)',
				'shadow-blue': 'rgb(var(--color-shadow-blue) / <alpha-value>)',
				'shadow-green': 'rgb(var(--color-shadow-green) / <alpha-value>)',
				'shadow-yellow': 'rgb(var(--color-shadow-yellow) / <alpha-value>)',
				'shadow-orange': 'rgb(var(--color-shadow-red) / <alpha-value>)',
				'shadow-red': 'rgb(var(--color-shadow-red) / <alpha-value>)',
				'shadow-purple': 'rgb(var(--color-shadow-purple) / <alpha-value>)',
				'gradient-brand': 'rgb(var(--color-gradient-brand) / <alpha-value>)',
				'gradient-blue': 'rgb(var(--color-gradient-blue) / <alpha-value>)',
				'gradient-green': 'rgb(var(--color-gradient-green) / <alpha-value>)',
				'gradient-yellow': 'rgb(var(--color-gradient-yellow) / <alpha-value>)',
				'gradient-orange': 'rgb(var(--color-gradient-orange) / <alpha-value>)',
				'gradient-red': 'rgb(var(--color-gradient-red) / <alpha-value>)',
				'gradient-purple': 'rgb(var(--color-gradient-purple) / <alpha-value>)',
				'gradient-pink': 'rgb(var(--color-gradient-pink) / <alpha-value>)'
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		})
	]
};

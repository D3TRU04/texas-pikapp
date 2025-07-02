import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'burnt-orange': {
					500: '#BF5700',
				},
				'charcoal': {
					900: '#2E2E2E',
				},
				'cream': {
					50: '#FAF9F6',
				},
				'gold': {
					500: '#FFD700',
				},
			},
		},
	},
	plugins: [],
};

export default config;

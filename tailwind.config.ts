import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Times New Roman', 'Times', 'serif'],
			},
			colors: {
				'burnt-orange': {
					500: '#BF5700',
				},
				'charcoal': {
					900: '#2E2E2E',
				},
				'cream': {
					50: '#FAF9F6',
					100: '#F5F2ED',
					200: '#EDE7DD',
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

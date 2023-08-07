/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			// backgroundImage: {
			// 	dents: "url('/public/dent.jpg')",
			// },
			spacing: {
				// 13: '3.25rem',
				// 15: '3.75rem',
				128: '32rem',
				129:'37rem',
				59:'20rem',
				66:'80%',
				96:'22rem',
				95:'20rem',
				13:'45px',
				42:'25%',
				93:'3em',
				92:'5em',
				0:'0',
				

				// 144: '36rem',
			},
		},
		// spacing: {
		// 	1: '8px',
		// 	2: '12px',
		// 	3: '16px',
		// 	4: '24px',
		// 	5: '32px',
		// 	6: '48px',
		// },
		colors: {
			// transparent: 'transparent',
			// current: 'currentColor',
			'black':'#000000',
			'white': '#ffffff',
			'red': '#B22222'
			// 'purple': '#3f3cbb',
			// 'midnight': '#121063',
			// 'metal': '#565584',
			// 'tahiti': '#3ab7bf',
			// 'silver': '#ecebff',
			// 'bubble-gum': '#ff77e9',
			// 'bermuda': '#78dcca',
		  },
	},

	plugins: [],
}

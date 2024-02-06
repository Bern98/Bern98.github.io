/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
		fontFamily: {
			custom: "custom",
			deadCRT: "deadCRT",
			kongtext: "kongtext"
		},
		colors: {
			'normal-gray': '#c0c0c0',
			'highlight-gray': '#e6e6e6',
		},
		lineHeight: {
			'extra-loose': '2.5'
		}
	},
  },
  plugins: [],
}


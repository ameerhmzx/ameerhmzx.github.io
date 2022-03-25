const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'heading': ['Gugi', 'cursive'],
                'sans': ['Ubuntu', ...defaultTheme.fontFamily.sans]
            },
            animation: {
                'stroke-fill': 'strokeLogo 3s cubic-bezier(0.65, 0, 0.35, 1) infinite',
                'stroke-fill-dark': 'strokeLogoDark 3s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            },
            keyframes: {
                strokeLogo: {
                    '0%': {
                        strokeDashoffset: 500,
                        strokeDasharray: 500,
                        fill: 'transparent',
                        stroke: 'black'
                    },
                    '50%': {
                        strokeDashoffset: 0,
                        strokeDasharray: 500,
                        fill: 'transparent',
                        stroke: 'black',
                    },
                    '100%': {
                        strokeDashoffset: -500,
                        strokeDasharray: 500,
                        fill: 'transparent',
                        stroke: 'black',
                    },
                },
                strokeLogoDark: {
                    '0%': {
                        strokeDashoffset: 500,
                        strokeDasharray: 500,
                        fill: 'transparent',
                        stroke: 'white'
                    },
                    '50%': {
                        strokeDashoffset: 0,
                        strokeDasharray: 500,
                        fill: 'transparent',
                        stroke: 'white',
                    },
                    '100%': {
                        strokeDashoffset: -500,
                        strokeDasharray: 500,
                        fill: 'transparent',
                        stroke: 'white',
                    },
                }
            }
        },
    },
    plugins: [],
}

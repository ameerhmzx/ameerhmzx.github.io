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
                'stroke-walk': 'strokeWalk 30s linear infinite'
            },
            keyframes: {
                strokeLogo: {
                    '0%': {
                        strokeDashoffset: 500,
                        strokeDasharray: 500,
                        fill: 'transparent'
                    },
                    '50%': {
                        strokeDashoffset: 0,
                        strokeDasharray: 500,
                        fill: 'transparent'
                    },
                    '100%': {
                        strokeDashoffset: -500,
                        strokeDasharray: 500,
                        fill: 'transparent'
                    },
                },
                strokeWalk: {
                    '0%': {
                        strokeDashoffset: 400,
                        strokeDasharray: 400,
                        strokeWidth: 2
                    },
                    '50%': {
                        strokeDashoffset: 0,
                        strokeDasharray: 400,
                        strokeWidth: 2
                    },
                    '100%': {
                        strokeDashoffset: -400,
                        strokeDasharray: 400,
                        strokeWidth: 2
                    },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

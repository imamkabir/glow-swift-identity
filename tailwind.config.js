import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                orbitron: ['Orbitron', 'monospace'],
                poppins: ['Poppins', 'sans-serif'],
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'neon-cyan': 'hsl(194, 100%, 50%)',
                'neon-magenta': 'hsl(300, 100%, 50%)',
                'neon-purple': 'hsl(270, 100%, 50%)',
                'neon-green': 'hsl(120, 100%, 50%)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'slide-in-up': 'slide-in-up 0.8s ease-out forwards',
                'fade-in': 'fade-in 1s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px hsl(194, 100%, 50%, 0.5), 0 0 40px hsl(194, 100%, 50%, 0.3)' },
                    '50%': { boxShadow: '0 0 20px hsl(194, 100%, 50%, 0.5), 0 0 40px hsl(194, 100%, 50%, 0.3), 0 0 60px hsl(194, 100%, 50%, 0.6)' },
                },
                'slide-in-up': {
                    from: { opacity: '0', transform: 'translateY(100px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
            },
        },
    },

    plugins: [forms],
};
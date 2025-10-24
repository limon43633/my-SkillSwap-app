/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          accent: '#10B981',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.5s ease-out',
          'slide-down': 'slideDown 0.5s ease-out',
          'bounce-slow': 'bounce 2s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: [
        {
          light: {
            primary: '#3B82F6',
            secondary: '#8B5CF6',
            accent: '#10B981',
            neutral: '#3D4451',
            'base-100': '#FFFFFF',
            info: '#3ABFF8',
            success: '#36D399',
            warning: '#FBBD23',
            error: '#F87272',
          },
        },
        'dark',
        'cupcake',
      ],
      darkTheme: 'dark',
      base: true,
      styled: true,
      utils: true,
      logs: false,
    },
  };
  
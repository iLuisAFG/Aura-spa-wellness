/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F5EFEB',
          300: '#EFE7E0',
          400: '#E4D8CE',
        },
        sand: {
          50: '#F9F7F4',
          100: '#F0EBE3',
          200: '#E3D9CC',
          300: '#D2C4B2',
          400: '#B8A590',
          500: '#9C8872',
          700: '#695744',
        },
        sage: {
          50: '#F4F6F2',
          100: '#E6ECE2',
          200: '#CDDAC6',
          300: '#AFC3A5',
          600: '#617558',
          700: '#4D6045',
          800: '#3A4934',
          900: '#232D20',
        },
        roseDust: {
          50: '#FDF7F7',
          100: '#F8EEED',
          200: '#EED7D5',
          300: '#DFB8B4',
          400: '#CD9892',
          500: '#B97C75',
          600: '#9E6059',
          700: '#7F4943',
          800: '#5F3430',
          900: '#3D201E',
        },
        charcoal: {
          900: '#1A1817',
          800: '#2C2927',
          700: '#423E3A',
          600: '#5F5A54',
          500: '#7F7871',
          400: '#A49C94',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'arch': '140px 140px 0 0',
        'arch-lg': '200px 200px 0 0',
        'arch-pill': '9999px 9999px 0 0',
      },
      transitionTimingFunction: {
        'spring-smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring-bounce': 'cubic-bezier(0.34, 1.3, 0.64, 1)',
        'emil-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}

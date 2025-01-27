/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
const withPWA = require('next-pwa')({
  dest: 'public', // Папка, де зберігається service worker
  disable: process.env.NODE_ENV === 'development', // Вимкнути PWA в режимі розробки
});

module.exports = withPWA({
  reactStrictMode: true,
});

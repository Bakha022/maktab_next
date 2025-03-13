import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Inter18pt-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Inter18pt-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Inter24pt-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Inter24pt-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-inter', // Custom CSS variable
  display: 'swap', // Performance uchun tavsiya qilinadi
});
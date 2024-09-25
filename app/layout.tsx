import "./globals.css";
// app/layout.tsx// app/layout.tsx
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Head from "next/head";
import CombinedProviders from "./context/CombinedProviders";

// Import Tajwal from next/font/google
import { Tajawal } from 'next/font/google';

const tajwal = Tajawal({
  subsets: ['arabic', 'latin'], // Ensure both Arabic and Latin subsets are included
  variable: '--font-tajwal',    // Custom CSS variable to reference the font
  weight: ['300', '400', '500', '700', '900'], // Include different font weights as needed
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={tajwal.variable}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="مجموعة محمد offers kids games tickets, digital marketing, website design, events management, and tools renting services." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="مجموعة محمد - Leading Trade and Investment Company" />
        <meta property="og:description" content="مجموعة محمد offers a wide range of services including kids games tickets, digital marketing, website design, events management, and tools renting." />
        <meta property="og:image" content="https://yourwebsite.com/default-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <title>مجموعة محمد - Leading Trade and Investment Company</title>
      </Head>
      <body className="flex  flex-col min-h-screen">
      <CombinedProviders>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        </CombinedProviders>
      </body>
    </html>
  );
};



export default RootLayout;


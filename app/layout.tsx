import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// app/layout.tsx// app/layout.tsx
import SEO from '../next-seo.config'; // Adjust the path based on your file structure
import React, { useContext } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'; // Import global styles if you have them
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { BlogsCategoryProvider } from "./context/CategoryContext";


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
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
      <body className="flex flex-col min-h-screen">
      <BlogsCategoryProvider>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        </BlogsCategoryProvider>
      </body>
    </html>
  );
};



export default RootLayout;


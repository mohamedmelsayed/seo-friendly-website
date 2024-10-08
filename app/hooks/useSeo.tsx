// app/hooks/useSeo.tsx
import Head from 'next/head';
import React from 'react';
interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useSeo = ({ title, description, image, url }: SeoProps) => {
  return (
    <Head>
      <title>{title ? `${title} - Mufrgy Group` : "Mufrgy Group - Leading Trade and Investment Company"}</title>
      <meta name="description" content={description || "Mufrgy Group offers kids games tickets, digital marketing, website design, events management, and tools renting services."} />
      <meta property="og:title" content={title || "Mufrgy Group - Leading Trade and Investment Company"} />
      <meta property="og:description" content={description || "Mufrgy Group offers a wide range of services including kids games tickets, digital marketing, website design, events management, and tools renting."} />
      <meta property="og:image" content={image || "https://yourwebsite.com/default-image.jpg"} />
      <meta property="og:url" content={url || "https://yourwebsite.com"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

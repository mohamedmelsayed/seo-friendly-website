// next-seo.config.js
const SEO = {
    title: "Mufrgy Group - Leading Services and Solutions", // Default title
    description: "Mufrgy Group offers kids games tickets, digital marketing, website design, events management, and tools renting services.", // Default description
    openGraph: {
      type: 'website',
      locale: 'en_US', // Adjust if needed
      url: 'https://yourwebsite.com', // Your default URL, replace with your actual domain
      site_name: 'Mufrgy Group', // Your company/site name
      images: [
        {
          url: 'https://yourwebsite.com/default-image.jpg', // Replace with your logo or a default image
          width: 1200,
          height: 630,
          alt: 'Mufrgy Group - Default Image',
        },
      ],
    },
    twitter: {
      handle: '@yourTwitterHandle', // Replace with your Twitter handle or leave blank
      site: '@yourTwitterHandle',
      cardType: 'summary_large_image', // Default card type
    },
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'author',
        content: 'Mufrgy Group', // Replace with your author's name
      },
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: 'https://yourwebsite.com/favicon.ico', // Replace with your favicon URL
      },
      {
        rel: 'apple-touch-icon',
        href: 'https://yourwebsite.com/apple-touch-icon.png', // Replace with your apple-touch-icon URL
        sizes: '180x180',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest', // Path to your site manifest file
      },
    ],
  };
  
  export default SEO;
  
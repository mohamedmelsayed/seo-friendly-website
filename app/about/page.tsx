// app/pages/about.tsx
import Head from 'next/head';
import Layout from '../layout';
import { useSeo } from '../hooks/useSeo';

const AboutPage = () => {
  return (
    <Layout>
      {useSeo({
        title: "Our Services",
        description: "Explore our range of services including kids games tickets, digital marketing, website design, events management, and tools renting.",
        image: "https://yourwebsite.com/services-image.jpg",
        url: "https://yourwebsite.com/services"
      })}
      <h1 className="text-4xl font-bold text-primary">Welcome to مجموعة محمد</h1>
      <p className="mt-4">Your one-stop solution for kids' games tickets, digital marketing, website design, events management, and tools renting.</p>
    </Layout>
  );
};

export default AboutPage;

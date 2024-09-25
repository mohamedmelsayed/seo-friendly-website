// app/pages/about.tsx
import { useSeo } from '../hooks/useSeo';
import Layout from '../layout';

const AboutPage = () => {
  return (
    <Layout>
      {useSeo({
        title: "Our Services",
        description: "Explore our range of services including kids games tickets, digital marketing, website design, events management, and tools renting.",
        image: "https://yourwebsite.com/services-image.jpg",
        url: "https://yourwebsite.com/services"
      })}
      <h1 className="text-3xl font-bold text-primary">About Us</h1>
      <p className="mt-4">We are a leading company in providing services for kids games, digital marketing, website design, events management, and tools renting.</p>
    </Layout>
  );
};

export default AboutPage;

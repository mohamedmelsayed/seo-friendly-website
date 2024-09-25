// app/pages/about.tsx
import Layout from './layout';
import { useSeo } from './hooks/useSeo';
import AboutUs from './components/AboutUs';
import AboutFounder from './components/AboutFounder';
import Partners from './components/Partners';
import Services from './components/Services';

const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <AboutFounder />
      <Partners />
      <Services />
    </div>
  );
};

export default AboutPage;

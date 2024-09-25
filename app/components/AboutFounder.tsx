// app/components/AboutFounder.tsx
import React from 'react';

const AboutFounder = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">About the Founder</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="https://sample2.prof-dev.com/assets/img/founder.jpeg" // Replace with your founder's image path
          alt="Founder"
          className="w-48 h-48 rounded-full shadow-md object-cover"
        />
        <p className="text-gray-700 max-w-xl text-center md:text-left leading-relaxed">
          Our founder, John Doe, has over 20 years of experience in the industry and has been a visionary leader,
          driving the company's success. With a passion for excellence and a deep understanding of the market,
          John has built a company that stands for quality and innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutFounder;

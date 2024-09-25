// app/components/Services.tsx
import React from 'react';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Building cutting-edge websites and applications.' },
    { title: 'Digital Marketing', description: 'Enhancing your online presence and reach.' },
    { title: 'Events Management', description: 'Organizing memorable and impactful events.' },
    // Add more services
  ];

  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

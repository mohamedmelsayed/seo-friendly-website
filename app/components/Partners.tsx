// app/components/Partners.tsx
import React from 'react';

const Partners = () => {
  const partnerLogos = [
    '/imgs/muscat_bank.png',
    '/imgs/oman_towers.png',
    '/imgs/enrgy_oman.jpg',
    '/imgs/muscat_bank.png',
    '/imgs/oman_towers.png',
    '/imgs/enrgy_oman.jpg',
    '/imgs/muscat_bank.png',
    '/imgs/oman_towers.png',
    '/imgs/enrgy_oman.jpg',
    // Add more partner image paths
  ];

  return (
    <div className="bg-gray-50 py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;

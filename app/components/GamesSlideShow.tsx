// app/components/GamesSlideShow.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Autoplay} from 'swiper/modules';

const GamesSlideShow = () => {
  const games = [
    { name: 'Game 1', image: '/path/to/game1.jpg' },
    { name: 'Game 2', image: '/path/to/game2.jpg' },
    { name: 'Game 3', image: '/path/to/game3.jpg' },
    { name: 'Game 4', image: '/path/to/game4.jpg' },
    // Add more games
  ];

  return (
    <div className="bg-gray-50 py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Games Slide Show</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {games.map((game, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={game.image}
                alt={game.name}
                className="object-cover w-full h-64"
              />
              <h3 className="text-center mt-2 text-xl font-bold text-primary">{game.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GamesSlideShow;

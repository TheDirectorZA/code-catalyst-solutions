import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2>Client Testimonials</h2>
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <blockquote>
              "CodeCatalyst Solutions transformed our business with their innovative software solutions."
              <cite>- Sarah J.</cite>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote>
              "Their team was professional, efficient, and delivered on time."
              <cite>- Mark W.</cite>
            </blockquote>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

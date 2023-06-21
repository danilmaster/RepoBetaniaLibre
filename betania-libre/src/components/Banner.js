import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImage1 from '../images/banner1.jpg';
import bannerImage2 from '../images/banner2.jpg';
import bannerImage3 from '../images/banner3.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <Carousel autoPlay interval={10000} infiniteLoop showThumbs={false}>
        <div>
          <img src={bannerImage1} alt="Banner 1" />
        </div>
        <div>
          <img src={bannerImage2} alt="Banner 2" />
        </div>
        <div>
          <img src={bannerImage3} alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;


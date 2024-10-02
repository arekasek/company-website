import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TwoColumn = ({ heading, text, images, direction }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[90vh] overflow-y-hidden">
      <Slider {...settings} className="w-full overflow-y-hidden">
        {images.map((item, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            <div
              className="absolute top-0 left-0 w-[100vw] h-full bg-cover bg-center z-0 filter brightness-95 contrast-75 saturate-130"
              style={{ backgroundImage: `url(${item.image.url})` }}
              alt={item.image.alt}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TwoColumn;

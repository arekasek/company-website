import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const TwoColumn = ({ heading, text, images, direction }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[90vh] -z-0">
      <Carousel
        controls={false}
        indicators={true}
        interval={5000}
        className="w-full"
        slides={direction === "left" ? 2 : 1}
      >
        {images.map((item, index) => (
          <Carousel.Item key={index} className="relative w-full h-[90vh]">
            <div
              className="absolute top-0 left-0 w-[100vw] h-full bg-cover bg-center z-0 filter brightness-95 contrast-75 saturate-130"
              style={{ backgroundImage: `url(${item.image.url})` }}
              alt={item.image.alt}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TwoColumn;

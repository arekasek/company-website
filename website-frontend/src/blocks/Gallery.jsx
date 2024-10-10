import React from "react";

const Gallery = ({
  heading,
  text,
  image,
  images,
  direction = "left",
  color,
}) => {
  return (
    <div
      className="h-fit w-full flex flex-col items-center justify-center"
      style={{
        backgroundColor: color,
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.1) 100%)`, // Vignette effect
      }}
    >
      <div className="flex flex-row items-center justify-center text-white Absans-Regular font-normal text-xl w-[90%] p-8 gap-4">
        {direction === "left" && (
          <div
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[50vh] w-[25vw] flex justify-center items-center text-justify "
          >
            <h1>{heading}</h1>
          </div>
        )}

        <div className="h-[50vh] w-[50vw] grid gap-4 grid-cols-2 ">
          {images.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image.url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="flex justify-center items-center text-justify"
            ></div>
          ))}
          <div className="bg-slate-500 flex items-center justify-center">
            Zobacz wiecej
          </div>
        </div>

        {direction === "right" && (
          <div
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[50vh] w-[25vw] flex justify-center items-center text-justify "
          >
            <h1>{heading}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

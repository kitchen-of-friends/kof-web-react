import React from "react";
import { Carousel } from "antd";

const KitchenImgCarousel = ({ imgs }) => {
  return (
    <div className="w-full flex">
      <div className="w-full md:w-1/2">
        <Carousel autoplay className="md:p-2">
          {imgs.map((item) => {
            return (
              <div className="w-full" key={`carousel-img-${item}`}>
                <img src={item} alt="Kitchen" className="w-full" />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="hidden md:w-1/2 md:p-2 md:grid md:grid-rows-2 md:grid-cols-2">
        {[1, 2, 3, 4].map((index) => {
          return (
            <div className="px-1 rounded-sm" key={`side-img-${index}`}>
              <img
                src={imgs[imgs.length - index]}
                alt="Kitchen"
                className="w-full rounded-sm"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KitchenImgCarousel;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImagesCarousel } from "../Data/CarouselData.js";

const HomeCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // console.log(ImagesCarousel);
  return (
    <div style={{zIndex:'-1'}}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={800}
        transitionDuration={1000}
        arrows={true}
        showDots={true}
        swipeable={false}
        draggable={false}
      >
        {ImagesCarousel.map((el) => {
          return (
            <div
              style={{
                marginTop: "5rem",
                display: "flex",
                justifyContent: "center",
              }}
              key={el}
            >
              <img className="CarouselHomeImage" src={el.image} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

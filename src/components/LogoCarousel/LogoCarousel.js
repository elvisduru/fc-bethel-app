import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor1.jpg",
  },
  {
    id: 2,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor2.webp",
  },
  {
    id: 3,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor3.png",
  },
  {
    id: 4,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor4.png",
  },
  {
    id: 5,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor5.jpg",
  },
  {
    id: 6,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor6.jpg",
  },
  {
    id: 7,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor7.png",
  },
  {
    id: 8,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor8.png",
  },
  {
    id: 9,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor9.png",
  },
  {
    id: 10,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor10.jpg",
  },
  {
    id: 11,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor11.png",
  },
  {
    id: 12,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor12.jpg",
  },
  {
    id: 13,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor13.png",
  },
  {
    id: 14,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor14.webp",
  },
  {
    id: 15,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor15.jpg",
  },
  {
    id: 16,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor16.png",
  },
  {
    id: 17,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor17.jpeg",
  },
  {
    id: 18,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor18.jpg",
  },
  {
    id: 19,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor19.jpeg",
  },
  {
    id: 20,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor20.png",
  },
  {
    id: 21,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor21.png",
  },
  {
    id: 22,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor22.jpg",
  },
  {
    id: 23,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor23.png",
  },
  {
    id: 24,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor24.jpg",
  },
  {
    id: 25,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor25.png",
  },
  {
    id: 26,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor26.png",
  },
  {
    id: 27,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor27.png",
  },
  {
    id: 28,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor28.png",
  },
  {
    id: 29,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor29.png",
  },
  {
    id: 30,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor30.png",
  },
  {
    id: 31,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor31.png",
  },
  {
    id: 32,
    src: "https://fc-bethel-api.herokuapp.com/uploads/sponsors/sponsor32.png",
  },
];

const settings = {
  className: "image-slides",
  centerPadding: "60px",
  rows: 2,
  slidesPerRow: 2,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  cssEase: "linear",
};

export default () => {
  return (
    <div>
      <Slider {...settings}>
        {images.map(({ id, src }) => (
          <img key={id} src={src} alt="" />
        ))}
      </Slider>
    </div>
  );
};

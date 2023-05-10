import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import ArrowLeft from "../../assets/arrowLeft.svg";
import ArrowRight from "../../assets/arrowRight.svg";

interface Props {
  children?: any;
}

const ArticleSlider = ({ children }: Props) => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`absolute top-[-55px] right-6 z-1 border border-light-gray rounded-xl px-5.5 py-4 ${
          onClick ? "opacity-100" : "opacity-20"
        }`}
      >
        <img src={ArrowRight} />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;

    return (
      <button
        onClick={onClick}
        className={`absolute top-[-55px] right-20 z-1 border border-light-gray rounded-xl px-5.5 py-4 ${
          onClick ? "opacity-100" : "opacity-20"
        }`}
      >
        <img src={ArrowLeft} />
      </button>
    );
  };

  const settings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  console.log(sliderRef);
  return (
      <Slider ref={setSliderRef} {...settings}>
        {children}
      </Slider>
  );
};

export default ArticleSlider;

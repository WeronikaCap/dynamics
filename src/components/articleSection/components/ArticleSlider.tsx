import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "assets/arrowLeft.svg";
import ArrowRight from "assets/arrowRight.svg";

interface Props {
  children?: React.ReactNode;
}

const ArticleSlider = ({ children }: Props) => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  interface CustomArrowProps {
    onClick?: React.MouseEventHandler<any> | undefined;
  }

  const NextArrow = ({ onClick }: CustomArrowProps) => {
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

  const PrevArrow = ({ onClick }: CustomArrowProps) => {
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
    autoplay: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1007,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider ref={setSliderRef} {...settings}>
      {children}
    </Slider>
  );
};

export default ArticleSlider;

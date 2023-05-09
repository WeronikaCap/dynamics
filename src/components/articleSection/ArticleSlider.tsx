import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import ArrowLeft from '../../assets/arrowLeft.svg';
import ArrowRight from '../../assets/arrowRight.svg';

interface Props {
  children?: any;
}

const ArticleSlider = ({ children }: Props) => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
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

  return (
    <div>
      <div className="flex justify-end gap-2.5 mx-4 my-1.5">
        <Button onClick={sliderRef?.slickPrev}><img src={ArrowLeft}/></Button>
        <Button onClick={sliderRef?.slickNext}><img src={ArrowRight}/></Button>
      </div>
      <Slider ref={setSliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default ArticleSlider;

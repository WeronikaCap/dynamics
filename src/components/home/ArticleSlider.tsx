import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  children?: any;
}

const ArticleSlider = ({ children }: Props) => {
  const ref = useRef<any>(null);

  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  const [sliderRef, setSliderRef] = useState<any>(null);

  var settings = {
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex w-screen">
        <button onClick={sliderRef?.slickPrev}>PREV</button>
        <button onClick={sliderRef?.slickNext}>NEXT</button>
      </div>
      <Slider ref={setSliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default ArticleSlider;

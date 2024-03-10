/* eslint-disable jsx-a11y/alt-text */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from './imageList';

interface IProps {
  selectedIndex: number;
}

const ImgModal = ({ selectedIndex }: IProps) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    display: true,
    arrows: true,
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {images.map((image) => (
          <img src={image} />
        ))}
      </Slider>
    </div>
  );
};

export default ImgModal;

import images from './imageList';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { useState } from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface IProps {
  selectedIndex: number;
  togglePopup: () => void;
}

const ImgModal = ({ selectedIndex, togglePopup }: IProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  const imageRender = images.map((item, index) => {
    return (
      <SwiperSlide key={`swiper-${index}}`}>
        <img src={item}></img>
      </SwiperSlide>
    );
  });

  return (
    <div className='imgPopup'>
      <Swiper
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {imageRender}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        
        className='mySwiper'
      >
        {imageRender}
      </Swiper>
      <div className='close-btn'>
        <CloseOutlined onClick={togglePopup} />
      </div>
    </div>
  );
};

export default ImgModal;

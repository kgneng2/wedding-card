/* eslint-disable jsx-a11y/alt-text */
import './styles.scss';
import { useState } from 'react';

import ImgModal from './imgModal';
import images from './imageList';

const Gallery = () => {
  const [popup, setPopup] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const togglePopup = (index: number) => {
    setPopup(!popup);
    setSelectedIndex(index);
    console.log(selectedIndex, images[selectedIndex])
  };

  return (
    <div className='gallery'>
      <div className='container'>
        <div className='header'>
          <div className='title'>GALLERY</div>
          <div className='sub-title'>우리의 순간</div>
        </div>
        <div className='body'>
          {images.map((image, index) => (
            <img
              className='image'
              src={`${image}`}
              onClick={() => togglePopup(index)}
            />
          ))}
        </div>
        {popup && <ImgModal selectedIndex={selectedIndex} />}
      </div>
    </div>
  );
};

export default Gallery;

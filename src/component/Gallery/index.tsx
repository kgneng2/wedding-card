/* eslint-disable jsx-a11y/alt-text */
'use client';
import './styles.scss';
import React, { useEffect, useState } from 'react';
import images from './imageList'; // 이미지 목록 가져오기
import { Image } from 'antd';
import ImgModal from 'src/component/Gallery/imgModal';

const Gallery = ({ isPopupOpen, setIsPopupOpen }) => {
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    if (isPopupOpen) {
      // 팝업이 열렸을 때 body에 overflow: hidden 스타일 적용하여 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else {
      // 팝업이 닫혔을 때 body에 overflow: auto 스타일 적용하여 스크롤 활성화
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 unmount될 때 cleanup 수행
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='gallery'>
      <div className='container'>
        <div className='header'>
          <div className='title'>GALLERY</div>
        </div>
        <div className='body'>
          {images.map((image, index) => {
            return (
              <img
                key={`img-${index}`}
                className='image'
                src={image}
                onClick={() => {
                  console.log('index: ', index, isPopupOpen);
                  setSelected(index);
                  setIsPopupOpen(true);
                }}
              />
            );
          })}
        </div>
      </div>
      {isPopupOpen && (
        <ImgModal selectedIndex={selected || 0} togglePopup={togglePopup} />
      )}
    </div>
  );
};

export default Gallery;

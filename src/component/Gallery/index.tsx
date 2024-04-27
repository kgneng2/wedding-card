/* eslint-disable jsx-a11y/alt-text */
'use client';
import './styles.scss';
import React from 'react';
import { Image } from 'antd';
import images from './imageList'; // 이미지 목록 가져오기

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='container'>
        <div className='header'>
          <div className='title'>GALLERY</div>
          {/* <div className='sub-title'>우리의 순간</div> */}
        </div>
        <div className='body'>
          <Image.PreviewGroup>
            {images.map((image, index) => (
              <Image
                key={`img-${index}`}
                className='image'
                src={image}
                // onClick={() => handlePreview(image)}
              />
            ))}
          </Image.PreviewGroup>
        </div>
      </div>

      {/* <Modal onCancel={() => setPreviewVisible(false)} footer={null}>
        <img alt='preview' style={{ width: '100%' }} src={previewImage} />
      </Modal> */}
    </div>
  );
};

export default Gallery;

// const togglePopup = (index: number) => {
//   setPopup(!popup);
//   setSelectedIndex(index);
//   console.log(selectedIndex, images[selectedIndex]);
// };

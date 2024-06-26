'use client';
import './styles.scss';
import React, { useEffect, useState } from 'react';
import images from './imageList'; // 이미지 목록 가져오기
import ImgModal from 'src/component/Gallery/imgModal';
import Image from 'next/image';
import Loading from 'src/component/Loading';

const Gallery = ({ isPopupOpen, setIsPopupOpen }) => {
  const [selected, setSelected] = useState<number>();
  const [loadingStates, setLoadingStates] = useState(images.map(() => true)); // 이미지별 로딩 상태 관리

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

  const handleImageLoad = (index) => {
    setLoadingStates((prevLoadingStates) => {
      const newLoadingStates = [...prevLoadingStates];
      newLoadingStates[index] = false;
      return newLoadingStates;
    });
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
              <div className='image-container' key={`img-${index}`}>
                {loadingStates[index] && <Loading />}
                <Image
                  className={`image ${loadingStates[index] ? 'hidden' : ''}`}
                  src={image}
                  alt={`img-${index}`}
                  width={200}
                  height={300}
                  priority
                  onLoad={() => handleImageLoad(index)}
                  onClick={() => {
                    console.log('index: ', index, isPopupOpen);
                    setSelected(index);
                    setIsPopupOpen(true);
                  }}
                  // layout='responsive'
                  sizes='(max-width: 480px) 100vw,
                       (max-width: 768px) 100vw,
                       (max-width: 1024px) 100vw,
                       (max-width: 1440px) 100vw,
                       (max-width: 1920px) 100vw,
                       100vw'
                />
              </div>
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

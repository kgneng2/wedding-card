import './styles.scss';
import { Carousel } from 'antd';
import Image from 'next/image';

const Intro = () => {
  const doorImageList = [
    '/images/main/main1.jpg',
    '/images/main/main2.jpg',
    '/images/main/main3.jpg',
    '/images/main/main4.jpg',
    '/images/main/main5.jpg',
    '/images/main/main6.jpg',
  ];

  return (
    <>
      <div className='intro'>
        <div className='name-container'>
          <div className='name'>
            <div className='txt'>강</div>
            <div className='txt'>준</div>
            <div className='young'>영</div>
            <div className='ring'>💍</div>
            <div className='txt'>최</div>
            <div className='txt'>산</div>
            <div className='txt'>하</div>
          </div>
        </div>
        <div className='door'>
          <Carousel
            autoplay
            fade={true}
            effect='fade'
            autoplaySpeed={1500}
            dots={false}
          >
            {doorImageList.map((img) => {
              return (
                <Image
                  src={img}
                  alt='images'
                  width={350}
                  height={490}
                  className='image'
                  layout='responsive'
                  sizes='(max-width: 480px) 100vw, 
                       (max-width: 768px) 100vw, 
                       (max-width: 1024px) 100vw, 
                       (max-width: 1440px) 100vw, 
                       (max-width: 1920px) 100vw, 
                       100vw'
                />
              );
            })}
          </Carousel>
        </div>
        <div className='celebrate'>
          <div className='txt'>We're Getting Married</div>
          <div className='info'>
            <div className='date'>
              <p>2024년 8월 25일</p>
              <p>일요일 12시 30분</p>
            </div>
            {/* <div className='separator'></div> */}
            <div className='address'>
              <p>양재 aT 포레</p>
              <p>5층 그랜드홀</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

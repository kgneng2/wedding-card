import React, { Suspense, useEffect, useState } from 'react';
import Intro from '../component/Intro';
import './App.scss';
import Gallery from '../component/Gallery';
import heartAnimation from '../animation/heart.json';
import Lottie from 'react-lottie';
import Guestbook from 'src/component/GuestBook';
import GNB from 'src/component/GNB';
import Blank from 'src/component/Blank';
import MoveInfo from 'src/component/MoveInfo';
import usePreventZoom from 'src/hook/usePreventZoom';
import loadingAnimation from '../animation/loading.json'; // Lottie 파일을 여기에 넣으세요.

const Opening: React.FC<{
  text: string;
  onFinish: () => void;
}> = ({ text, onFinish }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(onFinish, 1100);
      }
    }, 150); // 100ms 마다 한 글자씩 표시

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heartAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className='opening'>
        <div className='text'>
          {displayText}
          <Lottie options={defaultOptions} height={100} width={100}></Lottie>
        </div>
      </div>
    </>
  );
};

function App() {
  const [visited, setVisited] = useState<boolean>(
    sessionStorage.getItem('visited') === 'true'
  );

  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleFinishTyping = () => {
    setVisited(true);
  };

  useEffect(() => {
    const isVisited = sessionStorage.getItem('visited');

    setVisited(isVisited === 'true');

    if (!isVisited) {
      setTimeout(() => {
        sessionStorage.setItem('visited', 'true');
      }, 5000);
    }

    setLoading(false);
  }, []);

  usePreventZoom();

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (loading) {
    return (
      <Lottie
        options={loadingOptions}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          zIndex: 1,
        }}
      />
    );
  }

  return (
    <>
      {visited ? (
        <div className='app'>
          <Suspense>
            <Intro/>
          </Suspense>
          {!isPopupOpen && <GNB />}
          <Suspense>
            <Gallery
              isPopupOpen={isPopupOpen}
              setIsPopupOpen={setIsPopupOpen}
            />
          </Suspense>
          <MoveInfo />
          <Guestbook />
          <Blank />
        </div>
      ) : (
        <Opening
          text={'준영 산하 8월 25일 결혼합니다'}
          onFinish={handleFinishTyping}
        />
      )}
    </>
  );
}

export default App;

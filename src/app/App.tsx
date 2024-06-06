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
  const [visited, setVisited] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // 수정된 부분 1: useEffect를 사용하여 로컬 스토리지에서 방문 여부를 확인합니다.
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setVisited(true);
    }
    setLoading(false); // 로딩 상태 설정 완료
  }, []);

  // 수정된 부분 2: 타이핑이 완료되면 로컬 스토리지에 방문 여부를 저장합니다.
  const handleFinishTyping = () => {
    setVisited(true);
    localStorage.setItem('hasVisited', 'true');
  };

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
            <Intro />
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

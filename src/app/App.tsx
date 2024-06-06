import Intro from '../component/Intro';
import './App.scss';
import Gallery from '../component/Gallery';
import { Suspense, useEffect, useState } from 'react';

import heartAnimation from '../animation/heart.json';
import developingAnimation from '../animation/developing.json';
import Lottie from 'react-lottie';

import Guestbook from 'src/component/GuestBook';
import GNB from 'src/component/GNB';
import Blank from 'src/component/Blank';
import MoveInfo from 'src/component/MoveInfo';
import usePreventZoom from 'src/hook/usePreventZoom';

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
  }, [currentIndex, text, onFinish]);

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

  const handleFinishTyping = () => {
    setVisited(true);
  };

  useEffect(() => {
    const isVisited = sessionStorage.getItem('visited');
    setVisited(isVisited === 'true');

    if (!isVisited) {
      setTimeout(() => {
        sessionStorage.setItem('visited', 'true');
      }, 3000);
    }
  }, []);

  usePreventZoom();

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

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
          <Suspense>
            <Guestbook />
          </Suspense>
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

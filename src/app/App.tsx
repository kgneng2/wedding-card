'use client';
import Intro from '../component/Intro';
import './App.scss';
import Gallery from '../component/Gallery';
import { useEffect, useState } from 'react';

import heartAnimation from '../animation/heart.json';
import Lottie from 'react-lottie';

import Contact from 'src/component/Contact';
import Dday from 'src/component/Dday';
import Greeting from 'src/component/Greeting';
import Guestbook from 'src/component/GuestBook';
import Information from 'src/component/Information';
import ShowMeTheMoney from 'src/component/ShowMeTheMoney';
import Calendar from 'src/component/Calendar';
import Location from 'src/component/Location';
import GNB from 'src/component/GNB';

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
  const [showOpening, setShowOpening] = useState<Boolean>(false); // 여기 바꿔야됨.
  // const [showOpening, setShowOpening] = useState<Boolean>(true);

  const handleFinishTyping = () => {
    // 타이핑 효과가 끝나면 해당 컴포넌트를 사라지게 함
    setShowOpening(false);
  };

  const tabArray = [
    {
      label: '갤러리 보기',
      content: (
        <>
          <Intro />
          <Gallery />
        </>
      ),
      icon: '💍',
    },
    {
      label: '예식 안내',
      content: (
        <>
          <Greeting />
          <Contact />
          <Calendar />
          <Dday />
          <Location />
          <Information />
          <ShowMeTheMoney />
          <Guestbook />
        </>
      ),
      icon: '👰🏻‍♀️',
    },
  ];

  return (
    <>
      {showOpening && (
        <Opening
          text={'준영 산하 우리 이제 결혼합니다'}
          onFinish={handleFinishTyping}
        />
      )}
      {!showOpening && (
        <>
          <GNB />
          <div className='app'>
            <Intro />
            <Gallery />
          </div>
        </>
      )}
    </>
  );
}

export default App;

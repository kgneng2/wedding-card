import React from 'react';
import { useEffect, useState } from 'react';
import './styles.scss';

const Dday = () => {
  const targetDate = new Date('2024-08-25T12:30:00');
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateRemainingTime(targetDate: Date): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    extraString: string;
  } {
    const currentDate = new Date();
    const timeDiff = targetDate.getTime() - currentDate.getTime();

    // 1초는 1000 milliseconds
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days: days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
      extraString: timeDiff <= 0 ? '지났습니다' : '남았습니다',
    };
  }

  return (
    <div className='dday'>
      결혼식까지{' '}
      {`
      ${remainingTime.days}일 
      ${remainingTime.hours}시간 
      ${remainingTime.minutes}분 
      ${remainingTime.seconds}초
       ${remainingTime.extraString}`}
    </div>
  );
};

export default Dday;

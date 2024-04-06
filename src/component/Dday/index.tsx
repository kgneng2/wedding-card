"use client";
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
      <div className='remainTxt'>
        <div className='desc' style={{ opacity: 0.8 }}>
          DAYS
        </div>
        <div className='desc' style={{ opacity: 0.8 }}>
          HOUR
        </div>
        <div className='desc' style={{ opacity: 0.8 }}>
          MIN
        </div>
        <div className='desc' style={{ opacity: 0.8 }}>
          SEC
        </div>
        <div className='desc'>{remainingTime.days}</div>
        <div className='desc'>{remainingTime.hours}</div>
        <div className='desc'>{remainingTime.minutes}</div>
        <div className='desc'>{remainingTime.seconds}</div>
      </div>
      <div className='text'>
        <span> 준영, 산하의 결혼식이 </span>
        <span className='remainday'>{`${remainingTime.days}일`} </span>
        <span >{`${remainingTime.extraString}`} </span>
      </div>
    </div>
  );
};

export default Dday;

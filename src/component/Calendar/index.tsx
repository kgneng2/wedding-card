import React from 'react';
import './styles.scss';
import Dday from './Dday';

const Calendar = () => {
  const daysInMonth = 31;
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // 날짜 셀을 렌더링하는 함수
  const renderDateCells = () => {
    const dateCells: React.JSX.Element[] = [];

    // 요일 표시
    daysOfWeek.forEach((day) => {
      dateCells.push(
        <div className='calendar-cell day-of-week' key={`header-${day}`}>
          {day}
        </div>
      );
    });

    [1, 1, 1, 1].forEach((i) => {
      dateCells.push(
        <div className='calendar-cell' key={`empty-${i}`}>
          {' '}
        </div>
      );
    });
    // 달력 날짜 표시
    for (let i = 1; i <= daysInMonth; i++) {
      if (i === 25) {
        dateCells.push(
          <div className='calendar-dday' key={`date-${i}`}>
            {i}
          </div>
        );
      } else {
        dateCells.push(
          <div className='calendar-cell' key={`date-${i}`}>
            {i}
          </div>
        );
      }
    }

    return dateCells;
  };

  return (
    <div className='calendar'>
      <div className='calendar-header'>
        <h3>Calendar</h3>
        <h3>24년 8월</h3>
      </div>
      <div className='calendar-body'>{renderDateCells()}</div>
      <Dday />
    </div>
  );
};

export default Calendar;

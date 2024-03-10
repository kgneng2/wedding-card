import React from 'react';
import './styles.scss';

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
      if ([4, 11, 18].includes(i)) {
        dateCells.push(
          <div className='calendar-sunday' key={`date-${i}`}>
            {i}
          </div>
        );
      } else if (i === 25) {
        dateCells.push(
          <div className='calendar-dday calendar-sunday' key={`date-${i}`}>
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
      <div className='calendar-container'>
        <div className='calendar-header'>
          <h4 className='sub-title'> WEDDING DAY </h4>
          <div className='date'>2024.08.25 일요일 오후 12:30</div>
          <div className='date'>양재 AT 포레 웨딩홀 5층</div>
        </div>
        <div className='calendar-horizon'></div>
        <div className='calendar-body'>{renderDateCells()}</div>
        <div className='calendar-horizon'></div>
      </div>
    </div>
  );
};

export default Calendar;

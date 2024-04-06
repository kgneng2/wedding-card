import Link from 'next/link';
import './styles.scss';
import { useState } from 'react';

const GNB = ({ currentPage, onClick }) => {
  return (
    <div className='navbar'>
      <div className='navItem' onClick={onClick}>
        {currentPage ? '결혼식 안내 👰🏻‍♀️' : '갤러리 보기 💍'}
      </div>
    </div>
  );
};

export default GNB;

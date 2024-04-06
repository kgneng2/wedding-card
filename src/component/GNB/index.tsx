import Link from 'next/link';
import './styles.scss';

const GNB = () => {
  return (
    <div className='gnb'>
      <nav className='navbar'>
        <ul className='navList'>
          <li className='navItem'>
            <Link href='/'>갤러리 보기</Link>
          </li>
          <li className={'navItem'}>
            <Link href='/invitation'>결혼식 안내</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default GNB;

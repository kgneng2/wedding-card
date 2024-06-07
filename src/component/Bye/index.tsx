import Image from 'next/image';
import './styles.scss';

const Bye = () => {
  return (
    <div className='bye'>
      <Image
        src='/images/main/main5.jpg'
        alt='Background Image'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='backgroundImage'
        priority
      />
      <div className='text'>
        저희의 새로운 시작을 축하해주셔서 <br />
        진심으로 감사드립니다. <br />
        행복하게 잘 살겠습니다.
      </div>
    </div>
  );
};

export default Bye;

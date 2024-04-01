import './styles.scss';
import mainImage from '../../../public/images/main2.jpg';

const Intro = () => {
  return (
    <>
      <div className='intro'>
        <div className='name-container'>
          <div className='name'>
            <div className='txt'>강</div>
            <div className='txt'>준</div>
            <div className='young'>영</div>
            <div className='ring'>💍</div>
            <div className='txt'>최</div>
            <div className='txt'>산</div>
            <div className='txt'>하</div>
          </div>
        </div>
        <div className='door'>
          <img
            src={mainImage.src}
            className='image'
          ></img>
        </div>
        <div className='celebrate'>
          <div className='txt'>We're Getting Married</div>
          <div className='info'>
            <div className='date'>
              <p>2024년 8월 25일</p>
              <p>일요일 12시 30분</p>
            </div>
            {/* <div className='separator'></div> */}
            <div className='address'>
              <p>양재 aT 포레</p>
              <p>5층 단독홀</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

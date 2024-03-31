import './styles.scss';
import mainImage from '../../../public/images/main2.jpg';

const Intro = () => {
  return (
    <>
      <div className='intro'>
        <div className='door'>
          <img src={mainImage.src} className='image'></img>
        </div>
        <div className='name-container'>
          <div className='name'>
            <div className='txt'>강</div>
            <div className='txt'>준</div>
            <div className='txt'>영</div>
            <div className='ring'>💍</div>
            <div className='txt'>최</div>
            <div className='txt'>산</div>
            <div className='txt'>하</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

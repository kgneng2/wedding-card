import useDynamicBaseUrl from 'src/hook/useDynamicUrl';
import './styles.scss';

const GNB = () => {
  const { urlData, onClick } = useDynamicBaseUrl();

  return (
    <div className='navbar'>
      <div className='navItem' onClick={onClick}>
        {urlData.text}
      </div>
    </div>
  );
};

export default GNB;

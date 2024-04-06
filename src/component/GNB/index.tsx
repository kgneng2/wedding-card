import useDynamicBaseUrl from 'src/hook/useDynamicUrl';
import './styles.scss';

const GNB = () => {
  const data = useDynamicBaseUrl();

  const onClick = () => {
    window.location.href = data.baseUrl;
  };

  return (
    <div className='navbar'>
      <div className='navItem' onClick={onClick}>
        {data.text}
      </div>
    </div>
  );
};

export default GNB;

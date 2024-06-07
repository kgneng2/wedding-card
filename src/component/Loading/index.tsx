import Lottie from 'react-lottie';
import loadingAnimation from '../../animation/loading.json'; // Lottie 파일을 여기에 넣으세요.

const Loading = () => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      options={loadingOptions}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
        zIndex: 1,
      }}
    />
  );
};

export default Loading;
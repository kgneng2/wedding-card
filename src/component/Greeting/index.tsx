import Blank from '../Blank';
import './styles.scss';

const Greeting = () => {
  return (
    <div className='sectionMg introLayer'>
      <div className='sectionHead'>
        <div className='enstr'>INVITATION</div>
        <span className='name'>소중한 분들을 초대합니다</span>
      </div>
      <div className='introMent'>
        <div>
          <p>
            저희 두사람의 작은 만남이
            <br />
            사랑의 결실을 이루어
            <br />
            <span className='strong'>
              <strong>소중한 결혼식</strong>
            </span>
            을 올리게 되었습니다
            <br />
            이제 함께 한곳을 바라보며 걸어갈 수 있는
            <br />큰 사랑으로 키우고자 합니다.
            <br />
            평생 서로 귀하게 여기며
            <br />
            첫 마음 그대로 준중하고 배려하며 살겠습니다
            <br />
            저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
            <br />
            앞날을 축복해 주시면 감사하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;

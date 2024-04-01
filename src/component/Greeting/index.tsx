import './styles.scss';

const Greeting = () => {
  return (
    <div className='sectionMg'>
      <div className='sectionHead'>
        <div className='enstr'>INVITATION</div>
        {/* <span className='name'>
          <strong>소중한 분들을 초대합니다</strong>
        </span> */}
      </div>
      <div className='introMent'>
        사랑하는 이들에게 나란한 이름으로 <br />
        보내는  첫 번째 편지 <br />
        늘 곁에서 아껴주신 고마운 분들을 모십니다 
        <br />
        <br />
        
        싱그러운 여름, <br />
        세상에 둘도 없는 제 소중한 친구와 <br />
        앞으로도 함께 행복하고 싶어서 <br />  
        부부라는 이름으로 나아가려 합니다.

        {/* <p>
          저희 두사람의 작은 만남이
          <br />
          사랑의 결실을 이루어
          <br />
          <span className='strong'>
            <strong>소중한 결혼식</strong>
          </span>
          을 올리게 되었습니다
          <br />
          <br />
          평생 서로 귀하게 여기며
          <br />
          첫 마음 그대로 준중하고 배려하며
          <br />
          살겠습니다
          <br />
          <br />
          저희 두 사람이 사랑의 이름으로
          <br />
          지켜나갈 수 있게
          <br />
          앞날을 축복해 주시면 감사하겠습니다.
        </p> */}
      </div>
    </div>
  );
};

export default Greeting;

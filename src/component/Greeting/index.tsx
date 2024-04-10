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
        아름다운 풍경, <br />
        맛있는 음식,  <br />
        재미있는 이야기가 있을 때면  <br />
        가장 먼저 떠오르는 사람과  <br />
        싱그러운 여름날에  <br />
        결혼식을 올립니다.  <br />
        <br />
        선물과 같은 그날  <br />
        함께 축복해 주신다면  <br />
        더없는 기쁨으로 간직하겠습니다.  <br />

      </div>
    </div>
  );
};

export default Greeting;

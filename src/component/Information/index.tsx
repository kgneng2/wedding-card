/* eslint-disable jsx-a11y/alt-text */
import { Tabs } from 'antd';
import './styles.scss';
import hallImg from '../../../public/images/hall.jpg';
import banquetImg from '../../../public/images/banquet.jpg';
import brideRoomImg from '../../../public/images/brideRoom.jpg';

const Information = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const tabArray = [
    {
      label: '예식안내',
      content: (
        <div className='tab'>
          <img src={hallImg.src} width='100%'></img>
          <div className='line'> 💍 본식은 5층에서 12시 30분에 진행합니다.</div>
          <div className='line'>
             😊 당일 단독홀로 오랜만에 만난 가족, 지인 분들과 여유있는 시간
            보내시길 소망합니다.
          </div>
        </div>
      ),
    },
    {
      label: '식사안내',
      content: (
        <div className='tab'>
          <img src={banquetImg.src} width='100%'></img>
          <div className='line'>🍚 지하 1층에 연회장이 준비 되어 있습니다.</div>
          <div className='line'>
            🥘 예식 시작 30분 전인 12시 부터 이용이 가능합니다.
          </div>
          <div className='line'>
            🍺 생맥주 기계 등 주류도 무제한이니 편하게 즐겨주시면
            감사하겠습니다.
          </div>
        </div>
      ),
    },
    {
      label: '신부대기실',
      content: (
        <div className='tab'>
          <img src={brideRoomImg.src} width='100%'></img>
          <div className='line'>💐 신부대기실은 홀 반대편에 위치하고 있습니다.</div>
          <div className='line'>👰 조금 일찍 방문하여 예쁜 신부에게 따뜻한 축하 한마디 부탁드립니다.</div>
        </div>
      ),
    },
  ];

  return (
    <div id='information' className='information'>
      <div className='header'>
        <div className='title'>Information</div>
        <div className='sub-title'>안내 말씀 드립니다</div>
      </div>
      <Tabs
        className='tabs'
        onChange={onChange}
        centered
        items={tabArray.map((data, i) => {
          const id = String(i + 1);
          return {
            label: data.label,
            key: id,
            children: data.content,
          };
        })}
      />
    </div>
  );
};

export default Information;

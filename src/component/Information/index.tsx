/* eslint-disable jsx-a11y/alt-text */
import { Tabs } from 'antd';
import './styles.scss';
// import 'antd/dist/antd.css';
import hallImg from '../../images/hall.jpg';
import banquetImg from '../../images/banquet.jpg';
import brideRoomImg from '../../images/brideRoom.jpg';

const Information = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const tabArray = [
    {
      label: '예식안내',
      content: (
        <div className='tab'>
          <img src={hallImg} width='100%'></img>
          - 본식은 5층에서 12시 30분에 진행합니다 <br />- 당일 단독홀로 오랜만에
          만난 가족, 지인 분들과 여유있는 시간 보내시길 희망합니다
        </div>
      ),
    },
    {
      label: '식사안내',
      content: (
        <div className='tab'>
          <img src={banquetImg} width='100%'></img>
          - 본식은 5층에서 12시 30분에 진행합니다 <br />- 당일 단독홀로 오랜만에
          만난 가족, 지인 분들과 여유있는 시간 보내시길 희망합니다
        </div>
      ),
    },
    {
      label: '신부대기실',
      content: (
        <div className='tab'>
          <img src={brideRoomImg} width='100%'></img>
          - 본식은 5층에서 12시 30분에 진행합니다 <br />- 당일 단독홀로 오랜만에
          만난 가족, 지인 분들과 여유있는 시간 보내시길 희망합니다
        </div>
      ),
    },
  ];

  return (
    <div className='information'>
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

"use client";
import { useEffect, useState } from 'react';
import './styles.scss';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import AccountInfo from 'src/component/ShowMeTheMoney/AccountInfo';

const ShowMeTheMoney = () => {
  const [groom, setGroom] = useState(false);
  const [bride, setBride] = useState(false);

  const toggleGroom = () => {
    setGroom(!groom);
  };

  const toggleBride = () => {
    setBride(!bride);
  };

  const groomList = [
    {
      level: '신 랑',
      name: '강준영',
      bank: '카뱅',
      number: '3333-27-5790807',
    },
    {
      level: '혼 주',
      name: '강병재',
      bank: '농협',
      number: '802-12-065873',
    },
    {
      level: '혼 주',
      name: '임명희',
      bank: '신한',
      number: '110-143-685008',
    },
  ];

  const brideList = [
    {
      level: '신 부',
      name: '최산하',
      bank: '토스',
      number: '1001-2193-8190',
    },
    {
      level: '혼 주',
      name: '최용환',
      bank: '농협',
      number: '631-02-130422',
    },
  ];

  return (
    <div id='money' className='money'>
      <div className='container'>
        <div className='header'>
          <div className='title'> 마음을 전하실 곳 </div>
        </div>
        <div className='body'>
          참석이 어려워 <br />
          직접 축하를 전하지 못하는 분들을 위해<br />
          안내드리니 넓은 마음으로 이해 부탁드립니다.<br />
          축복해주시는 그마음 소중히 간직하여 <br />
          좋은 모습으로 보답하겠습니다. <br />
        </div>
        <div className='box'>
          <div className='bbb'>
            <button className='bb' onClick={toggleGroom}>
              <div className='txt'>🤵🏻‍♂️ 신랑측 마음 전하는 곳</div>
              <div className='status_bb'>
                {groom ? <UpOutlined /> : <DownOutlined />}
              </div>
            </button>
            {groom && <AccountInfo items={groomList} />}
          </div>
          <div className='bbb'>
            <button className='bb' onClick={toggleBride}>
              <div className='txt'>👰🏻‍♀️ 신부측 마음 전하는 곳</div>
              <div className='status_bb'>
                {bride ? <UpOutlined /> : <DownOutlined />}
              </div>
            </button>
            {bride && <AccountInfo items={brideList} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMeTheMoney;

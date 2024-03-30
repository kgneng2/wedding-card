import { useState } from 'react';

import './styles.scss';
import { CloseOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCall = (number: string) => {
    window.location.href = 'tel:' + number;
  };

  const handleMsg = (number: string) => {
    window.location.href = 'sms:' + number;
  };

  return (
    <div className='contact'>
      <div>
        강병재·임명희 <span className='son'>의 장남 </span> 준영{' '}
      </div>
      <div>
        최용환·선경이 <span className='son'>의 차녀 </span> 산하{' '}
      </div>
      <div className='tel'>
        <button className='bb' onClick={togglePopup}>
          연락하기
        </button>
        {isPopupOpen && (
          <div className='popup'>
            <div className='content'>
              <div className='title'>혼주에게 연락하기</div>

              <div className='groom'>
                <div className='text'>
                  <span> 신  랑 </span> <span className='name'> 강준영 </span>
                  <span className='icons'>
                    <PhoneOutlined onClick={() => handleCall('01082974276')} />
                    <span className='blank'></span>
                    <MailOutlined onClick={() => handleMsg('01082974276')} />
                  </span>
                </div>
                <div className='text'>
                  <span> 아버지 </span>{' '}
                  <span className='name'> 강병재 </span>{' '}
                  <span className='icons'>
                    <PhoneOutlined onClick={() => handleCall('01022786251')} />
                    <span className='blank'></span>
                    <MailOutlined onClick={() => handleMsg('01022786251')} />
                  </span>
                </div>
                <div className='text'>
                  <span> 어머니 </span>{' '}
                  <span className='name'> 임명희 </span>
                  <span className='icons'>
                    <PhoneOutlined onClick={() => handleCall('01055066251')} />
                    <span className='blank'></span>
                    <MailOutlined onClick={() => handleMsg('01055066251')} />
                  </span>
                </div>
              </div>
              <hr className='line' />
              <div className='groom'>
                <div className='text'>
                  <span> 신  부 </span> <span className='name'>최산하 </span>
                  <span className='icons'>
                    <PhoneOutlined onClick={() => handleCall('01023124276')} />
                    <span className='blank'></span>
                    <MailOutlined onClick={() => handleMsg('01023124276')} />
                  </span>
                </div>
                <div className='text'>
                  <span> 아버지 </span>{' '}
                  <span className='name'>최용환 </span>
                  <span className='icons'>
                    <PhoneOutlined onClick={() => handleCall('01036034276')} />
                    <span className='blank'></span>
                    <MailOutlined onClick={() => handleMsg('01036034276')}/>
                  </span>
                </div>
                <div className='text'>
                  <span> 어머니 </span>{' '}
                  <span className='name'> 선경이 </span>
                  <span className='icons'>
                    <PhoneOutlined onClick={() => handleCall('01066844276')} />
                    <span className='blank'></span>
                    <MailOutlined onClick={() => handleMsg('01066844276')}/>
                  </span>
                </div>
              </div>

              <div className='close-btn'>
                <CloseOutlined onClick={togglePopup} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

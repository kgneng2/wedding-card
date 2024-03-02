import { useState } from 'react';

import './styles.scss';
import { CloseOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='content'>
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
                  <span> 신랑 </span> <span className='name'> 강준영 </span>
                  <span className='icons'>
                    <PhoneOutlined />
                    <span className='blank'></span>
                    <MailOutlined />
                  </span>
                </div>
                <div className='text'>
                  <span> 신랑 아버지 </span>{' '}
                  <span className='name'> 강병재 </span>{' '}
                  <span className='icons'>
                    <PhoneOutlined />
                    <span className='blank'></span>
                    <MailOutlined />
                  </span>
                </div>
                <div className='text'>
                  <span> 신랑 어머니 </span>{' '}
                  <span className='name'> 임명희 </span>
                  <span className='icons'>
                    <PhoneOutlined />
                    <span className='blank'></span>
                    <MailOutlined />
                  </span>
                </div>
              </div>
              <hr className='line' />
              <div className='groom'>
                <div className='text'>
                  <span> 신부 </span> <span className='name'>최산하 </span>
                  <span className='icons'>
                    <PhoneOutlined />
                    <span className='blank'></span>
                    <MailOutlined />
                  </span>
                </div>
                <div className='text'>
                  <span> 신부 아버지 </span> <span className='name'>최용환 </span>
                  <span className='icons'>
                    <PhoneOutlined />
                    <span className='blank'></span>
                    <MailOutlined />
                  </span>
                </div>
                <div className='text'>
                  <span> 신부 어머니 </span> <span className='name'> 선경이 </span>
                  <span className='icons'>
                    <PhoneOutlined />
                    <span className='blank'></span>
                    <MailOutlined />
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

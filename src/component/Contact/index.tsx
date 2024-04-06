"use client";
import { useEffect, useState } from 'react';

import './styles.scss';
import { CloseOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      // 팝업이 열렸을 때 body에 overflow: hidden 스타일 적용하여 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else {
      // 팝업이 닫혔을 때 body에 overflow: auto 스타일 적용하여 스크롤 활성화
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 unmount될 때 cleanup 수행
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

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
          <>
            <div className='overlay' onClick={togglePopup}></div>
            <div className='popup'>
              <div className='content'>
                <div className='title'>혼주에게 연락하기</div>

                <div className='groom'>
                  <div className='text'>
                    <span className='ddd'>신</span>{' '}
                    <span className='ddd'>랑</span>
                    <div className='name'>강준영</div>
                    <div className='icons'>
                      <PhoneOutlined
                        onClick={() => handleCall('01082974276')}
                        style={{ marginRight: '20px' }}
                      />
                      <MailOutlined onClick={() => handleMsg('01082974276')} />
                    </div>
                  </div>
                  <div className='text'>
                    <span className='ddd'> 아버지 </span>
                    <div className='name'> 강병재 </div>
                    <span className='icons'>
                      <PhoneOutlined
                        onClick={() => handleCall('01022786251')}
                        style={{ marginRight: '20px' }}
                      />
                      <span className='blank'></span>
                      <MailOutlined onClick={() => handleMsg('01022786251')} />
                    </span>
                  </div>
                  <div className='text'>
                    <span className='ddd'> 어머니 </span>{' '}
                    <span className='name'> 임명희 </span>
                    <span className='icons'>
                      <PhoneOutlined
                        onClick={() => handleCall('01055066251')}
                        style={{ marginRight: '20px' }}
                      />
                      <span className='blank'></span>
                      <MailOutlined onClick={() => handleMsg('01055066251')} />
                    </span>
                  </div>
                </div>
                <hr className='line' />
                <div className='groom'>
                  <div className='text'>
                    <span className='dda'>신</span>{' '}
                    <span className='dda'>부</span>
                    <span className='name'>최산하 </span>
                    <span className='icons'>
                      <PhoneOutlined
                        onClick={() => handleCall('01023124276')}
                        style={{ marginRight: '20px' }}
                      />
                      <span className='blank'></span>
                      <MailOutlined onClick={() => handleMsg('01023124276')} />
                    </span>
                  </div>
                  <div className='text'>
                    <span className='dda'> 아버지 </span>{' '}
                    <span className='name'>최용환 </span>
                    <span className='icons'>
                      <PhoneOutlined
                        onClick={() => handleCall('01036034276')}
                        style={{ marginRight: '20px' }}
                      />
                      <span className='blank'></span>
                      <MailOutlined onClick={() => handleMsg('01036034276')} />
                    </span>
                  </div>
                  <div className='text'>
                    <span className='dda'> 어머니 </span>{' '}
                    <span className='name'>선경이</span>
                    <span className='icons'>
                      <PhoneOutlined
                        onClick={() => handleCall('01066844276')}
                        style={{ marginRight: '20px' }}
                      />
                      <span className='blank'></span>
                      <MailOutlined onClick={() => handleMsg('01066844276')} />
                    </span>
                  </div>
                </div>

                <div className='close-btn'>
                  <CloseOutlined onClick={togglePopup} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;

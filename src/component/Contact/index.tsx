import React, { useState } from 'react';

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div> 강병재 임명희 의 아들 준영 </div>
      <div> 최용환 선경이 의 딸 산하 </div>
      <button onClick={togglePopup}> 연락하기 </button>
      {isPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <div>혼주에게 연락하기</div>
            <div> 신랑 강준영 </div>
            <div> 신랑 아버지 강병재 </div>
            <div> 신랑 어머니 임명희 </div>
            <div> 신부 최산하 </div>
            <div> 신부 아버지 최용환 </div>
            <div> 신부 어머니 선경이 </div>

            <button onClick={togglePopup}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

"use client";
import React, { useState } from 'react';

const Attendance = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attendance, setAttendance] = useState<boolean>(true);
  const [isBride, setIsBride] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('성함:', name);
    console.log('참석 여부:', attendance);
    console.log('신부 측:', isBride);
    // todo: send slack message for me
  };

  return (
    <div>
      <div>
        안전한 예식 준비를 위해 참석자 자리를 충분히 마련하고자 합니다. 부담
        갖지 마시고, 참석 의사 및 전하실 말씀을 남겨주시면 감사하겠습니다.
      </div>
      <button onClick={(e) => setIsOpen(!isOpen)}> 참석 여부 체크</button>
      {isOpen && (
        <div>
          <h3>참석 여부를 알려주세요</h3>
          <form onSubmit={handleSubmit}>
            <label>
              <label>
                신랑/신부 측:
                <input
                  type='radio'
                  value='신랑'
                  checked={isBride === false}
                  onChange={() => setIsBride(false)}
                />
                신랑
              </label>
              <label>
                <input
                  type='radio'
                  value='신부'
                  checked={isBride === true}
                  onChange={() => setIsBride(true)}
                />
                신부
              </label>
            </label>
            <br />
            <label>
              성함:
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              참석 여부:
              <label>
                <input
                  type='radio'
                  value='참석함'
                  checked={attendance === true}
                  onChange={() => setAttendance(true)}
                />
                참석함
              </label>
              <label>
                <input
                  type='radio'
                  value='참석하지 않음'
                  checked={attendance === false}
                  onChange={() => setAttendance(false)}
                />
                참석하지 않음
              </label>
            </label>
            <br />
            <label>
              전하실 말씀:
              <input
                type='text'
                value={name}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <br />
            <label>
              동반인원:
              <input
                type='text'
                value={name}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <br />
            <button type='submit'>전달</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Attendance;
//동반인원, 식사여부 필요함. 
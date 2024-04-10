'use client';
import { FormEvent, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { CloseOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

interface GuestBookFormProps {
  onSubmit: (formData: FormData) => void;
  toggleOpenForm: () => void;
}

const GuestBookForm = ({ onSubmit, toggleOpenForm }: GuestBookFormProps) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (formData: FormData) => {
    onSubmit(formData);
    setName('');
    setPassword('');
    setContent('');
    toggleOpenForm();
  };

  return (
    <div className='guest-book-form'>
      <div className='content'>
        <CloseOutlined
          onClick={toggleOpenForm}
          style={{ paddingLeft: '220px' }}
        />
        <Form onFinish={handleSubmit}>
          <Form.Item
            label='이름 👤'
            name='name'
            rules={[{ required: true, message: '이름을 입력하세요' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='UserName'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label='비밀번호 🔑'
            name='password'
            rules={[{ required: true, message: '비밀번호를 입력하세요' }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item label='전하실 말씀 💬' name='content'>
            <Input.TextArea
              style={{ height: 195 }}
              placeholder='결혼 축하합니다'
              value={content}
              onChange={(e) => setContent(e.target.value || "결혼 축하합니다")}
            />
          </Form.Item>
          <Form.Item>
            <Button  htmlType='submit'>
              축하 메시지 보내기
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default GuestBookForm;

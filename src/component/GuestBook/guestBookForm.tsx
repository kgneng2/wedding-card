'use client';
import { FormEvent, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { CloseOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

interface GuestBookFormProps {
  onSubmit: (formData: FormData) => void;
  toggleOpenForm: () => void;
}

const GuestBookForm = ({ onSubmit, toggleOpenForm }: GuestBookFormProps) => {
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', userName);
    formData.append('password', password);
    formData.append('content', content);

    onSubmit(formData);

    setUserName('');
    setPassword('');
    setContent('');
    toggleOpenForm();
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  return (
    <div className='guest-book-form'>
      <div className='content'>
        <CloseOutlined
          onClick={toggleOpenForm}
          style={{ paddingLeft: '220px' }}
        />
        <Form variant='filled' onFinish={handleSubmit}>
          <Form.Item
            label='이름 👤'
            name='username'
            rules={[{ required: true, message: '이름을 입력하세요' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='UserName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleSubmit}>축하 메시지 보내기</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default GuestBookForm;

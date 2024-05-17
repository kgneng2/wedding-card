'use client';
import { FormEvent, useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  ConfigProvider,
  Input,
  List,
  Modal,
  Skeleton,
  message,
} from 'antd';
import './styles.scss';
import GuestBookForm from 'src/component/GuestBook/guestBookForm';
import { CloseOutlined } from '@ant-design/icons';
import useBlockScorll from 'src/hook/useBlockScroll';
import dayjs from 'dayjs';

interface IData {
  id: number;
  name: string;
  password: string;
  content: string;
  date: string;
}

const Guestbook = () => {
  const [list, setList] = useState<IData[]>([]);

  const [openForm, setOpenForm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const openModal = (itemId: string) => {
    setItemToDelete(itemId);
    setModalVisible(true);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `/api/guest-book?id=${itemToDelete}&pw=${password}`,
        {
          method: 'DELETE',
        }
      );
      const data = await response.json();

      if (response.ok) {
        message.success(data.message);
        setModalVisible(false); // 모달 닫기
        fetchGuestbook(); // 데이터 다시 불러오기
      } else {
        message.warning(data.message);
      }
    } catch (error) {
      message.error('삭제에 실패했습니다');
      console.error('Error submitting data:', error);
    }
  };

  const toggleOpenForm = () => {
    setOpenForm(!openForm);
  };

  useBlockScorll(openForm);
  useBlockScorll(modalVisible);

  const fetchGuestbook = async (size?: number) => {
    try {
      setLoading(true); // 로딩 시작
      const response = await fetch(`/api/guest-book`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });

      const { data } = await response.json();

      if (size) {
        setList(data.slice(0, size));
      } else {
        setList(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  useEffect(() => {
    fetchGuestbook(3);
  }, []);

  const handleSubmit = async (data: IData) => {
    const { name, password, content } = data;
    try {
      setLoading(true); // 로딩 시작

      const formData = new FormData();
      formData.append('name', name);
      formData.append('password', password);
      formData.append('content', content);

      const response = await fetch('/api/guest-book', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        message.error('방명록 작성에 실패했습니다.');
      }

      message.success('방명록 작성이 성공했습니다.');
      
      const { data } = await response.json();

      setList(data.slice(0, 3));

    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  const moreAction = async () => {
    fetchGuestbook(0);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultActiveBorderColor: '#a2d3cd',
            defaultActiveColor: '#a2d3cd',
            defaultHoverBorderColor: '#a2d3cd',
            defaultHoverColor: '#a2d3cd',
            defaultBg: '#a2d3cd',
            defaultBorderColor: '#a2d3cd',
            defaultColor: '#ffff',
            colorPrimaryBg: '#eeee',
            primaryColor: '#ffff',
            colorPrimary: '#aaaa',
            paddingInline: 20,
          },
        },
      }}
    >
      <div className='guest-book'>
        <div className='header'>
          <div className='title'>Guest Book</div>
          <div className='body'>
            신랑 & 신부의 행복한 앞날을 위해 <br />
            따뜻한 덕담 한 말씀 남겨주세요. <br />
            소중한 추억으로 간직하겠습니다.
          </div>

          <Button onClick={toggleOpenForm}>축하 메시지 작성하기</Button>
          {openForm && (
            <>
              <div className='overlay' onClick={toggleOpenForm}></div>
              <GuestBookForm
                onSubmit={handleSubmit}
                toggleOpenForm={toggleOpenForm}
              />
            </>
          )}
        </div>
        <List
          className='demo-loadmore-list container'
          itemLayout='horizontal'
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <CloseOutlined
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(`${item.id}`);
                  }}
                />,
              ]}
            >
              <Skeleton avatar title={false} loading={loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={
                    <div>
                      <span style={{ fontStyle: 'italic', fontSize: 13 }}>
                        From{' '}
                      </span>
                      {item.name} 💬
                      <span
                        style={{
                          paddingLeft: 10,
                          fontWeight: 100,
                          fontSize: 11,
                        }}
                      >
                        {dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')}
                      </span>
                    </div>
                  }
                  description={item.content}
                />
              </Skeleton>
            </List.Item>
          )}
        />
        <Modal
          title='비밀번호를 입력하세요'
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          onOk={handleDelete}
        >
          <Input.Password
            placeholder='비밀번호 입력'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Modal>
        <Button style={{ width: 150, marginTop: 15 }} onClick={moreAction}>
          {' '}
          더보기{' '}
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default Guestbook;

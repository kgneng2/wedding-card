import { useEffect, useState } from 'react';
import { Avatar, Button, ConfigProvider, Layout, List, Skeleton } from 'antd';
import './styles.scss';
import GuestBookForm from 'src/component/GuestBook/guestBookForm';
import { CloseOutlined } from '@ant-design/icons';
// import guestbookAPI from '../lib/guestbookAPI';

const { Header, Content } = Layout;

interface IData {
  name: string;
  password: string;
  content: string;
  date: string;
}

const GuestbookPage = () => {
  const [list, setList] = useState<IData[]>([
    {
      name: '강준영',
      password: '1234',
      content: 'asdflhdasnlkndasklfnasdlfndaslkfndsalnf las nfsdakfndsalknlk',
      date: '2024-02-10',
    },
  ]);
  const [openForm, setOpenForm] = useState(false);

  const [loading, setLoading] = useState(false);

  const toggleOpenForm = () => {
    setOpenForm(!openForm);
  };

  //   useEffect(() => {
  //     const fetchGuestbook = async () => {
  //       const data = await guestbookAPI.fetchGuestbook();
  //       setEntries(data.entries);
  //     };
  //     fetchGuestbook();
  //   }, []);

  //   const handleSubmit = async (guestName) => {
  //     await guestbookAPI.addGuestbookEntry(guestName);
  //     const updatedEntries = await guestbookAPI.fetchGuestbook();
  //     setEntries(updatedEntries.entries);
  //   };

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
            따듯한 덕담 한 말씀 남겨주세요. <br />
            소중한 추억으로 간직하겠습니다.
          </div>

          <Button onClick={toggleOpenForm}>축하 메시지 작성하기</Button>
          {openForm && (
            <>
              <div className='overlay' onClick={toggleOpenForm}></div>
              <GuestBookForm
                onSubmit={console.log}
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
                  onClick={() => {
                    console.log('삭제');
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
                      From {item.name}{' '}
                      <span
                        style={{
                          paddingLeft: 10,
                          fontWeight: 200,
                          fontSize: 12,
                        }}
                      >
                        {item.date}
                      </span>
                    </div>
                  }
                  description={item.content}
                />
              </Skeleton>
            </List.Item>
          )}
        />
        <Button style={{ width: 150 }}> 더보기 </Button>
      </div>
    </ConfigProvider>
  );
};

export default GuestbookPage;

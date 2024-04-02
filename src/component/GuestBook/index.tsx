import { useEffect, useState } from 'react';
import { Button, ConfigProvider, Layout, List } from 'antd';
import './styles.scss';
import GuestBookForm from 'src/component/GuestBook/guestBookForm';
// import guestbookAPI from '../lib/guestbookAPI';

const { Header, Content } = Layout;

const GuestbookPage = () => {
  const [list, setList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

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
    <div className='guest-book'>
      <div className='header'>
        <div className='title'>Guest Book</div>
        <div className='body'>
          신랑 & 신부의 행복한 앞날을 위해 <br />
          따듯한 덕담 한 말씀 남겨주세요. <br />
          소중한 추억으로 간직하겠습니다.
        </div>
      </div>
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
      </ConfigProvider>
      <Layout>
        <Content style={{ padding: '20px' }}>
          <List
            className='demo-loadmore-list'
            itemLayout='horizontal'
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta title={'강준영'} />
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default GuestbookPage;

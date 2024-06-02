import { Tabs } from 'antd';
import './styles.scss';

const NavigationBar = ({ onChange }) => {
  const tabArray = [
    {
      label: '모시는 글',
      id: 'invitation',
    },
    {
      label: '일정',
      id: 'calendar',
    },
    {
      label: '오시는 길',
      id: 'location',
    },
    {
      label: '예식 정보',
      id: 'information',
    },
    {
      label: '마음 전하실 곳',
      id: 'money',
    },
  ];
  return (
    <div className='navi'>
      <Tabs
        className='tabss'
        centered
        onChange={(id) => {
          onChange(id);
        }}
        items={tabArray.map((data, i) => {
          const id = data.id;
          return {
            label: data.label,
            key: id,
            children: '',
          };
        })}
      />
    </div>
  );
};

export default NavigationBar;

import { Tabs } from 'antd';
import './styles.scss';

const NavigationBar: React.FC<{
  onChange: React.Dispatch<React.SetStateAction<number>>;
}> = ({ onChange }) => {
  const tabArray = [
    {
      label: '모시는 글',
    },
    {
      label: '일정',
    },
    {
      label: '오시는 길',
    },
    {
      label: '예식 정보',
    },
    {
      label: '마음 전하실 곳',
    },
  ];
  return (
    <div className='navi'>
      <Tabs
        className='tabss'
        centered
        onChange={(key) => {
          onChange(+key);
        }}
        items={tabArray.map((data, i) => {
          const id = String(i);
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

import { Tabs } from 'antd';
import './styles.scss';
import { useEffect, useState } from 'react';

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

  const [activeTab, setActiveTab] = useState('invitation');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabArray.map((tab) => document.getElementById(tab.id));
      let currentSectionId = 'invitation';

      sections.forEach((section) => {
        const rect = section?.getBoundingClientRect();

        if (rect != undefined) {
          if (rect!!.top <= 150 && rect!!.bottom >= 150) {
            currentSectionId = section!!.id;
          }
        }
      });

      setActiveTab(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabArray]);

  return (
    <div className='navi'>
      <Tabs
        className='tabss'
        centered
        onChange={(id) => {
          onChange(id);
          setTimeout(() => {
            setActiveTab(id);
          }, 1500);
        }}
        activeKey={activeTab}
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

'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import '../App.scss';

import Greeting from 'src/component/Greeting';
const Contact = dynamic(() => import('../../component/Contact'), {
  ssr: false,
});
import Calendar from 'src/component/Calendar';
const Dday = dynamic(() => import('../../component/Dday'), { ssr: false });
const Location = dynamic(() => import('../../component/Location'), {
  ssr: false,
});

const Information = dynamic(() => import('../../component/Information'), {
  ssr: false,
});

const ShowMeTheMoney = dynamic(() => import('../../component/ShowMeTheMoney'), {
  ssr: false,
});

import { ConfigProvider } from 'antd';
import GNB from 'src/component/GNB';
import Blank from 'src/component/Blank';

export default function Page() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: '#a2d3cd',
            itemHoverColor: '#a2d3cd',
            itemSelectedColor: '#a2d3cd',
            titleFontSize: 14,
            // fontWeightStrong: 1,
          },
        },
      }}
    >
      <div className='app'>
        <GNB />
        <Greeting />
        <Contact />
        <Calendar />
        <Dday />
        <Location />
        <Information />
        <ShowMeTheMoney />
        <Blank />
      </div>
    </ConfigProvider>
  );
}

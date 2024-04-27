'use client';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import '../App.scss';

const Invitation = dynamic(() => import('../../component/Invitation'), {
  ssr: false,
});

const Contact = dynamic(() => import('../../component/Contact'), {
  ssr: false,
});

const Calendar = dynamic(() => import('../../component/Calendar'), {
  ssr: false,
});

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

const Bye = dynamic(() => import('../../component/Bye'), {
  ssr: false,
});

const NavigationBar = dynamic(() => import('../../component/NavigationBar'), {
  ssr: false,
});

import { ConfigProvider } from 'antd';
import GNB from 'src/component/GNB';
import Blank from 'src/component/Blank';

export default function Page() {
  const focusRef = [
    'invitationRef',
    'calendarRef',
    'locationRef',
    'informationRef',
    'moneyRef',
  ];

  const pageRef = {
    invitationRef: useRef(null),
    calendarRef: useRef(null),
    locationRef: useRef(null),
    informationRef: useRef(null),
    moneyRef: useRef(null),
  };

  const [focus, setFocus] = useState(1);

  useEffect(() => {
    // pageRef['invitationRef'].current?.scrollIntoView({ behavior: 'smooth' });
    pageRef[focusRef[focus]].current?.scrollIntoView({ behavior: 'smooth' });

  }, [focus]);

  return (
    <div className='app'>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: '#a2d3cd',
              itemHoverColor: '#a2d3cd',
              itemSelectedColor: '#a2d3cd',
              titleFontSize: 12,
            },
          },
        }}
      >
        <NavigationBar onChange={setFocus} />
      </ConfigProvider>
      <div ref={pageRef.invitationRef}>
        <Invitation />
      </div>
      <Contact />
      <div ref={pageRef.calendarRef}>
        <Calendar />
        <Dday />
      </div>
      <div ref={pageRef.locationRef}>
        <Location />
      </div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: '#a2d3cd',
              itemHoverColor: '#a2d3cd',
              itemSelectedColor: '#a2d3cd',
              titleFontSize: 14,
            },
          },
        }}
      >
        <div ref={pageRef.informationRef}>
          <Information />
        </div>
      </ConfigProvider>
      <div ref = {pageRef.moneyRef} >
        <ShowMeTheMoney />
      </div>
      <Bye />
      <Blank />
      <GNB />
    </div>
  );
}

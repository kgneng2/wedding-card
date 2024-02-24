import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';

const MapInstance = () => {
  useEffect(() => {
    const mapOption = {
      center: new naver.maps.LatLng(37.4682994592947, 127.0390503063),
      zoom: 16,
    };

    const map = new window.naver.maps.Map('map', mapOption);

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.4682994592947, 127.0390503063),
      map: map,
      title: 'Naver Map API',
    });
  }, []);

  return (
    <div>
      <div id='map' className='map' />
    </div>
  );
};

export default MapInstance;

// 지도 API 조사 필요함

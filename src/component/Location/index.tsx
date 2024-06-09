import { useEffect } from 'react';
import './styles.scss';
import { Button, message } from 'antd';

import mapImg from '../../../public/images/map.png';
import { CopyOutlined } from '@ant-design/icons';
import Image from 'next/image';

const Location = () => {
  useEffect(() => {
    const mapOption = {
      center: new naver.maps.LatLng(37.4682994592947, 127.0390503063),
      zoom: 15,
    };

    const map = new window.naver.maps.Map('map', mapOption);

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.4682994592947, 127.0390503063),
      map: map,
      title: 'Naver Map API',
    });
  }, []);

  // const [messageApi, contextHolder] = message.useMessage();  todo 좀더 고도화

  const naviMapAction = () => {
    window.location.href = 'https://m.place.naver.com/place/11534903/home';
    // 'https://map.naver.com/p/search/%EC%96%91%EC%9E%ACAt%ED%8F%AC%EB%A0%88/place/11534903?c=15.00,0,0,0,dh&isCorrectAnswer=true';
  };

  const copyAction = () => {
    const addressText = '서울 서초구 강남대로 27 (양재동232번지) aT포레웨딩홀';

    navigator.clipboard
      .writeText(addressText)
      .then(() => message.success('주소가 복사되었습니다.'))
      .catch((error) => console.error(error));
  };

  return (
    <div id='location' className='location'>
      <div className='container'>
        <div className='header'>
          <h4 className='title'> Location </h4>
          <div className='sub-title'> 오시는 길 </div>
        </div>
        <div id='map' className='map' />
        <div className='address'>
          서울 서초구 강남대로 27 (양재동232번지)
          <br />
          aT포레 웨딩홀 5층
          <div className='navigation'>
            <Button className='btn' onClick={naviMapAction}>
              <Image src={mapImg} width={20} height={20} alt={'mapimage'} />
              <span className='txt'>네이버</span>
              빠른길 찾기
            </Button>
            <Button className='btn' onClick={copyAction}>
              <CopyOutlined />
              주소 복사하기
            </Button>
          </div>
        </div>
        <div className='info-box'>
          <div className='info-ti'> 자가용 🚗</div>
          <div className='info-txt'>
            네비게이션 : "AT센터" 검색
            <div>
              - 경부고속도로 양재 IC 개포, 가락방향 진출 후 염곡사거리에서
              좌회전 후 U턴 꽃시장 옆
            </div>
          </div>
        </div>
        <div className='info-box'>
          <div className='info-ti'> 지하철 🚇 </div>
          <div className='info-txt'>
            신분당선 양재시민의숲역(매헌) 하차
            <div>
            - 지상 4번출구 이용 / 지하 내부 통로로 바로 연결 가능{' '}
            </div>
            <div>
            - 2호선 강남역과 3호선 양재역에서 신분당선 환승 가능
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

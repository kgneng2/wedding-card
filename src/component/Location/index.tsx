
import { useEffect } from 'react';
import './styles.scss';
import { Button } from 'antd';

import mapImg from '../../../public/images/map.png';
import { CopyOutlined } from '@ant-design/icons';

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
    window.location.href =
      'https://map.naver.com/?eText=%EB%8D%94%ED%8F%AC%EB%A0%88&amp;eType=SITE_1&amp;edid=11534903&amp;elng=b08f5c1d7950deeb7a58cbbd4ef5ac44&amp;elat=1ace7188539df29d76e2a4203c254176';
  };

  const copyAction = () => {
    const addressText = '서울 서초구 강남대로 27 (양재동232번지) aT포레웨딩홀';

    navigator.clipboard
      .writeText(addressText)
      .then(() => alert('주소가 복사되었습니다.'))
      .catch((error) => console.error(error));
  };

  return (
    <div className='location'>
      <div className='container'>
        <div className='header'>
          <h4 className='title'> Location </h4>
          <div className='sub-title'> 오시는 길 </div>
        </div>
        <div id='map' className='map' />
        <div className='address'>
          aT포레 웨딩홀 (5층)
          <br />
          서울 서초구 강남대로 27 (양재동232번지)
          <div className='navigation'>
            <Button className='btn' onClick={naviMapAction}>
              <img src={mapImg.src} width='20' height='20' />
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
            <div className='indent'>· 경부고속도로 양재 IC 개포, 가락방향 진출 후 염곡사거리에서</div>
            <div className='indent2'>좌회전 후 U턴 꽃시장 옆</div>
          </div>
        </div>
        <div className='info-box'>
          <div className='info-ti'> 지하철 🚇 </div>
          <div className='info-txt'>
          신분당선 양재시민의숲역(매헌) 하차
          <div className='indent'>· 지상 4번출구 이용 / 지하 내부 통로로 바로 연결 가능 </div>
          <div className='indent'>· 2호선 강남역과 3호선 양재역에서 신분당선 환승 가능</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

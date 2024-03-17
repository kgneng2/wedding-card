/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react';
import './styles.scss';
import { Button, message } from 'antd';

import mapImg from '../../images/map.png';
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
              <img src={mapImg} width='20' height='20' />
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
          <div className='info-ti'> 자가용 </div>
          <div className='info-txt'>
            네비게이션 : "AT센터" 검색 <br />- 경부고속도로 양재 IC 개포,
            가락방향 진출 후 염곡사거리에서 좌회전 후 U턴 꽃시장 옆
          </div>
        </div>
        <div className='info-box'>
          <div className='info-ti'> 지하철 </div>
          <div className='info-txt'>
            신분당선 양재시민의숲역(매헌) 하차 <br />
            - 지상 4번출구 이용 / 지하 내부 통로로 바로 연결 가능 <br />- 2호선
            강남역과 3호선 양재역에서 신분당선 환승 가능
          </div>
        </div>
        {/* <div className='info-box'>
          <div className='info-ti'> 버스 </div>
          <div className='info-txt'>
            버스(초록지선, 파랑간선), 일반버스 - "AT센터.양재꽃시장"에서 하차
            <br />
            - 서울-초록버스 : 0411, 4432 <br />
            - 서울-파랑버스 140, 400, 405, 421, 440, 441, 452, 470, 741 <br />
            - 경기 : 11-3, 917(잠실, 과천, 안양) <br />
            좌석버스, 빨강 광역노선 - "시민의숲.양재꽃시장"에서 하차 <br />
            - (광역버스) 9404, 9408, 9409, 9711 <br />- (인천) 9100, 9200, 9201,
            9300, 9500, 9501, 9802 M6405, M6450 <br />
            - (성남) 9408, 9400 <br />
            - (수원) 3002, 3007, 3008 <br />
            - (용인) 5001, 5001-1, 5002B <br />
            - (경기버스) 1311, 1550, 1550-1, 1560 <br />- 마을버스 -
            "시민의숲.양재꽃시장"에서 하차 (양재역) 서초 20
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Location;

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '강준영 ❤️ 최산하 우리 결혼합니다 ',
  description: '주녕이와 사나의 모바일 청첩장',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang='en'>
      <head>
        <link href="https://hangeul.pstatic.net/hangeul_static/css/maru-buri.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <script
          type='text/javascript'
          src='https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=usk1bgr0t6'
        ></script>
      </head>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}

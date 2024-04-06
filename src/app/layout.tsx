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
        <script
          type='text/javascript'
          src='https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=usk1bgr0t6'
        ></script>
      </head>
      <body>
          {children}
        {/* <div id='root'> */}
          {/* </div> */}
      </body>
    </html>
  );
}

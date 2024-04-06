import { ClientOnly } from './client';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return <ClientOnly />;
}
//dday때문에 client only로 가져와야하는 부분이 있음. (카운터 다운 이슈)




//여기서 client page를 가져오고,,.,
//데이터 가져와서 전달하면 되는듯?  ClientOnly https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration

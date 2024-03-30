import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <ClientOnly />
}

//여기서 client page를 가져오고,,., 
//데이터 가져와서 전달하면 되는듯?  ClientOnly https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration

import { usePathname, useRouter } from 'next/navigation';

const useDynamicBaseUrl = () => {
  const currentPath = usePathname();
  const router = useRouter();

  const onClick = () => {
    router.push(getBaseUrl().baseUrl);
  };

  const getBaseUrl = () => {
    if (currentPath === '/invitation') {
      return { baseUrl: '/', text: '💍 갤러리 보기' };
    }
    return { baseUrl: '/invitation', text: '👰🏻‍♀️ 예식 안내' };
  };

  return {
    urlData: getBaseUrl(),
    onClick: onClick,
  };
};

export default useDynamicBaseUrl;

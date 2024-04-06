const useDynamicBaseUrl = () => {
  const getBaseUrl = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/invitation') {
      return { baseUrl: '/', text: '💍 갤러리 보기' };
    }
    return { baseUrl: '/invitation', text: '👰🏻‍♀️ 결혼식 안내' };
  };

  return getBaseUrl();
};

export default useDynamicBaseUrl;

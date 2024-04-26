import React, { createContext, useContext, useState, useEffect } from 'react';

const VisitedContext = createContext({
  visited: false,
  setVisited: (prev) => {},
});

// VisitedProvider 컴포넌트를 사용하여 방문 상태 관리
export const VisitedProvider = ({ children }) => {
  const [visited, setVisited] = useState(false);

  // 컴포넌트가 마운트될 때 세션 스토리지에서 방문 상태 확인
  useEffect(() => {
    const isVisited = sessionStorage.getItem('visited');
    console.log(isVisited, visited);

    if (isVisited) {
      setVisited(true);
    } else {
      sessionStorage.setItem('visited', 'true');
      setVisited(false);
    }
  }, []);

  return (
    <VisitedContext.Provider value={{ visited, setVisited }}>
      {children}
    </VisitedContext.Provider>
  );
};

// 사용자 정의 훅을 사용하여 VisitedContext에 접근
export const useVisited = () => useContext(VisitedContext);

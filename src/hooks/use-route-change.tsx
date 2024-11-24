import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type RouteChangeCallback = (pathname: string) => void;

export const useRouteChange = (callback: RouteChangeCallback) => {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (prevLocation.current.pathname !== location.pathname) {
      callback(location.pathname);
      prevLocation.current = location;
    }
  }, [location, callback]);
};

export default useRouteChange;

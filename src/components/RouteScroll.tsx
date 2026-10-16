import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const RouteScroll = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = window.requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
      return () => window.cancelAnimationFrame(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};
export default RouteScroll;
import { useState, useEffect } from "react";

export function useScrollNav(minY: number): boolean {
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= minY) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, [minY]);
  return scrollNav;
}

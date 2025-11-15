import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Update state after mounting to prevent SSR mismatch
      checkScreenSize();

      // Use setTimeout to schedule the mount state update to avoid direct setState in effect
      const timer = setTimeout(() => {
        setHasMounted(true);
      }, 0);

      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
        clearTimeout(timer);
      };
    }
  }, []);

  // Prevent hydration mismatch by returning the initial state until after mount
  return hasMounted ? isMobile : false;
};

export default useScreenSize;

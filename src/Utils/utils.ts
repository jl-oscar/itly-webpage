import { useEffect, useState } from "react";

export const IsMobileDevice = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        const isMobileDevice = window.innerWidth <= 768; // Set your preferred mobile width breakpoint here (e.g., 768 pixels)
        setIsMobile(isMobileDevice);
      };
  
      // Initial check when the component mounts
      handleResize();
  
      // Event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return isMobile;
  }
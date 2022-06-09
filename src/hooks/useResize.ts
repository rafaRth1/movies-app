import { useEffect, useState } from 'react';

const useResize = () => {
   const [width, setWidth] = useState<number>(window.innerWidth);
   const [height, setHeight] = useState<number>(window.innerHeight);

   useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };

   return { width, height };
};

export default useResize;

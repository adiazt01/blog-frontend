import { useEffect, useState } from "react";

export const useCloseMenuOnLargeScreens = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      const isScreenLarge = window.innerWidth > 768;

      if (isScreenLarge && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isOpen]);

  return { isOpen, setIsOpen };
};

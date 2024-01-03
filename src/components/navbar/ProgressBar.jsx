import { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const calculateScrollDistance = () => {
    const scrollTop = window.scrollY; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocumentHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setScroll(scrollPosition);
  };

  const getDocumentHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollDistance);
    return () => {
      window.removeEventListener("scroll", calculateScrollDistance);
    };
  });

  return (
    <div className="w-full z-30 sticky top-16 bg-gray-100 h-2.5 ">
      <div
        className="bg-sky-700 h-2.5 rounded-r-full"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
};

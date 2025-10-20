import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { BsArrowDownCircleFill } from 'react-icons/bs';
function ScrollButtons() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollY < 400) {
        setShow(true);
      }
      else if (scrollY + windowHeight < documentHeight - 400) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50" title="scroll to bottom">
      {show ? (
        <div
          onClick={scrollToBottom}
          className=""
        >
          <BsArrowDownCircleFill size={40} className="text-sky-400 " title="scroll to bottom"/>
        </div>
      ) : (
        <div
          onClick={scrollToTop}

        >
          <BsArrowUpCircleFill size={40} className="text-sky-400" title="scroll to top"/>
        </div>
      )}
    </div>
  );
}

export default ScrollButtons;

import React, { useRef } from 'react';
import "./scrollbutton.css";

const ScrollButton = () => {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button onClick={scrollToBottom} className="scroll"style={{  bottom: '25px', right: '25px' }}>
        B
      </button>
      <div ref={bottomRef} />
    </>
  );
};

export default ScrollButton;

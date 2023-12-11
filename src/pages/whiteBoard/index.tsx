import React, { useRef } from "react";

const WhiteBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <div className="main">
      <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default WhiteBoard;
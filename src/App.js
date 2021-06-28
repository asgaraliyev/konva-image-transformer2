import { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
export default function App() {
  const [isSelected, setIsSelected] = useState(false);
  function checkDeselect(e) {
    const didTouchStage = e.target === e.target.getStage();
    if (didTouchStage) setIsSelected(false);
  }
  return (
    <Stage
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      width={window.innerWidth}
      height={window.innerHeight}
    ></Stage>
  );
}

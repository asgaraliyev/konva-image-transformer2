import { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import ImageTransformer from "./components/ImageTransformer";
export default function App() {
  const [isSelected, setIsSelected] = useState(false);
  const imageUrl =
    "https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg";
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
    >
      <Layer>
        <ImageTransformer
          url={imageUrl}
          width={100}
          height={100}
          isSelected={true}
        />
      </Layer>
    </Stage>
  );
}

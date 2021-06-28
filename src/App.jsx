import { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import "./style.scss";
import "antd/dist/antd.css";
import ImageTransformer from "./components/ImageTransformer";
import Footer from "./components/Footer";
import Dialog from "./components/Dialog";
export default function App() {
  const [didTouchStage, setDidTouchStage] = useState(false);
  const imageUrl =
    "https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg";
  function checkDeselect(e) {
    const didTouchStage = e.target === e.target.getStage();
    setDidTouchStage(didTouchStage);
  }
  return (
    <>
      <Dialog />
      <Stage
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        width={window.innerWidth}
        height={window.innerHeight - 40}
      >
        <Layer>
          <ImageTransformer
            url={imageUrl}
            didTouchStage={didTouchStage}
            width={100}
            height={100}
            x={300}
            y={30}
          />
          <ImageTransformer
            url={imageUrl}
            didTouchStage={didTouchStage}
            x={100}
            y={200}
            width={100}
            height={100}
          />
        </Layer>
      </Stage>
      <Footer />
    </>
  );
}

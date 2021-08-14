import { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import "./style/style.scss";
import "./style/my.scss";
import "antd/dist/antd.css";
import ImageTransformer from "./components/ImageTransformer";
import Footer from "./components/Footer";
import Dialog from "./components/Dialog";
import { useSelector } from "react-redux";
export default function App() {
  const [didTouchStage, setDidTouchStage] = useState(false);
  const imageUrl =
    "https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg";
  function checkDeselect(e) {
    const didTouchStage = e.target === e.target.getStage();
    setDidTouchStage(didTouchStage);
  }
  const items = useSelector((state) => state.Items);
  return (
    <>
      <Dialog />
      <Stage
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        width={window.innerWidth}
        height={window.innerHeight - 100}
      >
        <Layer>
          {items.map((item) => {
            if (item?.item_type === "IMAGE") {
              return (
                <ImageTransformer
                  key={item?.id}
                  url={item?.image_url}
                  didTouchStage={didTouchStage}
                  width={item?.size[0]}
                  height={item?.size[1]}
                  x={300}
                  y={30}
                />
              );
            }
          })}
        </Layer>
      </Stage>
      <Footer />
    </>
  );
}

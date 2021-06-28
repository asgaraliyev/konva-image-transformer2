import useImage from "use-image";
import { Image, Transformer } from "react-konva";
import { useEffect, useState, useRef } from "react";
export default function Index({ url, didTouchStage, ...rest }) {
  const [image] = useImage(url);
  const transformerRef = useRef();
  const imageRef = useRef();
  const [isSelected, setIsSelected] = useState(false);

  function selectHandler(data) {
    setIsSelected(data);
  }
  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([imageRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  useEffect(() => {
    if (didTouchStage) {
      selectHandler(false);
    }
  }, [didTouchStage]);
  return (
    <>
      <Image
        ref={imageRef}
        {...rest}
        image={image}
        onTap={() => {
          selectHandler(true);
        }}
        onClick={() => {
          selectHandler(true);
        }}
        draggable
      />
      {isSelected && <Transformer ref={transformerRef} />}
    </>
  );
}

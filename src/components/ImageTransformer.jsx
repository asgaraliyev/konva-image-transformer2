import useImage from "use-image";
import { Image } from "react-konva";
import { useEffect, useState, useRef, Transformer } from "react";
export default function Index({ url, ...rest }) {
  const [image] = useImage(url);
  const transformerRef = useRef();
  const imageRef = useRef();
  const [isSelected, setIsSelected] = useState(false);

  function selectHandler(data) {
    setIsSelected(data);
  }
  useEffect(() => {
    if (isSelected) {
    }
  }, [isSelected]);
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

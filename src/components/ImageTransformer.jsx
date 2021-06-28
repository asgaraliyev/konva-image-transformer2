import useImage from "use-image";
import { Image } from "react-konva";
export default function Index({ url, isSelected, ...rest }) {
  const [image] = useImage(url);
  return (
    <>
      <Image {...rest} />
      {isSelected && <></>}
    </>
  );
}

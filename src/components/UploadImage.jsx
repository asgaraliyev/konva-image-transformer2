import React, { useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
const { Dragger } = Upload;
export default function Index() {
  const dispatch = useDispatch();
  const [uploadImage, setUploadImage] = useState(null);
  const props = {
    name: "file",

    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        const file = info?.file?.originFileObj;
        const fileUrl = URL.createObjectURL(file);
        const img = new Image();
        img.onload = function () {
          const self = this;

          dispatch({
            type: "CHANGE_CURRENT_ITEM",
            item_type: "IMAGE",
            name: file.name,
            image_url: fileUrl,
            size: [self.width, self.height]
          });
          setUploadImage(fileUrl);
        };
        img.src = fileUrl;
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    }
  };
  return (
    <Dragger {...props}>
      {uploadImage ? (
        <img id="upload-image" src={uploadImage}></img>
      ) : (
        <>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </>
      )}
    </Dragger>
  );
}

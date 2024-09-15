import React from "react";

const cloudName = "dkhpxyxnt";
const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

interface CloudinaryImageProps {
  public_id: string;
  onClick: () => void;
  height?: number;
  width?: number;
  alt?: string;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  public_id,
  onClick,
  alt,
  height,
  width,
}) => {
  const src = new URL(`${baseUrl}`);

  if (height) src.pathname += `/h_${height}`;
  if (width) src.pathname += `/w_${width}`;

  src.pathname += `/${public_id}`;

  return <img onClick={onClick} src={src.toString()} alt={alt || public_id} />;
};

export default CloudinaryImage;

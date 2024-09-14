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
  let src = `${baseUrl}/${public_id}`;
  if (height) src += `?h_${height}`;
  if (width) src += `?w_${width}`;
  return <img onClick={onClick} src={src} alt={alt || public_id} />;
};

export default CloudinaryImage;

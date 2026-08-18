const imageData = {
  imageURL: "../public/favicon.svg",
  imageAlt: "React logo",
  imageSize: 100,
};

const ImageObject = () => {
  return (
    <div>
      <img
        src={imageData.imageURL}
        alt={imageData.imageAlt}
        style={{
          height: imageData.imageSize,
          width: imageData.imageSize,
        }}
      />
    </div>
  );
};

export default ImageObject;

import { useState } from "react";

function ProductImages({ images }) {
  let [mainImage, setMainImage] = useState(images[0]);

  function handleClick(img) {
    setMainImage(img);
  }
  return (
    <div className="img-container">
      <div className="grid grid-four-column">
        {images.map((image, index) => {
          return (
            <figure key={index}>
              <img
                key={index}
                src={image}
                alt={image}
                className="box-image-style"
                onClick={() => {
                  handleClick(image);
                }}
              />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={mainImage} alt={mainImage} className="main-screen-img" />
      </div>
    </div>
  );
}

export default ProductImages;

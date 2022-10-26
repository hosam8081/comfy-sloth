import React, { useState } from "react";

const SingleImage = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div>
      <div>
        <img
          src={main.url}
          alt="main"
          className="h-[500px] w-full rounded-sm object-cover block"
        />
      </div>
      <div className="grid grid-cols-5 gap-x-4 mt-5">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`h-20 w-full object-cover rounded cursor-pointer ${
                main.url === image.url
                  ? "border-main border-2"
                  : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleImage;

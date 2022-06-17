import { useState } from "react";
import { Image } from "../../Interfaces";

const LazyLoadImg = (image: Image) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      className={loaded ? image.style : "placeholder " + image.ratio}
      onLoad={() => setLoaded(true)}
      src={image.src}
      alt={image.alt}
      style={{ objectPosition: "top" }}
      loading="lazy"
    />
  );
};

export default LazyLoadImg;

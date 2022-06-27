import { useState } from "react";
import { Image } from "../../Interfaces";

const LazyLoadImg = (image: Image) => {
  const [loaded, setLoaded] = useState(false);

  function calcClassName(): string {
    let clazz = "";
    if (image.viewportRelative) {
      clazz += image.ratio + "vpr ";
      clazz += loaded ? image.style : "placeholder";
      return clazz;
    }
    return loaded ? image.style : "placeholder " + image.ratio;
  }

  return (
    <img className={calcClassName()} onLoad={() => setLoaded(true)} src={image.src} alt={image.alt} loading="lazy" />
  );
};

export default LazyLoadImg;

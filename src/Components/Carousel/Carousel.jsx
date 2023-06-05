import { useState } from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const changeLeft = (value) => {
    if (value - 1 < 0) {
      setIndex(images.length - 1);
      return;
    }

    setIndex(value - 1);
  };

  const changeRight = (value) => {
    if (value + 1 > images.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(value + 1);
  };

  return (
    <>
      <button className="button-a" onClick={() => changeLeft(index)}>
        &lt;
      </button>
      <img
        className="carousel-image"
        src={images[index].img}
        alt={images[index].name}
      />
      <button className="button-b" onClick={() => changeRight(index)}>
        &gt;{" "}
      </button>
    </>
  );
};

export default Carousel;

import Carousel from "../Carousel/Carousel";

const CarouselContainer = () => {
  const arrayPictures = [
    { img: "./images/electro.webp", name: "Varios electrodomesticos" },
    { img: "./images/gaming.webp", name: "Controles, auriculares, teclado" },
    { img: "./images/plants-drop.jpg", name: "Diferentes tipos de plantas" },
    {
      img: "./images/product-drop.jpg",
      name: "Un collage de distintos tipos de items",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel images={arrayPictures} />
    </div>
  );
};

export default CarouselContainer;

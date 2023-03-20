// import { useState } from "react";
// import { Link } from "react-router-dom";

// const arrayPictures = [
//   {
//     img: "./images/product-drop.jpg",
//     category: "/categories",
//     alt: "productos"
//   },
//   {
//     img: "./images/sports-drop.jpg",
//     category: '/category/indumentaria-deportiva',
//     alt: "categoria indumentaria deportiva"
//   },
//   {
//     img: "./images/plants-drop.jpg",
//     category: '/category/plantas',
//     alt: "categoria plantas"
//   }

// ]


// const Carousel = () => {
//   // const index = Math.floor(Math.random() * 3)
//   const [index, setIndex] = useState(0);


//   const changinPicture = (index) => {
//     if (index === 0 || index < arrayPictures.length - 1)
//       setIndex(prev => prev + 1)

//   }

//   return (
//     <div className="carousel-container">
//       <button onClick={() => changinPicture(index)}>&lt;</button>
//       <Link to={`${arrayPictures[index].category}`}><img src={arrayPictures[index].img} alt={arrayPictures[index].alt} /></Link>
//       <button onClick={() => changinPicture()}>&gt;</button>
//     </div>
//   );
// }

// export default Carousel;

import Carousel from 'react-bootstrap/Carousel';

function CarouselHeader() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block image-carousel"
          src="./images/plants-drop.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block image-carousel"
          src="./images/electro.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block image-carousel"
          src="./images/product-drop.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block image-carousel"
          src="./images/gaming.webp"
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h3>Forth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;








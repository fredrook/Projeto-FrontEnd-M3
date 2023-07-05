import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./carouselStyle.css";

const Carousel = () => {
  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const carouselPictures: string[] = [
    "https://i.ibb.co/LYN1zNX/carousel-1.png",
    "https://i.ibb.co/zQk5N5V/carousel-2.png",
    "https://i.ibb.co/LRC2kM8/carousel-3.png",
    "https://i.ibb.co/2NtmnSY/carousel-4.png",
    "https://i.ibb.co/txyc6x6/carousel-5.png",
    "https://i.ibb.co/T8Lm7tZ/carousel-6.png",
  ];

  return (
    <div id="app__carousel">
      <Slide
        responsive={responsiveSettings}
        cssClass="app__carousel--wrapper"
        indicators={true}
      >
        <div className="app__carousel--img-box" key="img_1">
          <div key="Imagem_Carousel_1" style={{ backgroundImage: `url(${carouselPictures[0]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_2">
          <div key="Imagem_Carousel_2" style={{ backgroundImage: `url(${carouselPictures[1]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_3">
          <div key="Imagem_Carousel_3" style={{ backgroundImage: `url(${carouselPictures[2]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_4">
          <div key="Imagem_Carousel_4" style={{ backgroundImage: `url(${carouselPictures[3]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_5">
          <div  key="Imagem_Carousel_5" style={{ backgroundImage: `url(${carouselPictures[4]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_6">
          <div  key="Imagem_Carousel_6" style={{ backgroundImage: `url(${carouselPictures[5]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Carousel;
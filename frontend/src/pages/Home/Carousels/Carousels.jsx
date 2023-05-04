import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousels.css"
function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousal1"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/AppBanner/Offer/03/Desktop_1920x560_toplisting.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousal1"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Digigold/02/Desktop_1920x694.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>

      <Carousel.Item w="100%" >
        <img
          className="carousal1"
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Page/01/Desktop_2X.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
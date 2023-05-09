import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousels.css";
import { Link } from "react-router-dom";
function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to="/products">
          <img
            className="carousal1"
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/AppBanner/Offer/03/Desktop_1920x560_toplisting.jpg"
            alt="First slide"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/products">
          <img
            className="carousal1"
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Digigold/02/Desktop_1920x694.jpg"
            alt="Second slide"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item w="100%">
        <Link to="/products">
          <img
            className="carousal1"
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Page/01/Desktop_2X.jpg"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;

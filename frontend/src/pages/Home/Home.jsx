import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Carousels from "./Carousels/Carousels";
import picA from "../../Assests/picA.png";
import picB from "../../Assests/picB.png";
import picC from "../../Assests/picC.png";
import picD from "../../Assests/picD.png";
import SliderCard from "../../components/sliderCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
let data__home__img3 = [
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/6Tiles/WEBp/Desktop_party.webp",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/6Tiles/WEBp/Desktop_mangalsutra.webp",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/6Tiles/WEBp/Desktop_mostpopular.webp",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/6Tiles/WEBp/Desktop_rings.webp",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/6Tiles/WEBp/Desktop_kids.webp",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/6Tiles/WEBp/Desktop_bracelets.webp",
];

let data__home__img5 = [
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Personal/04/2X.gif",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Runway/01/1X.jpg",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/RTS/05/2x.gif",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Bestsellers/02/2x.jpg",
];

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="carousel">
        <Carousels />
      </div>
      <div className="home__img2">
        <div>
          <Link to="/products">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/05-MAY/Responsive_Banner/02/Responsive_1.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="/products">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Studs/01/2X.webp"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="/products">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/AppBanner/Newin/01/1X.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
      </div>
      <div class="home__img3">
        {data__home__img3.map((el) => {
          return (
            <div>
              <Link to="/products">
                <img src={el} alt="img" height="100%" width="100%" />
              </Link>
            </div>
          );
        })}
      </div>
      <div class="home__img4">
        <div>
          <Link to="/products">
            <img
              class="zoom__img"
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/Collection/Collection_Harry_potter_2.webp"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>

        <div>
          <div>
            <Link to="/products">
              <img
                class="zoom__img"
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/HPBanner/Collection/01/Collection_ADaa_Product.webp"
                alt="pic1"
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <button class="btn__all__collection">View All Collections</button>
        </div>

        <div>
          <Link to="/products">
            <img
              class="zoom__img"
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Envogue/01/Collection_ENVOUE.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
      </div>

      <div class="home__img5">
        {data__home__img5.map((el) => {
          return (
            <div>
              <Link to="/products">
                <img src={el} alt="img" height="100%" width="100%" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bot-pic">
        <div>
          <img
            src="https://banner.caratlane.com/live-images/4432338e863546609e2d0fed64117351.jpg"
            alt=""
            width="80%"
          />
        </div>
        <div>
          <img
            src="https://banner.caratlane.com/live-images/bdd989ae1f2549ae9f8e8d41c144221e.jpg"
            alt=""
            width="80%"
          />
        </div>
      </div>

      <Link to="">
        <div class="home__img8">
          <div>
            <img
              // class="zoom__img"
              src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png"
              alt="pic1"
            />
            <p>
              The highest quality of craftsmanship and innovation,
              <br />
              that brings you modern, everyday designs.
            </p>
            <button>Know More</button>
          </div>
        </div>
      </Link>
      <div className="deliup">
        <div className="delivery">
          <div className="picA">
            <img src={picA} alt="image1" />
          </div>
          <div className="picB">
            <img src={picB} alt="image2" />
          </div>
          <div className="picC">
            <img src={picC} alt="image3" />
          </div>
          <div className="picD">
            <img src={picD} alt="image4" />
          </div>
        </div>
      </div>
      <SliderCard />
      <h1
        style={{
          textAlign: "left",
          width: "94%",
          margin: " 30px auto",
          fontSize: "24px",
        }}
      >
        Shop Our Instagram
      </h1>
      <div className="insta-container">
        <div className="insta1">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/3.jpg"
            alt="img1"
          ></img>
        </div>
        <div className="insta2">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/2.jpg"
            alt="img2"
          ></img>
        </div>
        <div className="insta3">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/6.jpg"
            alt="img3"
          ></img>
        </div>
        <div className="insta4">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/7.jpg"
            alt="img4"
          ></img>
        </div>
        <div className="insta5">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/4.jpg"
            alt="img5"
          ></img>
        </div>
        <div className="insta6">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/1.jpg"
            alt="img6"
          ></img>
        </div>
        <div className="insta7">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/5.jpg"
            alt="img7"
          ></img>
        </div>
      </div>

      <div class="home__email">
        <div>
          <h2>Sign up to be a CaratLane Insider</h2>
          <input type="email" />
          <button>SUBMIT</button>
          <div class="home__radio">
            <div>
              <input type="radio" name="cheese" id="cheese" />
              <label for="cheese">Female</label>
            </div>
            <div>
              <input type="radio" name="cheese" id="cheese" />
              <label for="cheese">Male</label>
            </div>
            <div>
              <input size="40" type="radio" name="cheese" id="cheese" />
              <label for="cheese">Other</label>
            </div>
          </div>
          <p>Know More about CaratLane</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

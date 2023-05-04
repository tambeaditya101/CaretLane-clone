import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Carousels from "./Carousels/Carousels";
// import { Homecarousel } from "./crousel/crousel"

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
      <div className="carousel">
      <Carousels/>
      </div>
      <div className="home__img2">
        <div>
          <Link to="">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/05-MAY/Responsive_Banner/02/Responsive_1.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Studs/01/2X.webp"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="">
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
              <Link to="">
                <img src={el} alt="img" height="100%" width="100%" />
              </Link>
            </div>
          );
        })}
      </div>
      <div class="home__img4">
        <div>
          <Link to="">
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
            <Link to="">
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
          <Link to="">
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
              <Link to="">
                <img src={el} alt="img" height="100%" width="100%" />
              </Link>
            </div>
          );
        })}
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
    </div>
  );
};

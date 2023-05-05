import React from "react";
import styles from "./navdropcon.module.css";
import { Link } from "react-router-dom";

export const Navbropdowncon = () => {
  return (
    <div className={styles.navdropcon}>
      <div>
        <h3>SHOP BY STYLE</h3>
        <div className={styles.underline}></div>
        <div className={styles.shopBystyles}>
          <div>
            <ul className={styles.navdropconList}>
              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/3e52030aaf3c4b59b34f7825aaefd475.jpg"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">ENGAGEMENT</Link>
                </span>
              </li>
              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/3eec2a8167b54bd096102e07f0cb6d3e.jpg"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">COUPLE RINGS</Link>
                </span>
              </li>
              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg"
                    alt=""
                  />
                </div>
                <span>
                  {" "}
                  <Link to="*"> CASUAL</Link>
                </span>
              </li>

              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/3aa8d1ca304e40d2bc21b6eccac7318e.jpg"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">ADJUSTABLE RINGS</Link>
                </span>
              </li>

              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/c58e3254626a46b398608e1f0e86c725.jpg"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">SILVER RINGS</Link>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <ul className={styles.navdropconList}>
              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">PLANTINUM RINGS</Link>
                </span>
              </li>
              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/94329809fcdf408eb7487e69abd78d21.jpg"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">COCKTAIL</Link>
                </span>
              </li>
              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">BANDS</Link>
                </span>
              </li>

              <li>
                <div>
                  <img
                    srcSet="https://banner.caratlane.com/live-images/b127d70ba53c4dbe9fcb2e56553fc911.jpg"
                    alt=""
                  />
                </div>
                <span>
                  <Link to="*">PROMISE RINGS</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3>SHOP BY METAL & STONE</h3>
        <div className={styles.underline}></div>
        <ul className={styles.shopBystyles1}>
          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png"
                alt=""
              />
            </div>
            <span>
              <Link to="*">GEMSTONE</Link>
            </span>
          </li>
          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png"
                alt=""
              />
            </div>
            <span>
              <Link to="/">SOLITARIE</Link>
            </span>
          </li>

          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                alt=""
              />
            </div>
            <span>
              <Link to="*">DIAMOND</Link>
            </span>
          </li>

          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                alt=""
              />
            </div>
            <span>
              <Link to="*">GOLD</Link>
            </span>
          </li>

          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                alt=""
              />
            </div>
            <span>
              <Link to="*">YELLOW GOLD</Link>
            </span>
          </li>

          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png"
                alt=""
              />
            </div>
            <span>
              <Link to="*">WHITE GOLD</Link>
            </span>
          </li>

          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/40fbb1dbeb9b45b39d004373fd4e4485.png"
                alt=""
              />
            </div>
            <span>
              <Link to="*">ROSE GOLD</Link>
            </span>
          </li>

          <li>
            <div>
              <img
                src="https://banner.caratlane.com/live-images/84581eae59b34f48bffbef0d8d3fc892.png"
                alt=""
              />
            </div>
            <span>
              <Link to="*">SILVER BY SHAYA</Link>
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.shopBY}>
        <h3>SHOP BY</h3>
        <div className={styles.underline}></div>
        <ul>
          <li>FOR MEN</li>
          <li>UNDER $10K</li>
          <li>$10K to $20K</li>
          <li>$ 20K to $30K</li>
          <li>Above $30K</li>
          <li>FOR WOMEN</li>{" "}
        </ul>
      </div>
      <div>
        <img
          src="https://banner.caratlane.com/live-images/ddb6596303814dd7a618df6c0ee4cd1c.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

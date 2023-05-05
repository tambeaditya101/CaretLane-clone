import styles from "./footer.module.css";
import { IoIosCall } from "react-icons/io";
import { RiMessageFill, RiVisaLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaCcMastercard,
  FaCcPaypal,
  FaAmazonPay,
} from "react-icons/fa";
import { TfiPinterest } from "react-icons/tfi";
import { Footermid } from "./Footermid";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerspace}>
          <div className={styles.footerMid}>
            <Footermid />
          </div>
          <ul className={styles.footerList}>
            <li>
              <h3>Know Your Jewellery</h3>
              <ul className={styles.footerList1}>
                <li>DIAMOND GUIDE</li>
                <li>JEWELLERY GUIDE</li>
                <li>GEMSTONES GUIDE</li>
                <li>GOLD RATE</li>
                <li>DIGITAL GOLD</li>
              </ul>
            </li>
            <li>
              <h3>CaratLane Advantage</h3>
              <ul className={styles.footerList1}>
                <li>15-DAY RETURNS</li>
                <li>FREE SHIPPING</li>
                <li>FINANCING OPTIONS</li>
                <li>OLD GOLD EXCHANGE</li>
              </ul>
            </li>
            <li>
              <h3>Customer Service</h3>
              <ul className={styles.footerList1}>
                <li>RETURN POLICY</li>
                <li>ORDER STATUS</li>
              </ul>
            </li>
            <li>
              <h3>About Us</h3>
              <ul className={styles.footerList1}>
                <li>OUR STORY</li>
                <li>PRESS</li>
                <li>BLOG</li>
                <li>CAREERS</li>
              </ul>
            </li>
            <li>
              <h3>Contact Us</h3>
              <ul className={styles.footerList1}>
                <li>
                  <div className={styles.footerContactCon}>
                    <div>
                      <IoIosCall />
                    </div>
                    <div>
                      <RiMessageFill />
                    </div>
                    <div>
                      <BsWhatsapp />
                    </div>
                  </div>
                </li>
                <li>24X7 Enquiry Support ( ALL Days )</li>
                <li>
                  <p>
                    General :{" "}
                    <span className={styles.underline}>
                      Contactus@Precious.Com
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Corporate :{" "}
                    <span className={styles.underline}>B2B@Precious.Com</span>
                  </p>
                </li>
                <li>
                  <p>
                    HR :{" "}
                    <span className={styles.underline}>
                      Careers@Precious.Com
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Grievance :{" "}
                    <span className={styles.underline}>Click Here</span>
                  </p>
                </li>
                <li></li>
              </ul>
            </li>
          </ul>

          <div className={styles.footersocailhandles}>
            <div>
              <div></div>
              <button>FIND A STORE</button>
            </div>
            <div className={styles.footerShcontainer}>
              <ul className={styles.footerSh}>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <TfiPinterest />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>

              <div></div>
            </div>
          </div>

          <div className={styles.footerDownload}>
            <h4>Download Precious app</h4>
            <div className={styles.footerdownoadListCON}>
              <div>
                <div className={styles.footerDownloadlistcontainer}>
                  <div className={styles.footerdownoadList}>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className={styles.footerPaymentOptionCon}>
                <ul className={styles.footerPaymentOption}>
                  <li>
                    <RiVisaLine />
                  </li>
                  <li>
                    <FaCcMastercard />
                  </li>
                  <li>
                    <FaCcPaypal />
                  </li>
                  <li>
                    <FaAmazonPay />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

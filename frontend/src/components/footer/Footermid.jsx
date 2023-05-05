import React, { useState } from "react";
import styles from "./footermid.module.css";
import { IoIosCall } from "react-icons/io";
import { RiMessageFill, RiVisaLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

export const Footermid = () => {
  const [show, dontshow] = useState(false);
  const [cartlane, setcartlane] = useState(false);
  const [customer, setcoustomer] = useState(false);
  const [about, setabout] = useState(false);
  const [contact, setcontact] = useState(false);

  return (
    <div>
      <ul className={styles.footermidList}>
        <li>
          <div
            className={styles.footerAccordin}
            onClick={() => dontshow((prev) => !prev)}
          >
            <h3>Know Your Jewellery</h3>
            <span>{!show ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
          </div>

          {show && (
            <ul className={styles.footerList1}>
              <li>DIAMOND GUIDE</li>
              <li>JEWELLERY GUIDE</li>
              <li>GEMSTONES GUIDE</li>
              <li>GOLD RATE</li>
              <li>DIGITAL GOLD</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={styles.footerAccordin}
            onClick={() => setcartlane((prev) => !prev)}
          >
            <h3>CaratLane Advantage</h3>
            <span>{!cartlane ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
          </div>
          {cartlane && (
            <ul className={styles.footerList1}>
              <li>15-DAY RETURNS</li>
              <li>FREE SHIPPING</li>
              <li>FINANCING OPTIONS</li>
              <li>OLD GOLD EXCHANGE</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={styles.footerAccordin}
            onClick={() => setcoustomer((prev) => !prev)}
          >
            <h3>Customer Service</h3>
            <span>{!customer ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
          </div>

          {customer && (
            <ul className={styles.footerList1}>
              <li>RETURN POLICY</li>
              <li>ORDER STATUS</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={styles.footerAccordin}
            onClick={() => setabout((prev) => !prev)}
          >
            <h3>About Us</h3>
            <span>{!about ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
          </div>
          {about && (
            <ul className={styles.footerList1}>
              <li>OUR STORY</li>
              <li>PRESS</li>
              <li>BLOG</li>
              <li>CAREERS</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={styles.footerAccordin}
            onClick={() => setcontact((prev) => !prev)}
          >
            <h3>Contant Us</h3>
            <span>{!contact ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
          </div>
          {contact && (
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
                  <span className={styles.underline}>Careers@Precious.Com</span>
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
          )}
        </li>
      </ul>
    </div>
  );
};

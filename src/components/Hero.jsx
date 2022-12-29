import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStared from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]"></img>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span>&nbsp;Discount&nbsp;For&nbsp;
          <span className="text-white">1 Month</span>
          &nbsp;Account
        </p>
      </div>

      <div className="flex flex-row jsutify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] leading-[75px] text-white">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
          <br className="sm:block hidden" /> Payment Method.
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStared />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

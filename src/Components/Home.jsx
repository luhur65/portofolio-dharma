/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bg-home.jpg";
import profile from "../images/profile-pic.png";

const imageAltText = "My profile picture";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ margin: "7rem 6rem", textAlign: "center" }}>
        <img
          src={profile}
          alt={imageAltText}
          style={{ width: "13rem", borderRadius: "100%", marginBottom: "2rem" }}
        />
        <h1 style={{ color: "#ffffff" }}>{name}</h1>
        <h2 style={{ color: "#ffffff" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "2rem", left: "48%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

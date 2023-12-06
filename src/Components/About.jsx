/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/bg-about.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Selamat datang di halaman portofolio saya! Saya adalah seorang mahasiswa dan juga pemula yang bersemangat di dunia teknologi dengan keahlian mumpuni di bidang pengembangan website";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Web development",
  "User experience design",
  "User interface design",
  "Front-end development",
  "Back-end development",
  "Laravel Framework",
  "Progressive Web Apps",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Saya adalah penulis kode dengan hasrat mendalam untuk menciptakan solusi inovatif. Sebagai navigator di dunia kompleks pengembangan perangkat lunak, saya menguasai bahasa pemrograman. Setiap baris kode yang saya tulis adalah simfoni dari dedikasi, kreativitas, dan rasa ingin tahu tak terbatas. Bersama-sama, mari kita bangun kisah sukses digital yang tak terlupakan!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Tentang Saya</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", textAlign: "justify" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

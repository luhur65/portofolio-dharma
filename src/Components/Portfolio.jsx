/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Sistem Informasi Sekolah",
    description:
      "Sistem Informasi Sekolah adalah sebuah aplikasi berbasis web yang digunakan untuk mengelola data sekolah. Aplikasi ini dibuat menggunakan framework Laravel 8 dan Bootstrap 4.",
    url: "https://github.com/luhur65/sistem-informasi-sekolah",
  },
  {
    title: "Kuis Matematika",
    description:
      "Kuis Matematika dibuat dengan Python. Aplikasi ini digunakan untuk menguji kemampuan matematika dasar.",
    url: "https://github.com/luhur65/kuis-matematika",
  },
  {
    title: "My Resume Site",
    description:
      "My Resume Site adalah sebuah website untuk memperkenalkan diri. Website ini dibuat menggunakan framework Materialize.",
    url: "https://luhur65.github.io",
  },
  {
    title: "Whatsapp Send Message",
    description:
      "Whatsapp Send Message dibuat dengan Python dan menggunakan Library Selenium. Aplikasi ini digunakan untuk mengirim pesan ke nomor whatsapp tertentu.",
    url: "https://github.com/luhur65/selenium-wa-bot",
  },
  {
    title: "Health App",
    description:
      "Health app adalah sebuah website untuk cek kesehatan mental. Website ini dibuat menggunakan framework Laravel 8 dan Bootstrap 4.",
    url: "https://github.com/luhur65/health-app",
  },
  {
    title: "Toko Online",
    description:
      "Toko Online adalah sebuah website untuk berjualan. Website ini dibuat menggunakan framework Laravel 8 dan Bootstrap 4.",
    url: "https://github.com/luhur65/project-toko-online",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Hasil Karya</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

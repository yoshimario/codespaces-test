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
import image from "../images/IMG_1946.jpeg";

const imageAltText = "pair of white shoes";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Itinerary Prettifier 🎉",
    description:
      "This tool is designed to take raw itinerary data and transform it into a beautifully formatted, color-coded output for both terminal display and plain-text files.",
    url: "https://github.com/yoshimario/itinerary",
  },
  {
    title: "Art Decoder",
    description:
      "Art Decoder is a sleek, cyberpunk-themed web application that allows users to encode and decode text with style.",
    url: "https://github.com/yoshimario/art/tree/main/art-interface",
  },
  {
    title: "My Current CV",
    description:
      "My current CV with my current experiences and skills.",
    url: "https://github.com/yoshimario/kipina_cv/blob/main/kipina.pdf",
  },
  {
    title: "Art Decoder - Command Line Tool",
    description:
      "The Art Decoder is a command-line tool designed to help artists like Chris generate text-based art more efficiently. It allows users to encode and decode text-based art using a simple syntax for repeating characters.",
    url: "https://github.com/yoshimario/art/tree/main/art-decoder",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
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

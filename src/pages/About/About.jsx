import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              BookstorApp is a simple and powerful platform built for book
              lovers who want to explore and discover books from across the
              world. With an easy-to-use interface and access to a vast
              collection of titles, BookstorApp lets you search books by title,
              author, or subject, and view essential details like cover images,
              publication years, and edition counts. Whether you're researching
              a classic novel or looking for your next great read, we make it
              easy to find exactly what you need.
            </p>
            <p className="fs-17">
              Our goal is to make book discovery enjoyable, fast, and accessible
              to everyone. Powered by open data and built with modern web
              technologies, BookstorApp combines clean design with smart
              functionality to enhance your browsing experience. Whether you're
              a student, a casual reader, or a passionate bibliophile,
              BookstorApp is here to support your reading journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
